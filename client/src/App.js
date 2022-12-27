import React, { useState, useEffect, useMemo } from "react";
import About from "./components/About";
import LanguageBtn from "./components/LanguageBtn";

function App() {
  const [data, setData] = useState(null);
  const [listLang, setListLang] = useState(null);
  const [lang, setLang] = useState( 'ua' );

  const changeLanguage = (flag) => {
    setLang(flag);
  };
  
  useEffect(() => {
    fetch('/listLang')
    .then((response) => response.json())
    .then((response) => setListLang(response));
  }, []);

  useMemo(() => {
    if(!!sessionStorage.getItem(`${lang}List`)) {
      return setData(JSON.parse(sessionStorage.getItem(`${lang}List`)));
    }

    fetch(`/${lang}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response)
        sessionStorage.setItem(`${lang}List`, JSON.stringify(response));
      })

  }, [lang]);


  return (
    <div className="flex flex-col	bg-gray-500">
      <LanguageBtn listLang={listLang} changeLanguage={changeLanguage} />
      <About data={data} />
    </div>
  );
}

export default App;

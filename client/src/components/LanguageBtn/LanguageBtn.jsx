import React from "react";

const LanguageBtn = ({ listLang, changeLanguage }) => {
  return (
    <div className="flex justify-end">
      {
        listLang?.map((lg, i) => {
          return (
            <button
              key={i}
              onClick={() => changeLanguage(lg)}
              className="bg-purple-100 py-2 px-6 m-1 rounded-lg"
            >
              {lg}
            </button>
          );
        })
      }
    </div>
  );
};

export default LanguageBtn;
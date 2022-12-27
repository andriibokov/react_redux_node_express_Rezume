import React from "react";
import st from "./About.module.css"

const About = ({data}) => {
  return (
    <>
      {
        !data? "loading...": 
        <main className={st.main}>
          <div className="container my-5">
            <h2 className="my-3">{data?.title}</h2>
            <div>
              {data?.name?.label}
              {data?.name?.value}
            </div>
            <div>
              {data?.date?.label}
              {data?.date?.value}
            </div>
            <div>
              {data?.married?.label}
              {data?.married?.value}
            </div>
            <div>
              <h2 className="my-3">{data?.education?.title}</h2>
              <ul>
                {data?.education?.list?.map((item, index) => {
                  return (
                    <li className="my-2" key={index}>
                      <h3>{item?.label}</h3>
                      <ul>
                        {item?.list?.map((el, index) => {
                          return (
                            <li className="my-2" key={index}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>
      }
    </>
  );
}

export default About;
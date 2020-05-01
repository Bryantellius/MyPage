import * as React from "react";

const Home: React.FC<IHomeProps> = () => {
  return (
    <>
      <div
        id="homeMainDiv"
        className="d-flex justify-content-center align-items-center my-5"
      >
        <div className="d-flex flex-column justify-content-center align-items-end p-3 border-right rounded shadow bg-light">
          <h1 id="homeHeader">Ben Bryant</h1>

          <div id="homeCityDiv" className="d-flex justify-content-betwee">
            <div id="homeCityName" className="p-1">
              Birmingham, AL
            </div>
            <div id="homeCityPic" className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export interface IHomeProps {}

export default Home;
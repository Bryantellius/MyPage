import * as React from "react";

const Experience: React.FC<IExperienceProps> = () => {
  const focus = (photoPath: string) => {
    let image = document.getElementById(photoPath);
    image.style.display = "block";
  };

  return (
    <main className="container shadow appear">
      <div className="enlargedPicDiv" id="homePic">
        <div id="xpX">X</div>
        <img
          className="enlargedPic"
          src="/assets/HomePage.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="addPic">
        <div id="xpX">X</div>
        <img
          className="enlargedPic"
          src="/assets/AddPage.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="logInPic">
        <div id="xpX">X</div>
        <img
          className="enlargedPic"
          src="/assets/LogInPage.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="userPic">
        <div id="xpX">X</div>
        <img
          className="enlargedPic"
          src="/assets/UserPage.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div id="experienceDiv" className="rounded p-3">
        <h1
          id="aboutHeader"
          className="p-2 text-light border-bottom border-light"
        >
          My Work
        </h1>
        <h3 className="my-3 p-2 border-bottom text-light">Strider</h3>
        <p className="text-light">
          Strider is a simple web application that allows users to log in,
          create a manual entry of their fitness activity, and share it with
          their followers. My goal was to practice my full stack developer
          skills by imitating Strava's main capabilities.
        </p>
        <div className="badge badge-light mx-2 my-1">React</div>
        <div className="badge badge-light mx-2 my-1">MySQL</div>
        <div className="badge badge-light mx-2 my-1">JavaScript</div>
        <div className="badge badge-light mx-2 my-1">PassportJS</div>
        <div className="row my-2 p-2">
          <button className="btn btn-sm btn-secondary mx-2">Source Code</button>
          <button className="btn btn-sm btn-info mx-2">View Live</button>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/HomePage.png"
                alt="Strider Home Page"
                onClick={() => focus("homePic")}
              />
            </div>
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/AddPage.png"
                alt="Strider Add Page"
                onClick={() => focus("addPic")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/LogInPage.png"
                alt="Log In Page"
                onClick={() => focus("logInPic")}
              />
            </div>
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/UserPage.png"
                alt="User Profile Page"
                onClick={() => focus("userPic")}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export interface IExperienceProps {}

export default Experience;

import * as React from "react";

const StriderXP: React.FC<IStriderXPProps> = () => {
  const [showing, setShowing] = React.useState<Boolean>(false);

  const focus = (photoPath: string) => {
    let image = document.getElementById(photoPath);
    if (showing) {
      image.style.display = "none";
      setShowing(false);
    } else {
      image.style.display = "block";
      setShowing(true);
    }
  };

  return (
    <div id="striderXP" className="container rounded p-3">
      <div className="enlargedPicDiv" id="homePic">
        <div id="xpX" onClick={() => focus("homePic")}>
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
            className="feather feather-x text-light"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <img
          loading="lazy"
          className="enlargedPic"
          src="/assets/HomePage.PNG"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="addPic">
        <div id="xpX" onClick={() => focus("addPic")}>
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
            className="feather feather-x text-light"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <img
          loading="lazy"
          className="enlargedPic"
          src="/assets/AddPage.PNG"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="logInPic">
        <div id="xpX" onClick={() => focus("logInPic")}>
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
            className="feather feather-x text-light"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <img
          loading="lazy"
          className="enlargedPic"
          src="/assets/LogInPage.PNG"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="userPic">
        <div id="xpX" onClick={() => focus("userPic")}>
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
            className="feather feather-x text-light"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <img
          loading="lazy"
          className="enlargedPic"
          src="/assets/UserPage.PNG"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="p-3">
        <h3 className="my-3 p-2 border-bottom text-light">Strider</h3>
        <p className="text-light">
          Strider is a simple web application that allows users to log in,
          create a manual entry of their fitness activity, and share it with
          their followers. My goal was to practice my full stack developer
          skills by imitating Strava's main capabilities.
        </p>
        <div className="my-2 d-flex flex-wrap">
          <h5 className="mr-3">
            <span className="badge badge-light">React</span>
          </h5>
          <h5 className="mr-3">
            <span className="badge badge-light">MySQL</span>
          </h5>
          <h5 className="mr-3">
            <span className="badge badge-light">JavaScript</span>
          </h5>
          <h5 className="mr-3">
            <span className="badge badge-light">NodeJS</span>
          </h5>
          <h5 className="mr-3">
            <span className="badge badge-light">PassportJS</span>
          </h5>
          <h5 className="mr-3">
            <span className="badge badge-light">Bootstrap</span>
          </h5>
        </div>
        <div className="row my-2 p-2">
          <a
            href="https://github.com/Bryantellius/Striders_FS.git"
            className="btn btn-sm btn-secondary mx-2"
          >
            Source Code
          </a>
          <a
            href="https://still-taiga-99815.herokuapp.com/"
            className="btn btn-sm btn-info mx-2"
          >
            View Live
          </a>
        </div>
        <div className="p-2 text-light">
          <h5>Activity Interface</h5>
          <p>
            Users can add, update, or delete their own activity entry once
            signed in. Each user also has a profile dashboard that displays
            their accummulated mileage per activity type and total number of
            activities per type (i.e. run, walk, bike, swim).
          </p>
        </div>
        <div className="p-2 text-light">
          <h5>Social Interface</h5>
          <p>
            Users can select to follow other athletes to view their activities
            on their home timeline. Users can either search for a specific user
            to follow, or select users from a curated suggested follows list to
            the side of the home page.
          </p>
        </div>
        {/* Row of cards with snapshots of Strider */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                loading="lazy"
                className="xpPic"
                src="/assets/HomePage.PNG"
                alt="Strider Home Page"
                onClick={() => focus("homePic")}
              />
            </div>
            <div className="card my-3">
              <img
                loading="lazy"
                className="xpPic"
                src="/assets/AddPage.PNG"
                alt="Strider Add Page"
                onClick={() => focus("addPic")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                loading="lazy"
                className="xpPic"
                src="/assets/LogInPage.PNG"
                alt="Log In Page"
                onClick={() => focus("logInPic")}
              />
            </div>
            <div className="card my-3">
              <img
                loading="lazy"
                className="xpPic"
                src="/assets/UserPage.PNG"
                alt="User Profile Page"
                onClick={() => focus("userPic")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface IStriderXPProps {}

export default StriderXP;

import * as React from "react";

const Experience: React.FC<IExperienceProps> = () => {
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
    <main className="container shadow appear">
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
          className="enlargedPic"
          src="/assets/HomePage.png"
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
          className="enlargedPic"
          src="/assets/AddPage.png"
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
          className="enlargedPic"
          src="/assets/LogInPage.png"
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

import * as React from "react";

const TSXP: React.FC<ITSXPProps> = () => {
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
    <div id="tsXP" className="container rounded p-3">
      <div className="enlargedPicDiv" id="TSHomePage">
        <div id="xpX" onClick={() => focus("TSHomePage")}>
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
          src="/assets/TSHome.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="TSLearnPage">
        <div id="xpX" onClick={() => focus("TSLearnPage")}>
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
          src="/assets/TSLearn.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="TSAdminInventory">
        <div id="xpX" onClick={() => focus("TSAdminInventory")}>
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
          src="/assets/TSAdminInventory.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="enlargedPicDiv" id="TSAdminEdit">
        <div id="xpX" onClick={() => focus("TSAdminEdit")}>
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
          src="/assets/TSAdminEdit.png"
          alt="Home Page Enlarged"
        />
      </div>
      <div className="p-3">
        <h3 className="my-3 p-2 border-bottom text-light">
          Trak Shak Employee Dashboard
        </h3>
        <p className="text-light">
          The Trak Shak Employee Dashboard is a conceptual design for an
          workplace application designed for parttime employees of the Trak Shak
          to learn and stay up to date on shoe inventory, sales, or company
          messages.
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
            href="https://github.com/Bryantellius/Training-Cards.git"
            className="btn btn-sm btn-secondary mx-2"
          >
            Source Code
          </a>
          <a
            href="https://trakshak-dashboard.herokuapp.com/"
            className="btn btn-sm btn-info mx-2"
          >
            View Live
          </a>
        </div>
        <div className="p-2 text-light">
          <h5>Employee Access</h5>
          <p>
            Employees can log into their Trak Shak dashboard to see any recent
            management messages. From the home screen, they are able to navigate
            to a Learn tab where training cards are available for learning and
            retaining product knowledge. They can also filter through certain
            shoes with filter options in the left column. Also, the footer of
            the dashboard contains upcoming races to be aware about.
          </p>
        </div>
        <div className="p-2 text-light">
          <h5>Management Access</h5>
          <p>
            Management level employees are granted admin access which enables
            them to be able to navigate to the admin tab. There they have
            several options including adding and editing company messages,
            inventory, or employees.
          </p>
        </div>
        {/* Row of cards with snapshots of TS Dashboard */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/TSHome.png"
                alt="Trak Shak Home Page"
                onClick={() => focus("TSHomePage")}
              />
            </div>
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/TSLearn.png"
                alt="Trak Shak Learn Page"
                onClick={() => focus("TSLearnPage")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/TSAdminInventory.png"
                alt="Trak Shak Admin Inventory Options"
                onClick={() => focus("TSAdminInventory")}
              />
            </div>
            <div className="card my-3">
              <img
                className="xpPic"
                src="/assets/TSAdminEdit.png"
                alt="Trak Shak Admin Edit Options"
                onClick={() => focus("TSAdminEdit")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ITSXPProps {}

export default TSXP;

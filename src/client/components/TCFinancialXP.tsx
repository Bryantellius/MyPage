import * as React from "react";

const TCFinancialXP: React.FC<ITCFinancialXPProps> = () => {
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
    <div id="TCFinancialXP" className="container rounded p-3">
      <div className="p-3">
        <h3 className="my-3 p-2 border-bottom text-light">
          TrueCoders Financial App
        </h3>
        <p className="text-light">
          A finance application for tracking subscriptions, tuition payments and
          schedules from TrueCoders’ student body. The app includes a calendar
          with projected payment schedules, a list and filterable view of all
          accounts receivable, and functionality for charging, or recharging
          failed payments. The app works extensible with Stripe’s API.
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
            href="#"
            title="Source code and Live view contain sensitive information to TrueCoders."
            className="btn btn-sm btn-secondary mx-2 disabled"
          >
            Source Code
          </a>
          <a
            href="#"
            title="Source code and Live view contain sensitive information to TrueCoders."
            className="btn btn-sm btn-info mx-2 disabled"
          >
            View Live
          </a>
        </div>
        <div className="p-2 text-light">
          <h5>Financial Tracking</h5>
          <p>
            Users can view payment information and schedules in several list
            views, a reports view, and a calendar view.
          </p>
        </div>
        <div className="p-2 text-light">
          <h5>Collections Assistance</h5>
          <p>
            Administrators can view a filterable list all accounts receivable,
            and charge or recharge failed payments.
          </p>
        </div>
        <div className="p-2 text-light">
          <h3 className="text-center">Photos Unavailable</h3>
        </div>
      </div>
    </div>
  );
};

export interface ITCFinancialXPProps {}

export default TCFinancialXP;

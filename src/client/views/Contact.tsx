import * as React from "react";
import { apiService } from "../utils/apiService";

const Contact: React.FC<IContactProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let alert = document.getElementById("alert");

    if (email === "" || subject === "" || message === "") {
      alert.classList.replace("alert-success", "alert-danger");
      alert.innerHTML = "Please provide values for each input.";
      alert.style.display = "block";
    } else {
      let result = await apiService("/api/email", "POST", {
        email,
        subject,
        message,
      });

      setEmail("");
      setSubject("");
      setMessage("");

      alert.classList.replace("alert-danger", "alert-success");
      alert.innerHTML = "Thanks for connecting. You'll hear from me soon.";
      alert.style.display = "block";
    }
  };

  return (
    <main className="container d-flex flex-column align-items-center appear">
      <div
        id="alert"
        className="hide appear alert alert-success col-lg-6 col-sm-12 col-md-8"
      ></div>
      <div className="appear col-lg-6 col-sm-12 col-md-8 card shadow p-3">
        <h3 className="p-2 border-bottom border-info">Contact Me Via Email</h3>
        <div className="input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="prependEmail">
              Email
            </span>
          </div>
          <input
            placeholder="Your Email"
            aria-label="Email"
            aria-describedby="prependEmail"
            className="form-control"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="prependSubject">
              Subject
            </span>
          </div>
          <input
            placeholder="Subject"
            aria-label="Subject"
            aria-describedby="prependSubject"
            className="form-control"
            value={subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="prependMessage">
              Message
            </span>
          </div>
          <textarea
            aria-label="Message"
            className="form-control"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          />
        </div>

        <button
          className="btn btn-dark w-50 mx-auto shadow"
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
      <div className="appear alert alert-info col-lg-6 col-sm-12 col-md-8 shadow p-3 my-3">
        <h6 className="p-2 border-top border-dark text-muted">
          Thank you for taking the time to view this site.
        </h6>
      </div>
    </main>
  );
};

export interface IContactProps {}

export default Contact;

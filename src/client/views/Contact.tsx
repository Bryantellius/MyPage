import * as React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { apiService } from "../utils/apiService";

const Contact: React.FC<IContactProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [sent, setSent] = React.useState<boolean>(false);

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log({ email, subject, message });
    let result = await apiService("/api/email", "POST", {
      email,
      subject,
      message,
    });
    setEmail("");
    setSubject("");
    setMessage("");
    setSent(true);
  };

  //   React.useEffect(() => {}, [sent]);

  if (sent) {
    return (
      <main className="container">
        <Alert
          variant="success"
          className="w-50 mx-auto"
          onClose={() => setSent(false)}
          dismissible
        >
          <h6 className="text-center">
            Thanks for connecting. You'll hear from me soon.
          </h6>
        </Alert>
        <div className="w-50 mx-auto card shadow p-3">
          <h3 className="p-2 border-bottom border-info">
            Contact Me Via Email
          </h3>
          <InputGroup className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependEmail">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Your Email"
              aria-label="Email"
              aria-describedby="prependEmail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependSubject">Subject</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Subject"
              aria-label="Subject"
              aria-describedby="prependSubject"
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependMessage">Message</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="Message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
          </InputGroup>

          <Button
            variant="dark"
            className="w-50 mx-auto shadow"
            onClick={sendEmail}
          >
            Send
          </Button>
        </div>
      </main>
    );
  } else {
    return (
      <main className="container my-5">
        <div className="w-50 mx-auto card shadow p-3">
          <h3 className="p-2 border-bottom border-info">
            Contact Me Via Email
          </h3>
          <InputGroup className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependEmail">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Your Email"
              aria-label="Email"
              aria-describedby="prependEmail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependSubject">Subject</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Subject"
              aria-label="Subject"
              aria-describedby="prependSubject"
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prependMessage">Message</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="Message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
          </InputGroup>

          <Button
            variant="dark"
            className="w-50 mx-auto shadow"
            onClick={sendEmail}
          >
            Send
          </Button>
        </div>
        <Alert variant="info" className="w-50 mx-auto shadow p-3 my-3">
          <h6 className="p-2 border-top border-dark text-muted">
            Thank you for taking the time to view this site.
          </h6>
        </Alert>
      </main>
    );
  }
};

export interface IContactProps {}

export default Contact;

import * as React from "react";
import { InputGroup, FormControl, Button, Alert } from "react-bootstrap";
import { apiService } from "../utils/apiService";

const Contact: React.FC<IContactProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [sent, setSent] = React.useState<boolean>(false);

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log({ email, subject, message });
    let result = await apiService("/api/email", "POST", { email, subject, message });
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
          <InputGroup className="mb-3">
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
            variant="primary"
            className="w-50 mx-auto"
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
          <InputGroup className="mb-3">
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
            variant="primary"
            className="w-50 mx-auto"
            onClick={sendEmail}
          >
            Send
          </Button>
        </div>
      </main>
    );
  }
};

export interface IContactProps {}

export default Contact;

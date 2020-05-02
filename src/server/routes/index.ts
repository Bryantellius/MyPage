import * as express from "express";
import { sendEmail } from "../utils/mailgun";

const router = express.Router();

router.post("/api/email", async (req, res, next) => {
  try {
    await sendEmail(
      "brbryant2639@gmail.com",
      req.body.email,
      req.body.subject,
      req.body.message
    );
    res.send({ msg: "Email sent!" });
  } catch (e) {
    console.log(e);
    throw e;
  }
});

export default router;

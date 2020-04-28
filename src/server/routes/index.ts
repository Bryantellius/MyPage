import * as express from "express";

const router = express.Router();

router.get("/demo", (req, res) => {
  res.json({ msg: "Hello!" });
});

export default router;
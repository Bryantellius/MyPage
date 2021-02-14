import * as express from "express";
import * as path from "path";

const router = express.Router();

router.get("/characters", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../src/server/assets/characters.json"));
  } catch (err) {
    next(err);
  }
});

export default router;
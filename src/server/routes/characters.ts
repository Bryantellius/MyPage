import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import characters from "../assets/characters.json";

const router = express.Router();

router.get("/characters", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../src/server/assets/characters.json"));
  } catch (err) {
    next(err);
  }
});

router.get("/characters/:name", (req, res, next) => {
  try {
    let name: string = req.params.name;
    let json: JSON;
    const data = fs.readFileSync(
      path.join(__dirname, "../src/server/assets/characters.json"),
      "utf8"
    );
    const { list } = JSON.parse(data.toString());
    console.log(list);
    console.log(name);
    list.forEach((character: any) => {
      if (name.toLowerCase() === character.name.toLowerCase()) {
        json = character;
      }
    });
    console.log(json);
    res.send(json);
  } catch (err) {
    next(err);
  }
});

export default router;

import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
const cors = require("cors");
import router from "./routes";

const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.get("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

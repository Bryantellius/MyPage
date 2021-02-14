import * as express from "express";
import characterRouter from "./characters";
import emailRouter from "./email";

const router = express.Router();

router.use("/api", emailRouter);
router.use("/api/v1", characterRouter);

export default router;

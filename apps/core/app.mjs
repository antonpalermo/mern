import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";

import path from "node:path";
import url from "node:url";

import indexRouter from "./routes/index.mjs";
import usersRouter from "./routes/users.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;

import cookieParser from "cookie-parser";
import debug from "debug";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import path from "node:path";
import url from "node:url";

import indexRouter from "./routes/index.mjs";
import usersRouter from "./routes/users.mjs";

const mongoDBLogger = debug("core:mongodb");

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

mongoose
  .connect(process.env.DATABASE_URL, {
    authSource: "admin",
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD
  })
  .then(() => mongoDBLogger("database connected"))
  .catch(e =>
    mongoDBLogger("unable to connect to mongodb. please check connection", e)
  );

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;

import debug from "debug";
import mongoose from "mongoose";

const logger = debug("core:database");

async function connect() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      authSource: "admin",
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD
    })
    .catch(e => logger("unable to connect, please database connection"));

  mongoose.connection.on("connected", () => logger("connected"));
}

export default { connect };

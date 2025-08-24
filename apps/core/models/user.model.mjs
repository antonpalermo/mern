import mongoose from "mongoose";

const model = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String
  }
});

export const User = mongoose.model("users", model);

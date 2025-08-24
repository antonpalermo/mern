import express from "express";
import { User } from "../models/user.model.mjs";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/new", async function (request, response, next) {
  const body = request.body;

  try {
    const newUser = await User.create({
      name: body.name
    });

    return response.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;

import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";

router.post("/payment", UserController.createUser);

export default router;
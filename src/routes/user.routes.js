const userRoute = require("express").Router();

const userController = require("../controllers/user.controllers");

userRoute.get("/", userController.getAllUserAddress);

userRoute.post("/post", userController.postUserAddress);

module.exports = userRoute;

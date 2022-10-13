const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.routes");
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
require("./src/db/connection");

app.use(express.json());

app.use("/api", userRoute);

app.use((req, res) => {
  console.log("invalid page request");
  res
    .status(400)
    .send(
      "<h1><i><strong> ( 404 ) Page Not Found , Invalid page request</i></h1>"
    );
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

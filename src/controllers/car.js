const app = require("../config/express");

console.log("load car module");

app.get("/car", function (_, res) {
  res.send("CarModule/Hello World");
});

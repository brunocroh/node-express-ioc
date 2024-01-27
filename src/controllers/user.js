const app = require("../config/express");

console.log("load user module");

app.get("/user", function (_, res) {
  res.send("Hello World");
});

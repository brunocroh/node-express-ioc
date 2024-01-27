global.__basedir = __dirname;

const app = require("./config/express");
const loadControllers = require("./config/controllers");

loadControllers(app);

app.listen(3000, () => {
  console.log("server init");
});

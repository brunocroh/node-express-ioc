const app = require("./config/express");
require("./controllers");

app.listen(3000, () => {
  console.log("server init");
});

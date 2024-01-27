const fs = require("fs");
const path = require("path");

module.exports = async (app) => {
  const folder = path.join(__basedir, "controllers");

  console.log({ folder });

  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error(err);
    }

    return files.forEach((file) => {
      const module = require(path.join(folder, file));
      module(app);
    });
  });
};

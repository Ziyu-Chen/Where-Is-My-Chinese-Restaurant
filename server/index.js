const app = require("./app");
const insertData = require("../data/insertData");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running insertData...");
    await insertData();

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

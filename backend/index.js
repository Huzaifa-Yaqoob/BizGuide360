const express = require("express");
const User = require("./src/routes/user");
const Business = require("./src/routes/business");
const Category = require("./src/routes/category");
const Location = require("./src/routes/location");
const BusinessClaim = require("./src/routes/business_claim");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.route("/", User);
app.route("/business", Business);
app.route("/category", Category);
app.route("/location", Location);
app.route("/business-claims", BusinessClaim);

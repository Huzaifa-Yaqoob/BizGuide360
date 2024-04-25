const express = require("express");
const connectDB = require("./src/database/db");
const User = require("./src/routes/user");
const Business = require("./src/routes/business");
const Category = require("./src/routes/category");
const Location = require("./src/routes/location");
const BusinessClaim = require("./src/routes/business_claim");
const app = express();
const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err, "Error while connecting to the database");
  });

app.use("/", User);
app.use("/business", Business);
app.use("/category", Category);
app.use("/location", Location);
app.use("/business-claims", BusinessClaim);

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database/db");
const User = require("./src/routes/user");
const Business = require("./src/routes/business");
const Category = require("./src/routes/category");
const Location = require("./src/routes/location");
const BusinessClaim = require("./src/routes/business_claim");

const port = process.env.PORT;
const frontEndOrigin = process.env.FRONTEND_URL;

const app = express();

app.use(cors({ origin: frontEndOrigin }));

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err, "Error while connecting to the database");
  });

app.use(express.json());
app.use("/", User);
app.use("/business", Business);
app.use("/category", Category);
app.use("/location", Location);
app.use("/business-claims", BusinessClaim);

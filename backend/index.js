const cors = require("cors");
const path = require("path");
const express = require("express");
const connectDB = require("./src/database/db");
const User = require("./src/routes/user");
const Business = require("./src/routes/business");
const Category = require("./src/routes/category");
const Area = require("./src/routes/area");
const BusinessClaim = require("./src/routes/business_claim");

const port = process.env.PORT;
const frontEndOrigin = process.env.FRONTEND_URL;

const app = express();

app.use(cors({ origin: frontEndOrigin }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

app.use("/area", Area);

app.use("/business-claims", BusinessClaim);

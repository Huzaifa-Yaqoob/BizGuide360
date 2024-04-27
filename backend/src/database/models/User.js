const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Validate that the value is a valid email address
          return /\S+@\S+\.\S+/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: { type: String },
    businesses: {
      type: [Schema.Types.ObjectId],
      ref: "Business",
      required: true,
    },
    claims: {
      type: [Schema.Types.ObjectId],
      ref: "ClaimRequest",
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    // Generate a salt with a factor of 10
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the generated salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw new Error("Error hashing password");
  }
});

module.exports = mongoose.model("User", UserSchema);

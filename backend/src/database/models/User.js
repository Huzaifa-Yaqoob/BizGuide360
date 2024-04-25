const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", UserSchema);

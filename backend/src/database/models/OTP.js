const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const OTPSchema = new Schema(
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
      validate: {
        validator: function (value) {
          // Validate that the value is a valid email address
          return /\S+@\S+\.\S+/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 6,
    },
    expiredAt: {
      type: Date,
      required: true,
      default: function () {
        return new Date(Date.now() + 2 * 60 * 60 * 1000);
      },
    },
  },
  { timestamps: true }
);

OTPSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.otp = await bcrypt.hash(this.otp, salt);
    next();
  } catch (error) {
    throw new Error("Error hashing password");
  }
});

OTPSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 3600 });

module.exports = mongoose.model("OTP", OTPSchema);

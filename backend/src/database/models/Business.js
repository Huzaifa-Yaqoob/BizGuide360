const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BusinessSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, minlength: 3, maxlength: 75 },
    description: {
      type: String,
      minlength: 50,
      maxlength: 500,
    },
    imagesUrl: { type: [String] },
    location: {
      lat: {
        type: Number,
        required: function () {
          // Required if location object is provided
          return (
            this.location &&
            (this.location.lat !== undefined || this.location.lng !== undefined)
          );
        },
      },
      lng: {
        type: Number,
        required: function () {
          // Required if location object is provided
          return (
            this.location &&
            (this.location.lat !== undefined || this.location.lng !== undefined)
          );
        },
      },
    },
    links: {
      whatsapp: {
        type: String,
        validate: {
          validator: function (value) {
            // Validate that the value is a Pakistani phone number (e.g., starts with +92)
            return /^(\+92|92|0)?[3456789]\d{9}$/.test(value);
          },
          message: (props) =>
            `${props.value} is not a valid Pakistani phone number`,
        },
      },
      phone: {
        type: String,
        validate: {
          validator: function (value) {
            // Validate that the value is a Pakistani phone number (e.g., starts with +92)
            return /^(\+92|92|0)?[3456789]\d{9}$/.test(value);
          },
          message: (props) =>
            `${props.value} is not a valid Pakistani phone number`,
        },
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
      website: {
        type: String,
        validate: {
          validator: function (value) {
            // Validate that the value is a valid website URL
            return /^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d]{2,}(\/[\w\d-]+)*\/?$/.test(
              value
            );
          },
          message: (props) => `${props.value} is not a valid website URL`,
        },
      },
      facebook: {
        type: String,
        validate: {
          validator: function (value) {
            // Validate that the value is a Facebook URL
            return /^https:\/\/(www\.)?facebook.com\/.*/.test(value);
          },
          message: (props) => `${props.value} is not a valid Facebook URL`,
        },
      },
      instagram: {
        type: String,
        validate: {
          validator: function (value) {
            // Validate that the value is an Instagram URL
            return /^https:\/\/(www\.)?instagram.com\/.*/.test(value);
          },
          message: (props) => `${props.value} is not a valid Instagram URL`,
        },
      },
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    openingTime: {
      type: Date,
      validate: {
        validator: function (value) {
          // Custom validator to check if the time is in the correct format
          return /\d{1,2}:\d{2}\s(AM|PM)/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid time format (e.g., 9:00 AM)`,
      },
    },
    closingTime: {
      type: Date,
      validate: {
        validator: function (value) {
          // Custom validator to check if the time is in the correct format
          return /\d{1,2}:\d{2}\s(AM|PM)/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid time format (e.g., 9:00 AM)`,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", BusinessSchema);

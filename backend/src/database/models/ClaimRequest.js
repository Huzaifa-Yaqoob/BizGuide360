const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClaimRequestSchema = new Schema(
  {
    business: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    currentOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requestor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClaimRequest", ClaimRequestSchema);

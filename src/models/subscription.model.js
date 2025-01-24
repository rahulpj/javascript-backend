import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subsciber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subsciption = mongoose.model("Subscription", subscriptionSchema);

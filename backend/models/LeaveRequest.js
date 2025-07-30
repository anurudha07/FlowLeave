import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
  {
    employee: {
      type: String,
      required: [true, "Please enter Employee name."]
    },
    from: {
      type: Date,
      required: [true,"Please enter start date."]
    },
    to: {
      type: Date,
      required: [true,"Please enter end date."]
    },
    reason: {
      type: String,
      required: [true,"Please enter reason."]
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("LeaveRequest", leaveSchema);

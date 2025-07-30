import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"Please enter your name."],
      unique:true,
      trim:true
    },
    email: {
      type: String,
      required: [true,"Please enter your email."],
      unique: true,
    },
    password: {
      type: String,
      minlength:[8,"Password Should be equal or greater than 8 characters"],
      required: [true,"Please enter your password."]
    },
    department: {
      type: String,
      required: [true,"Please enter your department."]
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

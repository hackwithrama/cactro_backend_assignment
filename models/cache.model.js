import mongoose from "mongoose";

const cacheSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Key is required"],
      trim: true,
      minlength: 1,
      maxlength: 50,
    },
    value: {
      type: String,
      required: [true, "Value is required"],
      minlength: 1,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const Cache = mongoose.model("Cache", cacheSchema);
export default Cache;

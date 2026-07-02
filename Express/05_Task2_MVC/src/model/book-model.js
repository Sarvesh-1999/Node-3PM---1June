import mongoose from "mongoose";

// title , year , author

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },

    author: {
      type: String,
      required: [true, "Please provide author name"],
      trim: true,
    },

    year: {
      type: Number,
      required: [true, "Please provide publication year"],
      min: [1000, "Publication year cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "Publication year cannot be more than current year",
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model("book", bookSchema);

// mongoose.model("collectionName", schema);

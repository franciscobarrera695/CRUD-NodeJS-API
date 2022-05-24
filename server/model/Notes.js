import mongoose from "mongoose";

const { Schema, model } = mongoose;

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Notes',notesSchema)

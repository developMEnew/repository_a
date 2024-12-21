import mongoose, { Document, Schema } from "mongoose";

export interface IClip extends Document {
  id: number;
  clipName: string;
  attCount: number;
  userId: string;
  type: string;
}

const clipSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  clipName: {
    type: String,
    required: true,
  },
  attCount: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Clip =mongoose.models.clips || mongoose.model<IClip>("clips", clipSchema);

export default Clip ;
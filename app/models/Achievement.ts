import mongoose, { Document, Schema } from "mongoose";

export interface IAchievement extends Document {
  uId: number;
  uName: string;
  uMonth: string;
  traget: number;
  countOfDates: number;
  deltaAchievement: number;
}

const achievementSchema: Schema = new mongoose.Schema({
    uId: {
    type: Number,
    required: true,
  },
  uName: {
    type: String,
    required: true,
  },
  uMonth: {
    type: String,
    required: true,
  },
  traget: {
    type: Number,
    required: true,
  },
  countOfDates: {
    type: Number,
    required: true,
  },
  deltaAchievement: {
    type: Number,
    required: true,
  },
});

const Achievements =mongoose.models.achievements || mongoose.model<IAchievement>("achievements", achievementSchema);

export default Achievements ;
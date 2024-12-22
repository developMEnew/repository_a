import mongoose, { Document, Schema } from "mongoose";

export interface IUserCalendar extends Document {
  userId: string;
  year: number;
  monthData: {
    [key: string]: {
      selectedDays: number[];
      target: number;
      achieved: number;
    }
  };
  lastUpdated: Date;
}

const userCalendarSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  year: {
    type: Number,
    required: true,
    default: new Date().getFullYear()
  },
  monthData: {
    type: Object,
    default: {}
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Create compound index for userId and year
userCalendarSchema.index({ userId: 1, year: 1 }, { unique: true });

const UserCalendar = mongoose.models.UserCalendar || mongoose.model<IUserCalendar>("UserCalendar", userCalendarSchema);

export default UserCalendar;
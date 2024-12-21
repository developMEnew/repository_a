import mongoose, { Document, Schema } from "mongoose";

// Define the ICalendar interface
export interface ICalendar2 extends Document {
  user: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}

// Calendar Schema definition
const calendarSchema2: Schema = new mongoose.Schema({
  user: {
    type: String,
    default: 0,
  },
  jan: {
    type: Number,
    default: 0,
  },
  feb: {
    type: Number,
    default: 0,
  },
  mar: {
    type: Number,
    default: 0,
  },
  apr: {
    type: Number,
    default: 0,
  },
  may: {
    type: Number,
    default: 0,
  },
  jun: {
    type: Number,
    default: 0,
  },
  jul: {
    type: Number,
    default: 0,
  },
  aug: {
    type: Number,
    default: 0,
  },
  sep: {
    type: Number,
    default: 0,
  },
  oct: {
    type: Number,
    default: 0,
  },
  nov: {
    type: Number,
    default: 0,
  },
  dec: {
    type: Number,
    default: 0,
  },
});
// Create or retrieve the model
const Calendar2 =
  mongoose.models.calendar ||
  mongoose.model<ICalendar2>("calendars", calendarSchema2);

export default Calendar2;

import mongoose, { Document, Schema } from "mongoose";

// Define the ICalendar interface
export interface ICalendar extends Document {
  id: number;
  user: string;
  months: object;
  
}

// Calendar Schema definition
const calendarSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0,
  },
  user: {
    type: String,
    default: "0",
  },
  months: {
    type: Object,
    default: {},
  
  },
});
// Create or retrieve the model
const CalendarView =
  mongoose.models.calendar ||
  mongoose.model<ICalendar>("calendars", calendarSchema);

export default CalendarView;

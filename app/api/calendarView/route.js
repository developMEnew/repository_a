import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import CalendarView from "../../models/CalenderView";

export async function GET() {
  await dbConnect(); // Ensure the database is connected

  try {
    // Fetch all documents from the 'Clip' collection
    const clips = await CalendarView.find({"user":"san_"});

    return NextResponse.json({ success: true, data: clips }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
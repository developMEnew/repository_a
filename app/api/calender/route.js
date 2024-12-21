import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Calendar from "@/app/models/Calender";

export async function GET() {
  await dbConnect(); // Ensure the database is connected

  try {
    // Fetch all documents from the 'Clip' collection
    const clips = await Calendar.findOne({"user":"san"});

    return NextResponse.json({ success: true, data: clips }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
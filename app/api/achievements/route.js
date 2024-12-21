import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Achievements from "@/app/models/Achievement";

export async function GET() {
  await dbConnect(); // Ensure the database is connected

  try {
    // Fetch all documents from the 'Clip' collection
    const clips = await Achievements.find();

    return NextResponse.json({ success: true, data: clips }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

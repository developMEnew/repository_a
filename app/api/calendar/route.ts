import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserCalendar from "@/app/models/UserCalendar";

export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const year = parseInt(searchParams.get("year") || new Date().getFullYear().toString());

  if (!userId) {
    return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
  }

  try {
    let calendar = await UserCalendar.findOne({ userId, year });
    
    if (!calendar) {
      // Create new calendar if it doesn't exist
      calendar = await UserCalendar.create({
        userId,
        year,
        monthData: Object.fromEntries(
          Array(12).fill(null).map((_, i) => [
            new Date(year, i).toLocaleString('en-US', { month: 'long' }),
            { selectedDays: [], target: 0, achieved: 0 }
          ])
        )
      });
    }

    return NextResponse.json({ success: true, data: calendar }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  await dbConnect();
  
  try {
    const body = await request.json();
    const { userId, year = new Date().getFullYear(), month, selectedDays, target, achieved } = body;

    if (!userId || !month) {
      return NextResponse.json({ 
        success: false, 
        error: "User ID and month are required" 
      }, { status: 400 });
    }

    const updateQuery = {
      $set: {
        [`monthData.${month}`]: {
          selectedDays: selectedDays || [],
          target: target || 0,
          achieved: achieved || 0
        },
        lastUpdated: new Date()
      }
    };

    const calendar = await UserCalendar.findOneAndUpdate(
      { userId, year },
      updateQuery,
      { 
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    return NextResponse.json({ success: true, data: calendar }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
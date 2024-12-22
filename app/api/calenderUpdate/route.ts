import { NextApiRequest, NextApiResponse } from 'next';
import Calendar from '@/app/models/Calender2'; // Adjust the path as per your project structure
import dbConnect from '@/lib/dbConnect';// Ensure you have a MongoDB connection utility

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); // Connect to the database

  // Extract data from the request body
  const { user, month, countOfDates } = req.body;

  // Validate the incoming request
  if (!user || !month || typeof countOfDates !== 'number') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data. Ensure user, month, and countOfDates are provided.',
    });
  }

  try {
    // Find the document and update it
    const updatedCalendar = await Calendar.findOneAndUpdate(
      { user, uMonth: month }, // Match user and month
      { $set: { countOfDates } }, // Update the countOfDates field
      { new: true } // Return the updated document
    );

    // Handle the case where no document is found
    if (!updatedCalendar) {
      return res.status(404).json({
        success: false,
        error: 'Document not found. Ensure the user and month are correct.',
      });
    }

    // Successfully updated, return the updated document
    res.status(200).json({
      success: true,
      data: updatedCalendar,
    });
  } catch (error: any) {
    // Handle any errors
    res.status(500).json({
      success: false,
      error: `Error updating calendar: ${error.message}`,
    });
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Use PUT method to update calendar data.' });
}

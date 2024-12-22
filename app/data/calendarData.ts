import { useEffect, useState } from "react";

// Temporary data structure to simulate database records (this will be replaced by API data)
export const preselectedDays = {
  January: [1, 5, 10, 15, 20],
  February: [2, 7, 12, 18, 25],
  March: [3, 8, 13, 19, 26],
  April: [4, 9, 14, 21, 27],
  May: [5, 10, 15, 22, 28],
  June: [1, 6, 11, 16, 23],
  July: [2, 7, 12, 17, 24],
  August: [3, 8, 13, 18, 25],
  September: [4, 9, 14, 19, 26],
  October: [5, 10, 15, 20, 27],
  November: [1, 6, 11, 16, 21],
  December: [2, 7, 12, 17, 22],
};

export function CalendarComponent() {
  const [calendarData, setCalendarData] = useState<{ [key: string]: number[] } | null>(null);

  // Fetch data from the API endpoint
  useEffect(() => {
    async function fetchCalendarData() {
      const response = await fetch("/api/calendarView"); // Adjust path based on your setup
      const result = await response.json();

      if (result.success) {
        setCalendarData(result.data[0].months); // Assuming we're using the first object in the response
      } else {
        console.error("Error fetching calendar data:", result.error);
      }
    }

    fetchCalendarData();
  }, []);

  // Function to get preselected days for the selected month
  const getPreselectedDaysForMonth = (month: string): Set<string> => {
    if (!calendarData) {
      // Fallback to static data if calendarData is not yet available
      const days = preselectedDays || [];
      return new Set(days.map((day) => `${month}-${day}-2025`));
    }

    // Using fetched data (from API)
    const days = calendarData[month] || []; // Get the days for the selected month
    return new Set(days.map((day) => `${month}-${day}-2025`));
  };

  // Example: Get preselected days for January
  const preselectedDaysForJanuary = getPreselectedDaysForMonth("January");

  
}

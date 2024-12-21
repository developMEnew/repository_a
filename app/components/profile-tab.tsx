import { useState } from 'react';
import { CalendarView } from './ui/calendar-view';
import { MonthSelector } from './ui/month-selector';
import { CounterDisplay } from './ui/counter-display';
import { MonthlySummary } from './ui/monthly-summary';
import { countSelectedDaysPerMonth } from '../utils/calendar';

export function ProfileTab() {
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleDayToggle = (day: string) => {
    const newSelectedDays = new Set(selectedDays);
    if (newSelectedDays.has(day)) {
      newSelectedDays.delete(day);
    } else {
      newSelectedDays.add(day);
    }
    setSelectedDays(newSelectedDays);
  };

  //////////////////////////////////////

  async function updateData(month: string, value: number) {
    const updatePayload = {
      user: "san",       // Example user identifier
      month: month.toLowerCase(),  // Use the lowercase version of the month
      countOfDates: value,      // Pass the selected count value
    };

    try {
      // Make PUT request with the data
      const response = await fetch("api/calender_update", {
        method: "PUT",  // Use PUT method for updating
        headers: {
          "Content-Type": "application/json",  // Ensure the content type is correct
        },
        body: JSON.stringify(updatePayload),  // Send the payload as a stringified JSON
      });

      const result = await response.json();  // Parse the response body as JSON

      // Handle success
      if (result.success) {
        console.log("Data updated successfully:", result.data);
      } else {
        console.error("Error updating achievement:", result.error);
      }
    } catch (error: any) {
      console.error("Error updating achievement:", error.message);
    }
  }

  ///////////////////////////////////////////

  const handleUpdate = () => {
    console.log(selectedDays);
    const monthCounts = countSelectedDaysPerMonth(selectedDays);
    const monthCountsX = monthCounts.get(selectedMonth) || 0;

    // Log for debugging
    console.log('Updating selected days for', selectedMonth, ':', monthCountsX);

    //////////////////////
    ///////// values passing //////////////
    // updateData(selectedMonth, monthCountsX);  // Call update function with values
  };

  const monthCounts = countSelectedDaysPerMonth(selectedDays);
  const currentMonthCount = monthCounts.get(selectedMonth) || 0;

  return (
    <div className="p-4 space-y-6">
      <CounterDisplay count={currentMonthCount} />
      <MonthSelector 
        selectedMonth={selectedMonth}
        onChange={setSelectedMonth}
      />
      <CalendarView
        month={selectedMonth}
        year={2025}
        selectedDays={selectedDays}
        onDayToggle={handleDayToggle}
      />
      <MonthlySummary monthlyCounts={monthCounts} />
      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
      >
        Update
      </button>
    </div>
  );
}

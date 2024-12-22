import { useCalendarState } from "../hooks/useCalendarState";
import { CalendarView } from "./ui/calendar-view";
import { MonthSelector } from "./ui/month-selector";
import { CounterDisplay } from "./ui/counter-display";
import { UpdateButton } from "./calendar/UpdateButton";
import { countSelectedDaysPerMonth } from "../utils/calendar";
import { useEffect, useState } from "react";

interface Calendar {
  id: number;
  user: string;
  months: {};
}

export function ProfileTab() {
  ////////////////
  const [data, setData] = useState<Calendar[] | null>(null);
  const [exData, setExData] = useState<{ [key: string]: number[] } | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/calendarView");
      const result = await response.json();

      if (result.success) {
        setData(result.data);
      } else {
        console.error("Error fetching calendar data:", result.error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setExData(data[0].months);
    }
  }, [data]);
  console.log(exData);
  //////////////////

  const {
    selectedDays,
    selectedMonth,
    setMonth,
    toggleDay,
    getSelectedDayNumbers,
  } = useCalendarState();

  const handleUpdate = () => {
    const selectedNumbers = getSelectedDayNumbers();
    console.log("Selected day numbers:", selectedNumbers);
  };

  const monthCounts = countSelectedDaysPerMonth(selectedDays );
  const currentMonthCount = monthCounts.get(selectedMonth) || 0;

  return (
    <div className="p-4 space-y-6">
      <CounterDisplay
        count={currentMonthCount}
        monthlyCounts={monthCounts}
        selectedMonth={selectedMonth}
      />
      <MonthSelector selectedMonth={selectedMonth} onChange={setMonth} />
      <CalendarView
        month={selectedMonth}
        year={2025}
        selectedDays={selectedDays}
        onDayToggle={toggleDay}
      />
      <UpdateButton onUpdate={handleUpdate} />
    </div>
  );
}

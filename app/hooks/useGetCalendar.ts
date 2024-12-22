import { useEffect, useState } from "react";

interface Calendar {
  id: number;
  user: string;
  months: { [key: string]: number[] }; // Define the structure of "months" properly
}

export function useGetCalendar() {
  const [data, setData] = useState<Calendar[] | null>(null);
  const [exData, setExData] = useState<{ [key: string]: number[] } | null>(null);

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
  return exData; // Return the extracted data
}

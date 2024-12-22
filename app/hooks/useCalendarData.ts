import { useState, useEffect } from 'react';
import { IUserCalendar } from '../models/UserCalendar';

interface UseCalendarDataProps {
  userId: string;
  year?: number;
}

interface MonthData {
  selectedDays: number[];
  target: number;
  achieved: number;
}

export function useCalendarData({ userId, year = new Date().getFullYear() }: UseCalendarDataProps) {
  const [calendarData, setCalendarData] = useState<IUserCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/calendar?userId=${userId}&year=${year}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error);
        }

        setCalendarData(result.data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching calendar data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchCalendarData();
    }
  }, [userId, year]);

  const updateCalendarData = async (month: string, data: Partial<MonthData>) => {
    try {
      setLoading(true);
      const response = await fetch('/api/calendar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          year,
          month,
          ...data
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      setCalendarData(result.data);
      return true;
    } catch (err: any) {
      console.error('Error updating calendar data:', err);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getMonthData = (month: string): MonthData | null => {
    if (!calendarData?.monthData?.[month]) {
      return null;
    }
    return calendarData.monthData[month];
  };

  return {
    calendarData,
    loading,
    error,
    updateCalendarData,
    getMonthData
  };
}
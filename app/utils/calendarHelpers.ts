export function createDayKey(month: string, day: number, year: number): string {
  return `${month}-${day}-${year}`;
}

export function parseDayKey(dayKey: string): {
  month: string;
  day: number;
  year: number;
} {
  const [month, day, year] = dayKey.split('-');
  return {
    month,
    day: parseInt(day),
    year: parseInt(year)
  };
}

export function getPreselectedDaysForMonth(
  month: string,
  calendarData?: {
    monthData?: {
      [key: string]: {
        selectedDays: number[];
        target?: number;
        achieved?: number;
      };
    };
  } | null
): Set<string> {
  if (!calendarData?.monthData) {
    return new Set();
  }

  const monthData = calendarData.monthData[month];
  if (!monthData?.selectedDays) {
    return new Set();
  }

  const year = new Date().getFullYear();
  return new Set(
    monthData.selectedDays.map(day => createDayKey(month, day, year))
  );
}
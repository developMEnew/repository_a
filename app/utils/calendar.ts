export interface MonthlyCount {
  month: string;
  count: number;
}

export const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export function getMonthFromKey(key: string): string {
  return key.split('-')[0];
}

export function countSelectedDaysPerMonth(selectedDays: Set<string>): Map<string, number> {
  const monthCounts = new Map<string, number>();
  
  selectedDays.forEach(dayKey => {
    const month = getMonthFromKey(dayKey);
    monthCounts.set(month, (monthCounts.get(month) || 0) + 1);
  });
  
  return monthCounts;
}
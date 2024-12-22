import { useState, useEffect } from 'react';
import { getPreselectedDaysForMonth } from '../data/calendarData';

export interface CalendarState {
  selectedDays: Set<string>;
  selectedMonth: string;
}

export function useCalendarState() {

  const [state, setState] = useState<CalendarState>({
    selectedDays: new Set<string>(),
    selectedMonth: 'January'
  });

  // Load pre-selected days when component mounts or month changes
  useEffect(() => {
    const preselectedDays = getPreselectedDaysForMonth(state.selectedMonth);
  
    setState(prevState => ({
      ...prevState,
      selectedDays: preselectedDays
    }));
  }, [state.selectedMonth]);

  const setMonth = (newMonth: string) => {
    setState({
      selectedDays: new Set<string>(),
      selectedMonth: newMonth
    });
  };

  const toggleDay = (day: string) => {
    const newDays = new Set(state.selectedDays);
    if (newDays.has(day)) {
      newDays.delete(day);
    } else {
      newDays.add(day);
    }
    setState({ ...state, selectedDays: newDays });
  };

  const getSelectedDayNumbers = () => {
    return Array.from(state.selectedDays)
      .filter(day => day.startsWith(state.selectedMonth))
      .map(day => parseInt(day.split('-')[1]))
      .sort((a, b) => a - b);
  };

  return {
    selectedDays: state.selectedDays,
    selectedMonth: state.selectedMonth,
    setMonth,
    toggleDay,
    getSelectedDayNumbers
  };
}
import { DailyEntry } from './ui/daily-entry';

export function ViewTab() {
  const dailyData = [
    {
      date: 'December 16, 2024',
      entries: [
        { id: 1, code: '0006', value: 6789 },
        { id: 2, code: '0006', value: 6789 },
        { id: 3, code: '0006', value: 6789 },
      ],
      total: 16789
    },
    {
      date: 'December 16, 2024',
      entries: [
        { id: 4, code: '0006', value: 6789 },
        { id: 5, code: '0006', value: 6789 },
      ],
      total: 16789
    },
    {
      date: 'December 16, 2024',
      entries: [
        { id: 6, code: '0006', value: 6789 },
        { id: 7, code: '0006', value: 6789 },
      ],
      total: 16789
    }
  ];

  return (
    <div className="p-4 pb-20">
      {dailyData.map((day, index) => (
        <DailyEntry
          key={index}
          date={day.date}
          entries={day.entries}
          total={day.total}
        />
      ))}
    </div>
  );
}
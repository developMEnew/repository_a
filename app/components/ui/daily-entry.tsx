interface DailyEntryProps {
  date: string;
  entries: Array<{
    id: number;
    code: string;
    value: number;
  }>;
  total: number;
}

export function DailyEntry({ date, entries, total }: DailyEntryProps) {
  return (
    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <h3 className="text-gray-600 mb-3">{date}</h3>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{entry.id}</span>
              <span>{entry.code}</span>
            </div>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200">
        <span className="font-medium">Total</span>
        <span className="font-medium text-blue-600">{total}</span>
      </div>
    </div>
  );
}
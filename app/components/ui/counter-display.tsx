interface CounterDisplayProps {
  count: number;
  monthlyCounts: Map<string, number>;
  selectedMonth: string;
}

export function CounterDisplay({ count, monthlyCounts, selectedMonth }: CounterDisplayProps) {
  const summaryEntries = Array.from(monthlyCounts.entries())
    .filter(([_, count]) => count > 0)
    .sort(([monthA], [monthB]) => monthA.localeCompare(monthB));

  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white">
      <div className="text-center mb-4">
        <h2 className="text-sm opacity-80 uppercase">Selected Days</h2>
        <span className="text-4xl font-bold block mt-2">{count}</span>
        <p className="text-sm mt-1">in {selectedMonth}</p>
      </div>
      
      {summaryEntries.length > 0 && (
        <div className="border-t border-white/20 mt-4 pt-4">
          <h3 className="text-sm opacity-80 mb-2">Monthly Summary</h3>
          <div className="space-y-2">
            {summaryEntries.map(([month, count]) => (
              <div key={month} className="flex justify-between items-center text-sm">
                <span>{month}</span>
                <span className="font-medium">{count} days</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
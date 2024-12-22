interface CounterDisplayProps {
  count: number;
  selectedMonth: string;
  lastUpdated?: Date;
}

export function CounterDisplay({ count, selectedMonth, lastUpdated }: CounterDisplayProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white">
      <div className="text-center mb-4">
        <h2 className="text-sm opacity-80 uppercase">Selected Days</h2>
        <span className="text-4xl font-bold block mt-2">{count}</span>
        <p className="text-sm mt-1">in {selectedMonth}</p>
      </div>
      
      {lastUpdated && (
        <div className="border-t border-white/20 mt-4 pt-4">
          <div className="flex justify-between items-center text-sm">
            <span className="opacity-80">Last Updated</span>
            <span className="font-medium">{formatDate(new Date(lastUpdated))}</span>
          </div>
        </div>
      )}
    </div>
  );
}
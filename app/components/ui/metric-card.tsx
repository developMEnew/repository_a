interface MetricCardProps {
  label: string;
  sublabel: string;
  value: string | number;
  percentage: string | number;
  date: string;
}

export function MetricCard({ label, sublabel, value, percentage, date }: MetricCardProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm opacity-80">{label}</p>
          <p className="font-medium">{sublabel}</p>
        </div>
        <div>
          <p className="text-sm opacity-80">{date}</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">{value}</h1>
      <div className="flex justify-between items-center">
        <p>{value}</p>
        <p>{percentage}%</p>
      </div>
    </div>
  );
}
interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

export function StatCard({ label, value, unit }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <p className="text-gray-600 text-sm mb-2">{label}</p>
      <p className="text-2xl font-semibold">
        {value}
        {unit && <span className="text-gray-500 text-lg">{unit}</span>}
      </p>
    </div>
  );
}
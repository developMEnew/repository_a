interface CounterDisplayProps {
  count: number;
}

export function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-8 text-white text-center">
      <span className="text-4xl font-bold">{count}</span>
    </div>
  );
}
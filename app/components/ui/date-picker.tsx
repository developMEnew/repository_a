interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function DatePicker({ label, value, onChange }: DatePickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-100 border-none"
        />
      </div>
    </div>
  );
}
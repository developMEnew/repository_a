interface DeleteSectionProps {
  selectedNumber: string;
  onNumberChange: (value: string) => void;
  onDelete: () => void;
}

export function DeleteSection({ selectedNumber, onNumberChange, onDelete }: DeleteSectionProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-xl">
      <h2 className="font-medium mb-4">DELETE</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Select Number</label>
          <input
            type="text"
            value={selectedNumber}
            onChange={(e) => onNumberChange(e.target.value)}
            className="w-16 p-2 text-center rounded-lg bg-red-500 text-white"
          />
        </div>
        <button
          onClick={onDelete}
          className="w-full py-3 bg-red-500 text-white rounded-xl font-medium"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
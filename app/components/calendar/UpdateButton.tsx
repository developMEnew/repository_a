interface UpdateButtonProps {
  onUpdate: () => void;
}

export function UpdateButton({ onUpdate }: UpdateButtonProps) {
  return (
    <button
      onClick={onUpdate}
      className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
    >
      Update
    </button>
  );
}
'use client';

import { useState } from 'react';
import { FormInput } from './ui/form-input';
import { DatePicker } from './ui/date-picker';
import { DeleteSection } from './ui/delete-section';

export function ManageTab() {
  const [clipNumber, setClipNumber] = useState('0006');
  const [attributeCount, setAttributeCount] = useState('6789');
  const [selectedDate, setSelectedDate] = useState('2024-12-16');
  const [selectedNumber, setSelectedNumber] = useState('47');

  const handleAdd = () => {
    // Add implementation
    console.log('Adding new clip');
  };

  const handleDelete = () => {
    // Delete implementation
    console.log('Deleting clip');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Add New Clip</h1>
      
      <FormInput
        label="Clip Number"
        value={clipNumber}
        onChange={setClipNumber}
      />
      
      <FormInput
        label="Attribute Count"
        value={attributeCount}
        onChange={setAttributeCount}
      />
      
      <DatePicker
        label="For"
        value={selectedDate}
        onChange={setSelectedDate}
      />
      
      <button
        onClick={handleAdd}
        className="w-full py-3 bg-gray-100 rounded-xl font-medium mt-4"
      >
        Add
      </button>

      <DeleteSection
        selectedNumber={selectedNumber}
        onNumberChange={setSelectedNumber}
        onDelete={handleDelete}
      />
    </div>
  );
}
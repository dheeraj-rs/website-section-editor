import React from 'react';
import { Pencil, X } from 'lucide-react';

interface EditModeToggleProps {
  isEditMode: boolean;
  onToggle: () => void;
}

const EditModeToggle = ({ isEditMode, onToggle }: EditModeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed right-4 bottom-4 z-50 p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
      aria-label={isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
    >
      {isEditMode ? <X size={24} /> : <Pencil size={24} />}
    </button>
  );
};

export default EditModeToggle;
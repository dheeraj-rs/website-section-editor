import React from 'react';
import { Settings } from 'lucide-react';

interface EditableSectionProps {
  id: string;
  isEditMode: boolean;
  onEditClick: () => void;
  children: React.ReactNode;
}

const EditableSection = ({ id, isEditMode, onEditClick, children }: EditableSectionProps) => {
  return (
    <div className="relative" id={id}>
      {isEditMode && (
        <button
          onClick={onEditClick}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Edit Section"
        >
          <Settings size={24} className="text-indigo-600" />
        </button>
      )}
      {children}
    </div>
  );
};

export default EditableSection;
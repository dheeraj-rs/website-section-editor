import React from 'react';
import { X } from 'lucide-react';
import { HomeLayout1, HomeLayout2, HomeLayout3 } from '../layouts/HomeLayouts';

interface LayoutOption {
  id: string;
  name: string;
  component: React.ComponentType;
}

interface LayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: string;
  layouts: LayoutOption[];
  onSelectLayout: (layoutId: string) => void;
}

const LayoutModal = ({ isOpen, onClose, section, layouts, onSelectLayout }: LayoutModalProps) => {
  if (!isOpen) return null;

  const homeLayouts = [
    { id: 'layout1', name: 'Classic Business', component: HomeLayout1 },
    { id: 'layout2', name: 'Modern Hero', component: HomeLayout2 },
    { id: 'layout3', name: 'Gradient Future', component: HomeLayout3 }
  ];

  const currentLayouts = section === 'home' ? homeLayouts : layouts;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Choose {section} Layout
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="space-y-16">
            {currentLayouts.map((layout) => (
              <div key={layout.id} className="relative">
                <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm p-4 rounded-t-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold text-white">
                      {layout.name}
                    </h3>
                    <button
                      onClick={() => {
                        onSelectLayout(layout.id);
                        onClose();
                      }}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Use This Layout
                    </button>
                  </div>
                </div>

                <div className="border-4 border-transparent hover:border-indigo-600 rounded-lg transition-colors cursor-pointer"
                  onClick={() => {
                    onSelectLayout(layout.id);
                    onClose();
                  }}>
                  <div className="transform scale-90 origin-top">
                    <layout.component />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutModal;
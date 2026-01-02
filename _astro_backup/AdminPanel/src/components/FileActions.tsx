import React, { useRef } from 'react';
import { FileUp, Save } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';
import { importJSON } from '../utils/fileHandlers';

interface Props {
  onImport: (data: PortfolioData) => void;
  onExport: () => void;
}

export default function FileActions({ onImport, onExport }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await importJSON(file);
      onImport(data);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error importing file');
    }
  };

  return (
    <div className="flex gap-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FileUp className="h-4 w-4 mr-2" />
        Import JSON
      </button>
      <button
        onClick={onExport}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Save className="h-4 w-4 mr-2" />
        Export JSON
      </button>
    </div>
  );
}
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Tool } from '../../types/portfolio';

interface Props {
  tools: Tool[];
  onChange: (tools: Tool[]) => void;
}

export default function ToolsSection({ tools, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...tools,
      {
        name: '',
        icon: '',
        description: '',
        proficiency: 0
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(tools.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Tool, value: string | number) => {
    const newTools = [...tools];
    newTools[index] = { ...newTools[index], [field]: value };
    onChange(newTools);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Tools & Technologies</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Tool
        </button>
      </div>
      <div className="space-y-6">
        {tools.map((tool, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={tool.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Icon URL</label>
                <input
                  type="url"
                  value={tool.icon}
                  onChange={(e) => handleChange(index, 'icon', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={tool.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Proficiency (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={tool.proficiency}
                  onChange={(e) => handleChange(index, 'proficiency', parseInt(e.target.value, 10))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
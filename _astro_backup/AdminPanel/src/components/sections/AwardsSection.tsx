import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Award } from '../../types/portfolio';

interface Props {
  awards: Award[];
  onChange: (awards: Award[]) => void;
}

export default function AwardsSection({ awards, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...awards,
      {
        name: '',
        description: '',
        images: '',
        link: ''
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(awards.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Award, value: string) => {
    const newAwards = [...awards];
    newAwards[index] = { ...newAwards[index], [field]: value };
    onChange(newAwards);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Awards</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Award
        </button>
      </div>
      <div className="space-y-6">
        {awards.map((award, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={award.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={award.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={award.images}
                  onChange={(e) => handleChange(index, 'images', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="url"
                  value={award.link}
                  onChange={(e) => handleChange(index, 'link', e.target.value)}
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
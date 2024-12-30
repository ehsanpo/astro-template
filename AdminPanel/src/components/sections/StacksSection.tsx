import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Stack } from '../../types/portfolio';
import TagInput from '../ui/TagInput';

interface Props {
  stacks: Stack[];
  onChange: (stacks: Stack[]) => void;
}

export default function StacksSection({ stacks, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...stacks,
      {
        slug: '',
        labels: [],
        icon: '',
        data: []
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(stacks.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Stack, value: string | string[]) => {
    const newStacks = [...stacks];
    newStacks[index] = { ...newStacks[index], [field]: value };
    onChange(newStacks);
  };

  const handleLabelsChange = (index: number, labels: string[]) => {
    const newStacks = [...stacks];
    newStacks[index] = { 
      ...newStacks[index], 
      labels,
      // Keep data array in sync with labels length
      data: labels.map((_, i) => newStacks[index].data[i] || '0')
    };
    onChange(newStacks);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Technology Stacks</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Stack
        </button>
      </div>
      <div className="space-y-6">
        {stacks.map((stack, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <input
                    type="text"
                    value={stack.slug}
                    onChange={(e) => handleChange(index, 'slug', e.target.value)}
                    placeholder="e.g., Front-end, Back-end"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Icon URL</label>
                  <input
                    type="url"
                    value={stack.icon}
                    onChange={(e) => handleChange(index, 'icon', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Technologies</label>
                <TagInput
                  tags={stack.labels}
                  onChange={(labels) => handleLabelsChange(index, labels)}
                />
              </div>

              {stack.labels.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Proficiency Levels</label>
                  <div className="space-y-2">
                    {stack.labels.map((label, labelIndex) => (
                      <div key={labelIndex} className="flex items-center gap-4">
                        <span className="min-w-[120px] text-sm text-gray-600">{label}</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={stack.data[labelIndex] || '0'}
                          onChange={(e) => {
                            const newData = [...stack.data];
                            newData[labelIndex] = e.target.value;
                            handleChange(index, 'data', newData);
                          }}
                          className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
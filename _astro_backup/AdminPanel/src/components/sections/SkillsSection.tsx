import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Skill } from '../../types/portfolio';

interface Props {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export default function SkillsSection({ skills, onChange }: Props) {
  const handleAdd = () => {
    onChange([...skills, { range: '', description: '' }]);
  };

  const handleRemove = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Skill, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    onChange(newSkills);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Skills</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Skill Level
        </button>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Range</label>
                <input
                  type="text"
                  value={skill.range}
                  onChange={(e) => handleChange(index, 'range', e.target.value)}
                  placeholder="e.g., 1-3, 4-6, 7-9, or 10"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={skill.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  rows={2}
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
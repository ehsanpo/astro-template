import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import type { Education } from '../../types/portfolio';

interface Props {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationSection({ education, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...education,
      { degree: '', school: '', year: '', description: '' }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(education.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Education, value: string) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onChange(newEducation);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Education</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <FiPlus className="h-4 w-4 mr-1" />
          Add Education
        </button>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <FiTrash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, 'degree', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">School</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => handleChange(index, 'school', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  value={edu.year}
                  onChange={(e) => handleChange(index, 'year', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={edu.description}
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
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Certification } from '../../types/portfolio';

interface Props {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

export default function CertificationsSection({ certifications, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...certifications,
      {
        name: '',
        img: '',
        year: ''
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(certifications.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Certification, value: string) => {
    const newCertifications = [...certifications];
    newCertifications[index] = { ...newCertifications[index], [field]: value };
    onChange(newCertifications);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Certifications</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Certification
        </button>
      </div>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
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
                  value={cert.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  value={cert.year}
                  onChange={(e) => handleChange(index, 'year', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={cert.img}
                  onChange={(e) => handleChange(index, 'img', e.target.value)}
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
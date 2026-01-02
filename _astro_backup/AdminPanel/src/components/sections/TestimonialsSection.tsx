import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Testimonial } from '../../types/portfolio';

interface Props {
  testimonials: Testimonial[];
  onChange: (testimonials: Testimonial[]) => void;
}

export default function TestimonialsSection({ testimonials, onChange }: Props) {
  const handleAdd = () => {
    const newId = testimonials.length > 0 
      ? Math.max(...testimonials.map(t => t.id)) + 1 
      : 1;
    
    onChange([
      ...testimonials,
      {
        id: newId,
        name: '',
        title: '',
        img: '',
        short: '',
        desc: ''
      }
    ]);
  };

  const handleRemove = (id: number) => {
    onChange(testimonials.filter(t => t.id !== id));
  };

  const handleChange = (id: number, field: keyof Testimonial, value: string | number) => {
    onChange(testimonials.map(testimonial => 
      testimonial.id === id 
        ? { ...testimonial, [field]: value }
        : testimonial
    ));
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Testimonials</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Testimonial
        </button>
      </div>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(testimonial.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => handleChange(testimonial.id, 'name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={testimonial.title}
                  onChange={(e) => handleChange(testimonial.id, 'title', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={testimonial.img}
                  onChange={(e) => handleChange(testimonial.id, 'img', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Short Quote</label>
                <input
                  type="text"
                  value={testimonial.short}
                  onChange={(e) => handleChange(testimonial.id, 'short', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full Description</label>
                <textarea
                  value={testimonial.desc}
                  onChange={(e) => handleChange(testimonial.id, 'desc', e.target.value)}
                  rows={3}
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
import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import type { Service } from '../../types/portfolio';

interface Props {
  services: Service[];
  onChange: (services: Service[]) => void;
}

export default function ServicesSection({ services, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...services,
      { title: '', description: '', icon: '', features: [] }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(services.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Service, value: string | string[]) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    onChange(newServices);
  };

  const handleFeatureChange = (serviceIndex: number, featureIndex: number, value: string) => {
    const newServices = [...services];
    const features = [...newServices[serviceIndex].features];
    features[featureIndex] = value;
    newServices[serviceIndex] = { ...newServices[serviceIndex], features };
    onChange(newServices);
  };

  const handleAddFeature = (serviceIndex: number) => {
    const newServices = [...services];
    newServices[serviceIndex].features.push('');
    onChange(newServices);
  };

  const handleRemoveFeature = (serviceIndex: number, featureIndex: number) => {
    const newServices = [...services];
    newServices[serviceIndex].features = newServices[serviceIndex].features.filter(
      (_, i) => i !== featureIndex
    );
    onChange(newServices);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Services</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <FiPlus className="h-4 w-4 mr-1" />
          Add Service
        </button>
      </div>
      <div className="space-y-6">
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(serviceIndex)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <FiTrash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleChange(serviceIndex, 'title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Icon</label>
                  <input
                    type="text"
                    value={service.icon}
                    onChange={(e) => handleChange(serviceIndex, 'icon', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={service.description}
                  onChange={(e) => handleChange(serviceIndex, 'description', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Features</label>
                  <button
                    onClick={() => handleAddFeature(serviceIndex)}
                    className="inline-flex items-center px-2 py-1 border border-transparent rounded-md text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <FiPlus className="h-3 w-3 mr-1" />
                    Add Feature
                  </button>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(serviceIndex, featureIndex, e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <button
                        onClick={() => handleRemoveFeature(serviceIndex, featureIndex)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
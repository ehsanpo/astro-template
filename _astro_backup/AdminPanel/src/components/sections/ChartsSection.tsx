import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Chart } from '../../types/portfolio';
import TagInput from '../ui/TagInput';

interface Props {
  charts: Chart[];
  onChange: (charts: Chart[]) => void;
}

export default function ChartsSection({ charts, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...charts,
      {
        slug: '',
        labels: [],
        data: []
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(charts.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Chart, value: string | string[]) => {
    const newCharts = [...charts];
    newCharts[index] = { ...newCharts[index], [field]: value };
    onChange(newCharts);
  };

  const handleLabelsChange = (index: number, labels: string[]) => {
    const newCharts = [...charts];
    newCharts[index] = { 
      ...newCharts[index], 
      labels,
      data: labels.map((_, i) => newCharts[index].data[i] || '0')
    };
    onChange(newCharts);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Charts</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Chart
        </button>
      </div>
      <div className="space-y-6">
        {charts.map((chart, index) => (
          <div key={index} className="relative border rounded-lg p-4">
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  value={chart.slug}
                  onChange={(e) => handleChange(index, 'slug', e.target.value)}
                  placeholder="e.g., Overall, Languages, Tools"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Labels</label>
                <TagInput
                  tags={chart.labels}
                  onChange={(labels) => handleLabelsChange(index, labels)}
                />
              </div>

              {chart.labels.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Values</label>
                  <div className="space-y-2">
                    {chart.labels.map((label, labelIndex) => (
                      <div key={labelIndex} className="flex items-center gap-4">
                        <span className="min-w-[120px] text-sm text-gray-600">{label}</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={chart.data[labelIndex] || '0'}
                          onChange={(e) => {
                            const newData = [...chart.data];
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
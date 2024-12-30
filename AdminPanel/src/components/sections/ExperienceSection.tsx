import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Experience } from '../../types/portfolio';
import TagInput from '../ui/TagInput';

interface Props {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export default function ExperienceSection({ experience, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...experience,
      {
        type: 'education',
        highlighted: false,
        title: '',
        description: '',
        org: '',
        year: '',
        tags: [],
        image: '',
        project: {
          title: '',
          description: '',
          technologies: []
        }
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(experience.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Experience, value: any) => {
    const newExperience = [...experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    onChange(newExperience);
  };

  const handleProjectChange = (index: number, field: string, value: any) => {
    const newExperience = [...experience];
    if (!newExperience[index].project) {
      newExperience[index].project = {
        title: '',
        description: '',
        technologies: []
      };
    }
    newExperience[index].project = {
      ...newExperience[index].project!,
      [field]: value
    };
    onChange(newExperience);
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Experience</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Experience
        </button>
      </div>
      <div className="space-y-6">
        {experience.map((exp, index) => (
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
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    value={exp.type}
                    onChange={(e) => handleChange(index, 'type', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="education">Education</option>
                    <option value="work">Work</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Highlighted</label>
                  <input
                    type="checkbox"
                    checked={exp.highlighted}
                    onChange={(e) => handleChange(index, 'highlighted', e.target.checked)}
                    className="mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization</label>
                  <input
                    type="text"
                    value={exp.org}
                    onChange={(e) => handleChange(index, 'org', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <TagInput
                  tags={exp.tags}
                  onChange={(tags) => handleChange(index, 'tags', tags)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={exp.image}
                  onChange={(e) => handleChange(index, 'image', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* Project Section */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Project Details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Title</label>
                    <input
                      type="text"
                      value={exp.project?.title || ''}
                      onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Description</label>
                    <textarea
                      value={exp.project?.description || ''}
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                      rows={2}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Technologies</label>
                    <TagInput
                      tags={exp.project?.technologies || []}
                      onChange={(technologies) => handleProjectChange(index, 'technologies', technologies)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
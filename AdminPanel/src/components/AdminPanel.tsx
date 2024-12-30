import React, { useState } from 'react';
import { Save } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';
import { initialData } from '../utils/initialData';
import FileActions from './FileActions';
import MetaSection from './sections/MetaSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import StacksSection from './sections/StacksSection';
import ChartsSection from './sections/ChartsSection';
import CertificationsSection from './sections/CertificationsSection';
import AwardsSection from './sections/AwardsSection';
import ToolsSection from './sections/ToolsSection';

export default function AdminPanel() {
  const [data, setData] = useState<PortfolioData>(initialData);

  const handleExport = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Admin</h1>
          <FileActions onImport={setData} onExport={handleExport} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <MetaSection data={data.meta} onChange={(meta) => setData({ ...data, meta })} />
          <ContactSection data={data.contact} onChange={(contact) => setData({ ...data, contact })} />
          <ExperienceSection experience={data.experience} onChange={(experience) => setData({ ...data, experience })} />
          <ServicesSection services={data.services} onChange={(services) => setData({ ...data, services })} />
          <SkillsSection skills={data.skills} onChange={(skills) => setData({ ...data, skills })} />
          <TestimonialsSection testimonials={data.testimonials} onChange={(testimonials) => setData({ ...data, testimonials })} />
          <StacksSection stacks={data.stacks} onChange={(stacks) => setData({ ...data, stacks })} />
          <ChartsSection charts={data.charts} onChange={(charts) => setData({ ...data, charts })} />
          <CertificationsSection certifications={data.certifications} onChange={(certifications) => setData({ ...data, certifications })} />
          <AwardsSection awards={data.awards} onChange={(awards) => setData({ ...data, awards })} />
          <ToolsSection tools={data.tools} onChange={(tools) => setData({ ...data, tools })} />
        </div>
      </main>
    </div>
  );
}
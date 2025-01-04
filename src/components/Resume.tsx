import React, { useState, useEffect } from "react";

import { Toolbar } from "@/components/resume/Toolbar";
import { Main } from "@/components/resume//Main";
import { Aside } from "@/components/resume//Aside";
import type { Resume } from "@/types/resume";
import type { Language } from "@/translations/index";
import resumeEn from "@/data/resume-en.json";
import resumeSv from "@/data/resume-sv.json";

interface Props {
  // Define your props here if needed
}

const ResumeCv: React.FC<Props> = () => {
  const [mainColor, setMainColor] = useState("#0891b2");
  const [language, setLanguage] = useState<Language>("en");
  const resumeData: Resume = language === "en" ? resumeEn : resumeSv;

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", mainColor);
  }, [mainColor]);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white relative mt-16">
      <Toolbar
        onColorChange={setMainColor}
        onLanguageChange={setLanguage}
        onExportPDF={handleExportPDF}
        currentLanguage={language}
      />

      <div className="bg-white text-gray-900 pt-16">
        <div className=" grid max-w-4xl mx-auto px-4 grid-cols-1 lg:grid-cols-3  items-center gap-8">
          <div className="lg:col-span-1">
            <img
              src="/img/profile.jpg"
              alt={resumeData.basics.name}
              className="w-48 h-48 rounded-full mb-4 object-cover"
            />
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-6xl font-bold" style={{ color: mainColor }}>
              {resumeData.basics.name}
            </h1>
            <p className="text-4xl">{resumeData.basics.title}</p>

            <div className="printShow">
              <p className="text-sm mt-4">{resumeData.basics.location}</p>
              <p className="text-sm mt-4">{resumeData.basics.email}</p>
              <p className="text-sm mt-4">{resumeData.basics.linkedin}</p>
              <p className="text-sm mt-4">{resumeData.basics.website}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Aside
            data={resumeData.basics}
            mainColor={mainColor}
            language={language}
          />
          <Main data={resumeData} mainColor={mainColor} language={language} />
        </div>
      </div>
    </div>
  );
};

export default ResumeCv;

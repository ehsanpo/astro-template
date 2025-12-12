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
	const [mainColor, setMainColor] = useState("#4f46e5");
	const [language, setLanguage] = useState<Language>("en");
	const resumeData: Resume = language === "en" ? resumeEn : resumeSv;

	useEffect(() => {
		document.documentElement.style.setProperty("--main-color", mainColor);
	}, [mainColor]);

	const handleExportPDF = () => {
		window.print();
	};

	return (
		<div className="relative mt-16 min-h-screen bg-white">
			<Toolbar
				onColorChange={setMainColor}
				onLanguageChange={setLanguage}
				onExportPDF={handleExportPDF}
				currentLanguage={language}
			/>

			<div className="bg-white pt-16 text-gray-900">
				<div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-3">
					<div className="lg:col-span-1">
						<img
							src="/img/profile.jpg"
							alt={resumeData.basics.name}
							className="mb-4 h-48 w-48 rounded-full object-cover"
						/>
					</div>

					<div className="lg:col-span-2">
						<h1 className="text-6xl font-bold" style={{ color: mainColor }}>
							{resumeData.basics.name}
						</h1>
						<p className="text-4xl">{resumeData.basics.title}</p>

						<div className="printShow">
							<p className="mt-4 text-sm">{resumeData.basics.location}</p>
							<p className="mt-4 text-sm">{resumeData.basics.email}</p>
							<p className="mt-4 text-sm">{resumeData.basics.linkedin}</p>
							<p className="mt-4 text-sm">{resumeData.basics.website}</p>
						</div>
					</div>
				</div>

				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
					<Aside data={resumeData.basics} mainColor={mainColor} language={language} />
					<Main data={resumeData} mainColor={mainColor} language={language} />
				</div>
			</div>
		</div>
	);
};

export default ResumeCv;

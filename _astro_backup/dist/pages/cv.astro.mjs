/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Languages, Download, MapPin, Mail, Globe, Linkedin } from 'lucide-react';
import { $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
/* empty css                              */
export { renderers } from '../renderers.mjs';

const Toolbar = ({
  onColorChange,
  onLanguageChange,
  onExportPDF,
  currentLanguage
}) => {
  const colors = ["#0891b2", "#4f46e5", "#059669", "#db2777", "#d97706"];
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-16 z-50 bg-white shadow-md print:hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl items-center justify-between px-4 py-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: colors.map((color) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onColorChange(color),
          className: "h-6 w-6 rounded-full border-2 border-gray-200",
          style: { backgroundColor: color }
        },
        color
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onLanguageChange(currentLanguage === "en" ? "sv" : "en"),
          className: "rounded-lg p-2 hover:bg-gray-100",
          children: /* @__PURE__ */ jsx(Languages, { className: "h-5 w-5 text-primary-500" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: onExportPDF, className: "rounded-lg bg-slate-300 p-2 hover:bg-gray-100", children: /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }) })
  ] }) });
};

const Timeline = ({ items, mainColor }) => {
  function calculateDuration(startDate, endDate) {
    const parseDate = (date) => {
      const parts = date.split("-");
      const year = parseInt(parts[0], 10);
      const month = parts.length > 1 ? parseInt(parts[1], 10) - 1 : 0;
      return new Date(year, month);
    };
    const start = parseDate(startDate);
    const end = parseDate(endDate);
    const yearsDiff = end.getFullYear() - start.getFullYear();
    let monthsDiff = end.getMonth() - start.getMonth();
    if (monthsDiff < 0) {
      monthsDiff += 12;
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      yearsDiff > 0 && ` ( ${yearsDiff} ${yearsDiff === 1 ? "year" : "years"} `,
      monthsDiff > 0 ? `${yearsDiff < 0 ? "(" : ""}  ${monthsDiff} ${monthsDiff === 1 ? "month" : "months )"}` : yearsDiff > 0 && ")"
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "", children: items.map((item, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "timeline-item relative border-l-2 border-current pb-4 pl-8",
      style: { color: mainColor },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[11px] top-1 h-4 w-4 rounded-full bg-current" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1 text-black", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "mb-1 text-lg font-bold print:mb-0 print:text-base",
                style: { color: mainColor },
                children: item.title
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-sm print:text-xs", children: [
              item.startDate,
              " - ",
              item.endDate,
              " ",
              calculateDuration(item.startDate, item.endDate)
            ] })
          ] }),
          item.subtitle && /* @__PURE__ */ jsx("div", { className: "text-sm font-bold print:text-xs", children: item.subtitle })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-black", children: item.description.map((desc) => /* @__PURE__ */ jsx("li", { children: desc })) }),
        item.tags && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: item.tags.map((tag, tagIndex) => /* @__PURE__ */ jsx(
          "span",
          {
            style: { color: mainColor },
            className: "rounded-full bg-gray-100 px-2 py-1 text-xs",
            children: tag
          },
          tagIndex
        )) })
      ]
    },
    index
  )) });
};

const Section = ({ title, mainColor, children }) => {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", style: { color: mainColor }, children: title }),
    children
  ] });
};

const Tag = ({ children }) => {
  return /* @__PURE__ */ jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1", children });
};

const translations = {
  en: {
    sections: {
      about: "About",
      contact: "Contact",
      experience: "Experience",
      education: "Education",
      certificates: "Certificates",
      skills: "Skills",
      languages: "Languages"
    }
  },
  sv: {
    sections: {
      about: "Om mig",
      contact: "Kontakt",
      experience: "Erfarenhet",
      education: "Utbildning",
      certificates: "Certifikat",
      skills: "Kompetenser",
      languages: "Språk"
    }
  }
};

const Main = ({ data, mainColor, language }) => {
  const t = translations[language].sections;
  return /* @__PURE__ */ jsxs("main", { className: "space-y-8 lg:col-span-3", children: [
    /* @__PURE__ */ jsxs(Section, { title: t.experience, mainColor, children: [
      /* @__PURE__ */ jsx(
        Timeline,
        {
          items: data.experience.map((exp) => ({
            title: exp.company,
            subtitle: exp.position,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description,
            tags: exp.tags
          })),
          mainColor
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "dvidePage" })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: t.education, mainColor, children: /* @__PURE__ */ jsx(
      Timeline,
      {
        items: data.education.map((edu) => ({
          title: edu.institution,
          subtitle: edu.degree,
          startDate: edu.startDate,
          endDate: edu.endDate,
          description: edu.description
        })),
        mainColor
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { title: t.certificates, mainColor, children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: data.certificates.map((cert, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: cert.name }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: cert.date })
    ] }, index)) }) })
  ] });
};

const Aside = ({ data, mainColor, language }) => {
  const t = translations[language].sections;
  return /* @__PURE__ */ jsxs("aside", { className: "space-y-6 lg:col-span-1", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-semibold", style: { color: mainColor }, children: t.about }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: data.basics.about })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-semibold", style: { color: mainColor }, children: t.contact }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm print:grid print:grid-cols-2 print:gap-x-4 print:gap-y-1 print:space-y-0", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 16, style: { color: mainColor } }),
          data.basics.location
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Mail, { size: 16, style: { color: mainColor } }),
          data.basics.email
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: data.basics.website,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 hover:underline",
            children: [
              /* @__PURE__ */ jsx(Globe, { size: 16, style: { color: mainColor } }),
              data.basics.website
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: data.basics.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 hover:underline",
            children: [
              /* @__PURE__ */ jsx(Linkedin, { size: 16, style: { color: mainColor } }),
              data.basics.linkedin
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: t.skills, mainColor, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: data.skills.map((skill, index) => /* @__PURE__ */ jsx(Tag, { children: skill }, index)) }) }),
    /* @__PURE__ */ jsx(Section, { title: t.languages, mainColor, children: /* @__PURE__ */ jsx("div", { className: "mb-16 flex flex-wrap gap-2", children: data.languages.map((lang, index) => /* @__PURE__ */ jsx(Tag, { children: lang }, index)) }) })
  ] });
};

const basics$1 = {
	name: "Ehsan Pourhadi",
	title: "Software Developer",
	currentPosition: "Software Developer at Telavox",
	image: "https://ehsan-pourhadi.com/img/118.jpg",
	about: "Experienced software developer with a proven track record in full-stack development and web application architecture. Passionate about delivering scalable and user-focused solutions.",
	location: "Malmö, Sweden",
	email: "ehsan.po@gmail.com",
	website: "www.ehsan-pourhadi.com",
	linkedin: "https://www.linkedin.com/in/ehsanp/"
};
const experience$1 = [
	{
		company: "Telavox",
		position: "Software Developer",
		startDate: "2023-09",
		endDate: "Present",
		description: [
			"Developed and maintained softphone, messaging, and video conferencing applications used in a large-scale communications platform.",
			"Contributed to the design and architecture of web-based applications with a focus on performance and maintainability.",
			"Collaborated closely with product, design, and backend teams to deliver features end to end.",
			"Worked extensively with Electron, TypeScript, and React in a modern frontend environment."
		],
		tags: [
			"Electron",
			"TypeScript",
			"React"
		]
	},
	{
		company: "Bredband2",
		position: "Software Developer",
		startDate: "2020-06",
		endDate: "2023-09",
		description: [
			"Developed and maintained the company’s main website, e-commerce shop, and customer self-service portals.",
			"Implemented both frontend and backend features to support new product offerings and customer workflows.",
			"Partnered with UX designers to improve usability and overall customer experience.",
			"Contributed to new web applications built with Gatsby, Next.js, and Ruby on Rails.",
			"Took responsibility for project coordination and team collaboration on selected initiatives."
		],
		tags: [
			"Gatsby",
			"Next.js",
			"Ruby on Rails",
			"TypeScript"
		]
	},
	{
		company: "Ehsan Pourhadi",
		position: "Freelance Web Developer",
		startDate: "2019-05",
		endDate: "2020-03",
		description: [
			"Delivered multiple client-facing WordPress websites tailored to specific business needs.",
			"Designed and built custom WordPress themes to strengthen branding and usability.",
			"Advised clients on website architecture, performance optimization, and hosting solutions.",
			"Conducted SEO audits and implemented improvements to increase search visibility.",
			"Built e-commerce solutions using WooCommerce, including multilingual configurations."
		],
		tags: [
			"WordPress",
			"WooCommerce",
			"SEO"
		]
	},
	{
		company: "Guts & Glory",
		position: "Tech Lead",
		startDate: "2016-10",
		endDate: "2019-05",
		description: [
			"Led technical execution of WordPress-based web projects from planning to delivery.",
			"Oversaw architecture decisions and ensured code quality through reviews and mentoring.",
			"Mentored junior developers and supported skill development within the team.",
			"Collaborated with designers to ensure smooth integration between design and implementation.",
			"Improved internal development processes to increase delivery speed and team efficiency."
		],
		tags: [
			"WordPress",
			"Team Leadership"
		]
	},
	{
		company: "Whitespace AB",
		position: "Full Stack Developer",
		startDate: "2014-03",
		endDate: "2016-10",
		description: [
			"Delivered end-to-end web solutions for international clients across multiple industries.",
			"Built responsive user interfaces and backend functionality for complex web applications.",
			"Worked closely with UX/UI designers to deliver consistent experiences across platforms.",
			"Applied Agile methodologies to improve collaboration and delivery predictability.",
			"Acted as a technical consultant, translating business requirements into scalable solutions."
		],
		tags: [
			"Full Stack Development",
			"UX/UI Design",
			"Agile"
		]
	},
	{
		company: "The Fan Club",
		position: "Web Developer",
		startDate: "2012-03",
		endDate: "2014-10",
		description: [
			"Developed dynamic web applications and campaign sites for advertising initiatives.",
			"Led development of an internal tool integrated with the Facebook API for booking and management workflows.",
			"Built short-lived campaign sites with interactive elements and animations.",
			"Collaborated with creative and marketing teams to turn campaign concepts into functional digital products.",
			"Provided technical consulting on feasibility and implementation strategies."
		],
		tags: [
			"Web Development",
			"Facebook API",
			"Campaign Websites"
		]
	},
	{
		company: "Next G Design",
		position: "Co-Founder & Developer",
		startDate: "2011-01",
		endDate: "2012-01",
		description: [
			"Co-founded and operated a design and development agency.",
			"Built and maintained the company website and multiple client WordPress sites.",
			"Managed full project lifecycles from client consultation to deployment and support.",
			"Optimized websites for performance, SEO, and security."
		],
		tags: [
			"WordPress",
			"SEO",
			"Web Development"
		]
	}
];
const education$1 = [
	{
		institution: "Bredband2",
		degree: "Ruby on Rails Course",
		startDate: "2021",
		endDate: "2021",
		description: [
			"Gained proficiency in building robust web applications using Ruby on Rails.",
			"Learned to apply Rails conventions for efficient development."
		]
	},
	{
		institution: "Linux Academy / A Cloud Guru",
		degree: "AWS Certified Solutions Architect",
		startDate: "2018",
		endDate: "2018",
		description: [
			"Completed rigorous training to design scalable cloud solutions.",
			"Earned AWS Solutions Architect certification."
		]
	},
	{
		institution: "Hermods",
		degree: "Programming A and Database Management",
		startDate: "2011",
		endDate: "2011",
		description: [
			"Mastered fundamental programming skills.",
			"Learned database design and administration."
		]
	},
	{
		institution: "Glokala Folkshögskola",
		degree: "Music Production Program",
		startDate: "2009",
		endDate: "2009",
		description: [
			"Gained proficiency in recording, mixing, and mastering.",
			"Learned event planning and music industry practices."
		]
	},
	{
		institution: "Universitetsholmen",
		degree: "Specialized in Electrical Automation",
		startDate: "2008",
		endDate: "2008",
		description: [
			"Learned PLC programming, control engineering, and pneumatic systems.",
			"Built a strong foundation in industrial automation and electrical systems.",
			"Gained hands-on experience with electrical circuits and automation technologies.",
			"Complemented technical studies with a Web Design course to enhance digital skills."
		]
	}
];
const certificates$1 = [
	{
		name: "Cybersecurity Awareness Professional Certification - CAPC™ ",
		date: "Dec 2025"
	},
	{
		name: "Prompt Engineering Foundation Professional Certification - CPEFPC™",
		date: "Dec 2025"
	},
	{
		name: "Lean Leadership Professional Certification - LLPC™",
		date: "Dec 2025"
	},
	{
		name: "Google Data Analytics Professional Certificate",
		date: "Jan 2023"
	},
	{
		name: "Advanced Google Analytics",
		date: "Nov 2022"
	},
	{
		name: "Google Analytics for Beginners",
		date: "Nov 2022"
	},
	{
		name: "Google Tag Manager Fundamentals",
		date: "Nov 2022"
	},
	{
		name: "Introduction to Cybersecurity",
		date: "Nov 2022"
	},
	{
		name: "Remote Work and Virtual Collaboration Certificate (RWVCPC)",
		date: "Sep 2022"
	},
	{
		name: "Scrum Foundation Professional Certificate (SFPC)",
		date: "Sep 2022"
	},
	{
		name: "Design Accessibility - UX",
		date: "Mar 2022"
	},
	{
		name: "Design Composition - UX",
		date: "Mar 2022"
	},
	{
		name: "UI Components I: Basic - UX",
		date: "Mar 2022"
	},
	{
		name: "UI Components II: Advanced - UX",
		date: "Mar 2022"
	},
	{
		name: "AWS Certified Solutions Architect - Associate",
		date: "Oct 2018"
	}
];
const skills$1 = [
	"Web Development",
	"JavaScript",
	"TypeScript",
	"Tailwind",
	"React",
	"UIU/X Design",
	"PHP",
	"GraphQL",
	"MySQL",
	"Node.js",
	"Docker",
	"Redis",
	"WordPress",
	"Ruby on Rails"
];
const languages$1 = [
	"English (Professional)",
	"Swedish (Professional)",
	"Persian (Native)"
];
const resumeEn = {
	basics: basics$1,
	experience: experience$1,
	education: education$1,
	certificates: certificates$1,
	skills: skills$1,
	languages: languages$1
};

const basics = {
	name: "Ehsan Pourhadi",
	title: "Mjukvaruutvecklare",
	currentPosition: "Mjukvaruutvecklare på Telavox",
	image: "https://ehsan-pourhadi.com/img/118.jpg",
	about: "Erfaren mjukvaruutvecklare med en gedigen bakgrund inom fullstackutveckling och webapplikationsarkitektur. Passionerad över att leverera skalbara och användarfokuserade lösningar.",
	location: "Malmö, Sweden",
	email: "ehsan.po@gmail.com",
	website: "www.ehsan-pourhadi.com",
	linkedin: "https://www.linkedin.com/in/ehsanp/"
};
const experience = [
	{
		company: "Telavox",
		position: "Mjukvaruutvecklare",
		startDate: "2023-09",
		endDate: "Nuvarande",
		description: [
			"Utvecklade och underhöll lösningar för softphone, meddelandeappar och videokonferenser.",
			"Bidrog till design och arkitektur av webapplikationer.",
			"Samarbetade med tvärfunktionella team för projektleverans."
		],
		tags: [
			"ElectronJS",
			"Typescript",
			"React"
		]
	},
	{
		company: "Bredband2",
		position: "Mjukvaruutvecklare",
		startDate: "2020-06",
		endDate: "2023-09",
		description: [
			"Utvecklade och underhöll huvudsajten, webbshopen och kundportaler.",
			"Implementerade frontend- och backendfunktionalitet för nya funktioner.",
			"Arbetade nära UX för att optimera UI/UX och förbättra användarengagemang.",
			"Bidrog till implementering av nya webapplikationer med hjälp av Gatsby, Next.js och Ruby on Rails.",
			"Hanterade projekt och team."
		],
		tags: [
			"Gatsby",
			"Next.js",
			"Ruby on Rails",
			"Typescript"
		]
	},
	{
		company: "Ehsan Pourhadi",
		position: "Frilansande Webbutvecklare",
		startDate: "2019-05",
		endDate: "2020-03",
		description: [
			"Utvecklade och underhöll flera WordPress-webbplatser skräddarsydda för kundens specifikationer.",
			"Skapade anpassade WordPress-teman för att förbättra användarupplevelse och varumärkesprofilering.",
			"Konsulterade kunder om optimal webbplatsarkitektur för förbättrad prestanda.",
			"Hjälpte kunder med hostinglösningar och serverkonfiguration.",
			"Utförde SEO-revisioner och implementerade strategier för bättre synlighet i sökmotorer.",
			"Utvecklade e-handelslösningar med WooCommerce för kundbutiker.",
			"Utvecklade flerspråkiga webbplatser för att tillgodose olika målgrupper."
		],
		tags: [
			"WordPress",
			"WooCommerce",
			"SEO"
		]
	},
	{
		company: "Guts & Glory",
		position: "Teknisk Ledare",
		startDate: "2016-10",
		endDate: "2019-05",
		description: [
			"Utvecklade och underhöll WordPress-webbplatser skräddarsydda för kundens specifikationer.",
			"Övervakade tekniska aspekter av webbutvecklingsprojekt.",
			"Handlede juniorutvecklare och genomförde kodgranskningar.",
			"Samarbetade med designteamet för en sömlös integration.",
			"Säkerställde att projekt levererades i tid samtidigt som kundförväntningar hanterades.",
			"Effektiviserade utvecklingsprocesser för att förbättra teamets produktivitet och effektivitet."
		],
		tags: [
			"WordPress",
			"Teamledning"
		]
	},
	{
		company: "Whitespace AB",
		position: "Fullstackutvecklare",
		startDate: "2014-03",
		endDate: "2016-10",
		description: [
			"Hanterade utvecklingsprojekt från början till slut för globala kunder.",
			"Designade och implementerade responsiva användargränssnitt för olika webapplikationer.",
			"Samarbetade med UX/UI-designers för att förbättra användarupplevelsen på flera plattformar.",
			"Använde Agila metoder för att effektivisera projektflöden och förbättra samarbete.",
			"Arbetade som konsult för externa kundföretag via Whitespace och levererade skräddarsydda tekniska lösningar för att möta olika affärsutmaningar."
		],
		tags: [
			"Fullstackutveckling",
			"UX/UI Design",
			"Agil utveckling"
		]
	},
	{
		company: "The Fan Club",
		position: "Webbutvecklare",
		startDate: "2014-03",
		endDate: "2016-10",
		description: [
			"Utvecklade och underhöll dynamiska webapplikationer och kampanjwebbplatser skräddarsydda för olika reklaminitiativ.",
			"Spearheaded utvecklingen av ToolPool, en webapplikation integrerad med Facebook API för smidig bokning och hantering av verktyg.",
			"Designade och implementerade kortlivade kampanjwebbplatser med interaktiva element och animationer.",
			"Samarbetade med kreativa och marknadsteam för att översätta kampanjkoncept till funktionella, visuellt tilltalande digitala lösningar.",
			"Erbjöd teknisk konsultation till interna team och kunder om bästa praxis, innovativa lösningar och genomförbarheten av föreslagna digitala strategier."
		],
		tags: [
			"Webbutveckling",
			"Facebook API",
			"Kampanjwebbplatser"
		]
	},
	{
		company: "Next G Design",
		position: "Medgrundare & Utvecklare",
		startDate: "2011-01",
		endDate: "2011-09",
		description: [
			"Medgrundade och drev en design- och utvecklingsbyrå.",
			"Utvecklade och underhöll företagets primära webbplats.",
			"Designade och byggde småskaliga WordPress-webbplatser skräddarsydda för kundens behov.",
			"Hanterade projekt från början till slut, från initiala kundkonsultationer till implementering och efterlanseringssupport.",
			"Optimerade WordPress-webbplatser för prestanda, SEO och säkerhet."
		],
		tags: [
			"WordPress",
			"SEO",
			"Webbutveckling"
		]
	}
];
const education = [
	{
		institution: "Bredband2",
		degree: "Kurs i Ruby on Rails",
		startDate: "2021",
		endDate: "2021",
		description: [
			"Fördjupade kunskaper i att bygga robusta webapplikationer med Ruby on Rails.",
			"Lärde sig att använda Rails-konventioner för effektiv utveckling."
		]
	},
	{
		institution: "Linux Academy / A Cloud Guru",
		degree: "AWS Certifierad Lösningsarkitekt",
		startDate: "2018",
		endDate: "2018",
		description: [
			"Avslutade intensiv träning för att designa skalbara molnlösningar.",
			"Fick AWS-certifiering som Lösningsarkitekt."
		]
	},
	{
		institution: "Hermods",
		degree: "Programmering A och Databashantering",
		startDate: "2011",
		endDate: "2011",
		description: [
			"Behärskade grundläggande programmeringsfärdigheter.",
			"Lärde sig databasdesign och administration."
		]
	},
	{
		institution: "Glokala Folkshögskola",
		degree: "Musikproduktionsprogram",
		startDate: "2009",
		endDate: "2009",
		description: [
			"Förvärvade kunskaper inom inspelning, mixning och mastering.",
			"Lärde sig evenemangsplanering och branschpraxis inom musik."
		]
	},
	{
		institution: "Universitetsholmen",
		degree: "Specialisering inom El-Automation",
		startDate: "2008",
		endDate: "2008",
		description: [
			"Lärde sig PLC-programmering, styrteknik och pneumatiska system.",
			"Byggde en stark grund inom industriell automation och elsystem.",
			"Erhöll praktisk erfarenhet med elektriska kretsar och automationsteknologier.",
			"Kompletterade tekniska studier med en kurs i webbdesign för att förbättra digitala färdigheter."
		]
	}
];
const certificates = [
	{
		name: "Avancerad Google Analytics",
		date: "Nov 2022"
	},
	{
		name: "Google Analytics för Nybörjare",
		date: "Nov 2022"
	},
	{
		name: "Google Tag Manager Grundläggande",
		date: "Nov 2022"
	},
	{
		name: "Introduktion till Cybersäkerhet",
		date: "Nov 2022"
	},
	{
		name: "Fjärrarbete och Virtuell Samarbetscertifiering (RWVCPC)",
		date: "Sep 2022"
	},
	{
		name: "Scrum Foundation Professional Certificate (SFPC)",
		date: "Sep 2022"
	},
	{
		name: "Design Tillgänglighet - UX",
		date: "Mar 2022"
	},
	{
		name: "Design Komposition - UX",
		date: "Mar 2022"
	},
	{
		name: "UI Komponenter I: Grundläggande - UX",
		date: "Mar 2022"
	},
	{
		name: "UI Komponenter II: Avancerad - UX",
		date: "Mar 2022"
	},
	{
		name: "AWS Certifierad Lösningsarkitekt - Associate",
		date: "Okt 2018"
	}
];
const skills = [
	"Web Development",
	"JavaScript",
	"TypeScript",
	"Tailwind",
	"React",
	"UIU/X Design",
	"PHP",
	"GraphQL",
	"MySQL",
	"Node.js",
	"Docker",
	"Redis",
	"WordPress",
	"Ruby on Rails"
];
const languages = [
	"English (Professional)",
	"Swedish (Professional)",
	"Persian (Native)"
];
const resumeSv = {
	basics: basics,
	experience: experience,
	education: education,
	certificates: certificates,
	skills: skills,
	languages: languages
};

const ResumeCv = () => {
  const [mainColor, setMainColor] = useState("#4f46e5");
  const [language, setLanguage] = useState("en");
  const resumeData = language === "en" ? resumeEn : resumeSv;
  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", mainColor);
  }, [mainColor]);
  const handleExportPDF = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative mt-16 min-h-screen bg-white print:mt-0", children: [
    /* @__PURE__ */ jsx(
      Toolbar,
      {
        onColorChange: setMainColor,
        onLanguageChange: setLanguage,
        onExportPDF: handleExportPDF,
        currentLanguage: language
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-white pt-16 text-gray-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/profile.jpg",
            width: 100,
            height: 100,
            alt: resumeData.basics.name,
            className: "mb-4 rounded-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold", style: { color: mainColor }, children: resumeData.basics.name }),
          /* @__PURE__ */ jsx("p", { className: "text-4xl", children: resumeData.basics.title })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl gap-8 px-4 py-8 print:block print:gap-0 print:space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1/4 flex-shrink-0 print:w-full", children: /* @__PURE__ */ jsx(Aside, { data: resumeData, mainColor, language }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 print:w-full", children: /* @__PURE__ */ jsx(Main, { data: resumeData, mainColor, language }) })
      ] })
    ] })
  ] });
};

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CV", "description": "My CV" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Resume", ResumeCv, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Resume", "client:component-export": "default" })} ` })}
---`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/cv.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cv,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

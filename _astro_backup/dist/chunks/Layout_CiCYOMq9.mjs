import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, a as renderComponent, u as unescapeHTML, m as maybeRenderHead, e as renderSlot, i as renderHead } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import clsx$1, { clsx } from 'clsx';
/* empty css                         */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_L4oI7yH7.mjs';
import * as devalue from 'devalue';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { X, Menu, ChevronDown, ChevronRight, ExternalLink, Heart, Coffee, Zap, ArrowUp, Github, Linkedin, Headphones, Pen, Play, Mail, Briefcase, Code, Palette, User, Music, FileText, Newspaper } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const $$Astro$2 = createAstro("https://ehsan-pourhadi.com/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Ehsan/dev/astro-template/node_modules/astro/components/ViewTransitions.astro", void 0);

const meta = {
	title: "Portfolio",
	description: "Professional portfolio showcasing my work and expertise.",
	author: "Ehsan Pourhadi"
};
const basics = {
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
const navigation = {
	main: [
		{
			href: "/",
			text: "Home"
		},
		{
			href: "/portfolio",
			text: "Work"
		},
		{
			href: "/products",
			text: "Products"
		},
		{
			href: "/skills",
			text: "Skills"
		},
		{
			href: "/services",
			text: "Services"
		},
		{
			href: "/about",
			text: "About"
		},
		{
			href: "/contact",
			text: "Contact"
		}
	],
	footer: [
		{
			href: "/",
			text: "Home"
		},
		{
			href: "/portfolio",
			text: "Work"
		},
		{
			href: "/products",
			text: "Products"
		},
		{
			href: "/blog",
			text: "Blog"
		},
		{
			href: "/skills",
			text: "Skills"
		},
		{
			href: "/services",
			text: "Services"
		},
		{
			href: "/music",
			text: "Music"
		},
		{
			href: "/cv",
			text: "Resume"
		},
		{
			href: "/about",
			text: "About"
		},
		{
			href: "/life",
			text: "Life"
		},
		{
			href: "/contact",
			text: "Contact"
		},
		{
			href: "/credits",
			text: "Credits"
		}
	]
};
const contact = {
	name: "Ehsan Pourhadi",
	description: "Experienced software developer passionate about creating impactful digital experiences.",
	role: "Software Developer",
	website: "https://www.ehsan-pourhadi.com",
	linkedin: "https://www.linkedin.com/in/ehsanp/",
	email: "ehsan.po@gmail.com",
	location: "Malmö, Sweden",
	profilePic: "https://ehsan-pourhadi.com/img/118.jpg",
	yearsOfExperience: "13",
	socialLinks: {
		github: "https://github.com/ehsanpo",
		linkedin: "https://linkedin.com/in/ehsan"
	}
};
const experience = [
	{
		type: "education",
		highlighted: false,
		title: "Ruby on Rails",
		description: "Completed an intensive Ruby on Rails course at BredBand2, gaining proficiency in building robust web applications.",
		org: "BredBand2",
		year: "2021",
		tags: [
			"Ruby on Rails",
			"Web Development"
		],
		image: "/img/experience/education.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "education",
		highlighted: false,
		title: "Linux Academy / A Cloud Guru",
		description: "Earned the AWS Certified Solutions Architect certification through rigorous training from Linux Academy, demonstrating expertise in architecting scalable and reliable cloud solutions.",
		org: "Linux Academy / A Cloud Guru",
		year: "2018",
		tags: [
		],
		image: "/img/experience/education.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "education",
		highlighted: false,
		title: "Hermods",
		description: "Successfully completed a comprehensive Programming A and Database Management course at Hermods, mastering essential programming and database administration skills.",
		org: "Hermods",
		year: "2011",
		tags: [
		],
		image: "/img/experience/education.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "education",
		highlighted: true,
		title: "Glokala Folkshögskola",
		description: "Immersed in an in-depth Music Production program at Glokala Folkshögskola, acquiring proficiency in recording, mixing, mastering, event planning, and industry-standard practices within the music domain.",
		org: "Glokala Folkshögskola",
		year: "2009",
		tags: [
		],
		image: "/img/music.jpeg",
		awards: [
		],
		project: {
			title: "Music Producer and Event Organizer",
			description: "Produced and released multiple songs, primarily in hip-hop and R&B genres. Organized and hosted an event for Malmö-based artists at Arena 305. Collaborated with various artists and producers, contributing to projects that showcased diverse musical styles and talents.",
			technologies: [
				"Reason Studios",
				"Pro Tools",
				"Sound Design",
				"Digital Audio Processing"
			],
			link: {
				href: "https://soundcloud.com/eprumental",
				title: "Listen on SoundCloud"
			}
		}
	},
	{
		type: "education",
		highlighted: true,
		title: "Universitetsholmen's High School",
		description: "Pursued an Electricity Program with a specialization in Automation at Universitetsholmen's High School, gaining skills in PLC programming, control engineering, pneumatic systems, and complemented by a comprehensive Web Design course.",
		org: "Universitetsholmen's High School",
		year: "2008",
		tags: [
		],
		image: "/img/1110_0.png",
		awards: [
		],
		project: {
			title: "Automation Technician",
			description: "Worked in a high-pressure meat processing plant, repairing critical machinery to minimize downtime and prevent significant financial losses. Completed a project involving the installation and programming of a freezer system using PLCs, setting up sensors to monitor temperature and transmitting data via a network to a central database for real-time control and monitoring.",
			technologies: [
				"Industrial Automation",
				"PLC Programming",
				"Troubleshooting",
				"Sensor Installation"
			],
			image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
		}
	},
	{
		type: "experience",
		highlighted: true,
		title: "Software Developer",
		description: "Collaborated on the development of various software projects using React, Java, and ElectronJs.",
		detailedDescription: [
			"Developed and maintained soft phone, messaging app and video conferencing solutions.",
			"Contributed to the design and architecture of web applications.",
			"Collaborated with cross-functional teams for project delivery."
		],
		org: "Telavox",
		startDate: "2023-09",
		endDate: "Present",
		year: "2023 - Present",
		tags: [
			"React",
			"Java",
			"ElectronJs"
		],
		image: "/img/0_23.png",
		awards: [
		],
		project: {
			title: "Next-Gen Video Conferencing Platform",
			description: "Developing a video conferencing solution with, including real-time chat, smart noise cancellation, and adaptive video quality optimization.",
			technologies: [
				"WebRTC",
				"WebAssembly",
				"TensorFlow.js",
				"WebCodecs API"
			],
			image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
		},
		team: [
			{
				name: "Jony Lai",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/jony.jpg"
			},
			{
				name: "Lenny Erlesand",
				role: "Engineering Manager",
				linkedin: "",
				img: "/img/testimonial/lenny.jpg"
			},
			{
				name: "Desiré Stigsson",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/desire.jpeg"
			},
			{
				name: "Heshan Kithuldora",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/heshan.jpg"
			},
			{
				name: "Fredrik Madsen",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/fredrik.jpg"
			},
			{
				name: "Andreas Zivanovic",
				role: "Software Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Rajakamalam Mariappan",
				role: "Software Developer",
				linkedin: "",
				img: ""
			}
		]
	},
	{
		type: "experience",
		highlighted: true,
		title: "Software Developer",
		description: "Contributed to the implementation of web applications utilizing Gatsby, NextJs, and Ruby on Rails. Also managed projects and team.",
		detailedDescription: [
			"Developed and maintained main website, online web shop, and customer portals.",
			"Implemented frontend and backend functionality for new features.",
			"Worked closely with UX to optimize UI/UX for improved user engagement.",
			"Contributed to the implementation of new web applications utilizing Gatsby, Next.js, and Ruby on Rails.",
			"Managed the project and team."
		],
		org: "Bredband2",
		startDate: "2020-06",
		endDate: "2023-09",
		year: "2020 - 2023",
		tags: [
			"Gatsby",
			"NextJs",
			"React",
			"Ruby on Rails"
		],
		image: "/img/bb2.jpeg",
		awards: [
		],
		project: {
			title: "Customer Service Portal Redesign",
			description: "Spearheaded the complete redesign and development of the customer service portal, serving over 100,000 active users. Implemented real-time service monitoring and automated troubleshooting.",
			technologies: [
				"TypeScript",
				"React",
				"GraphQL",
				"Ruby on Rails"
			],
			image: "/img/Bredband2.webp"
		},
		team: [
			{
				name: "Rebecca Löfgren",
				role: "Senior UX Designer",
				linkedin: "",
				img: "/img/testimonial/rebecca.jpg"
			},
			{
				name: "Asger Bjerre-Nielsen",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/asger.jpg"
			},
			{
				name: "Fredrik Månsson",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/fredrik.jpg"
			},
			{
				name: "Jeen Gullstrand",
				role: "Software Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Carl Gustafsson",
				role: "Software Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Ibrahim Ahmed Ali",
				role: "Software Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Emma Skog",
				role: "Development Team Manager",
				linkedin: "",
				img: ""
			},
			{
				name: "Timothy Alexis Vass",
				role: "Software Developer",
				linkedin: "",
				img: "/img/testimonial/timothy.jpg"
			},
			{
				name: "Erfan Shirazi",
				role: "CIO",
				linkedin: "",
				img: "/img/testimonial/erfan.jpg"
			}
		]
	},
	{
		type: "experience",
		highlighted: false,
		title: "Software Developer",
		description: "Lead front-end development efforts by working with React and creating comprehensive end-to-end tests to ensure optimal user experiences.",
		org: "Skymill",
		year: "2020",
		tags: [
			"React"
		],
		image: "/img/experience/tech-company.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "experience",
		highlighted: false,
		title: "Freelance Web Developer",
		description: "Operated as an independent web developer, delivering high-quality responsive websites and web applications to clients.",
		org: "Freelance",
		year: "2019",
		tags: [
		],
		image: "/img/experience/tech-company.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "experience",
		highlighted: true,
		title: "Web Developer/Tech Lead",
		description: "Served as a technical lead at an advertising agency, offering clients strategic digital communication solutions for expanding their market reach.",
		detailedDescription: [
			"Developed and maintained WordPress sites tailored to client specifications.",
			"Oversaw technical aspects of web development projects.",
			"Mentored junior developers and conducted code reviews.",
			"Collaborated with the design team for seamless integration.",
			"Ensured timely delivery of projects while managing client expectations.",
			"Streamlined development processes to enhance team productivity and efficiency."
		],
		org: "Guts & Glory",
		startDate: "2016-10",
		endDate: "2019-05",
		year: "2017 - 2019",
		tags: [
		],
		image: "/img/0_31.png",
		awards: [
			"Svenska Design: Gold in Digital Design"
		],
		project: {
			title: "Malmö Saluhall Digital Experience",
			description: "Created a comprehensive digital identity for Malmö's premier food hall, featuring an immersive platform and a dedicated blog.",
			technologies: [
				"Next.js",
				"GraphQL",
				"Contentful",
				"Stripe",
				"Analytics"
			],
			link: {
				href: "https://www.malmosaluhall.se",
				title: "Visit Malmö Saluhall"
			},
			image: "/img/saluhall.png"
		},
		team: [
			{
				name: "Luong Lu",
				role: "Creative",
				linkedin: "",
				img: ""
			},
			{
				name: "Rebecka Svinhufvud",
				role: "Copywriter",
				linkedin: "",
				img: ""
			},
			{
				name: "Anna Vidling Gauffin",
				role: "Operativ Projektledare",
				linkedin: "",
				img: ""
			},
			{
				name: "Martin Johansson Szulc",
				role: "Head of Design / Art Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Susann Karlberg",
				role: "Account Manager",
				linkedin: "",
				img: ""
			},
			{
				name: "Ivan Matanovic",
				role: "Creative Director & Client Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Amanda Englund",
				role: "Grafisk Formgivare/Digital Producent",
				linkedin: "",
				img: ""
			},
			{
				name: "Niclas Nilsson",
				role: "Brand Strategist / CEO",
				linkedin: "",
				img: ""
			},
			{
				name: "Hanne Glave",
				role: "Graphic Designer / Art Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Tove Åkesson Larris",
				role: "Grafisk Formgivare",
				linkedin: "",
				img: ""
			},
			{
				name: "David Szmak",
				role: "Frontend Developer",
				linkedin: "",
				img: "/img/testimonial/david.jpg"
			}
		]
	},
	{
		type: "experience",
		highlighted: true,
		title: "Fullstack Developer",
		description: "Managed end-to-end development projects for a global web agency, specializing in UX/UI design, web development, and digital marketing.",
		detailedDescription: [
			"Managed end-to-end development projects for global clients.",
			"Designed and implemented responsive user interfaces for various web applications.",
			"Collaborated with UX/UI designers to enhance user experience across multiple platforms.",
			"Utilized Agile methodologies to streamline project workflows and enhance collaboration.",
			"Acted as a consultant for external client companies through Whitespace, delivering customized technical solutions to address diverse business challenges."
		],
		org: "Whitespace",
		startDate: "2014-03",
		endDate: "2016-10",
		year: "2013 - 2017",
		tags: [
		],
		image: "/img/0_0.png",
		awards: [
		],
		project: {
			title: "Job Ad and Application Platform",
			description: "We developed a job advertisement platform where companies can post small job ads, manage applications, and handle payments and invoicing seamlessly. Users can sign up, create profiles, and apply for jobs, while companies can review applications and select candidates.",
			technologies: [
				"Drupal",
				"PHP",
				"Visma Payment",
				"jQuery",
				"Bootstrap"
			],
			image: "/img/ad0_3.png"
		},
		team: [
			{
				name: "Andreas Holstenson",
				role: "Technical Problem Solver",
				linkedin: "",
				img: ""
			},
			{
				name: "Linnéa Olsson",
				role: "Front End Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Peter Antonius",
				role: "UX Designer",
				linkedin: "",
				img: ""
			},
			{
				name: "Razi Kantorp-Weglin",
				role: "UX Designer & Web Developer",
				linkedin: "",
				img: ""
			},
			{
				name: "Hannes Brage",
				role: "Project Manager",
				linkedin: "",
				img: ""
			},
			{
				name: "Lotta Gullberg",
				role: "Project Manager",
				linkedin: "",
				img: ""
			},
			{
				name: "Johan De Geer",
				role: "Head of Business Development & Founder",
				linkedin: "",
				img: ""
			},
			{
				name: "David Blomberg",
				role: "Founder and CRO",
				linkedin: "",
				img: ""
			}
		]
	},
	{
		type: "experience",
		highlighted: true,
		title: "Web Developer/Designer",
		description: "Executed web production tasks at The Fan Club, contributing to the creation of compelling online experiences.",
		detailedDescription: [
			"Developed and maintained dynamic web applications and campaign websites tailored for various advertising initiatives.",
			"Spearheaded the creation of ToolPool, a web application integrated with the Facebook API for seamless booking and management of tools.",
			"Designed and implemented short-lived campaign websites featuring interactive elements and animations.",
			"Collaborated with creative and marketing teams to translate campaign concepts into functional, visually compelling digital assets.",
			"Provided technical consulting to internal teams and clients, advising on best practices, innovative solutions, and feasibility of proposed digital strategies."
		],
		org: "The Fan Club",
		startDate: "2012-03",
		endDate: "2014-10",
		year: "2012 - 2013",
		tags: [
		],
		image: "/img/bg5-7.jpg",
		awards: [
			"Guldägget: Gold in PR & Silver in Digital",
			"Cannes Lions: Silver Lion in Promo & Activation",
			"Cannes Lions: Bronze Lion in Cyber"
		],
		project: {
			title: "ToolPool - Community Tool Sharing Platform",
			description: "Created an innovative platform that enables neighborhoods to share tools and equipment. The platform features real-time availability tracking, booking system, and social integration.",
			technologies: [
				"jQuery",
				"PHP",
				"Facebook API",
				"Booking system"
			],
			link: {
				href: "https://www.malmojarnhandel.se/produkt-kategori/toolpool/",
				title: "Visit ToolPool"
			},
			image: "/img/toolpool-cover.jpg"
		},
		team: [
			{
				name: "Markus Lindsjö",
				role: "Art Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Martin Ohlsson",
				role: "Art Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Gustav Johansson",
				role: "Copywriter",
				linkedin: "",
				img: ""
			},
			{
				name: "Ida Backman",
				role: "Copywriter",
				linkedin: "",
				img: ""
			},
			{
				name: "Christian Barrett",
				role: "Creative Director",
				linkedin: "",
				img: ""
			},
			{
				name: "Björn Kongslöv",
				role: "Originalare",
				linkedin: "",
				img: ""
			},
			{
				name: "Helena Ivarsson",
				role: "Originalare",
				linkedin: "",
				img: ""
			},
			{
				name: "Peter Andersson",
				role: "Produktionsledare",
				linkedin: "",
				img: ""
			},
			{
				name: "Rebecka Hjorth",
				role: "Produktionsledare",
				linkedin: "",
				img: ""
			},
			{
				name: "Klas Oskarsson",
				role: "Projektledare",
				linkedin: "",
				img: "/img/testimonial/klas.jpg"
			},
			{
				name: "Ulla-Karin Barrett",
				role: "Strateg",
				linkedin: "",
				img: ""
			},
			{
				name: "Ola Obrant Andreasson",
				role: "PR-ansvarig",
				linkedin: "",
				img: ""
			}
		]
	},
	{
		type: "experience",
		highlighted: false,
		title: "Freelance Web Developer",
		description: "Pioneered a year-long freelance endeavor focused on assisting local businesses through innovative web solutions.",
		org: "Freelance",
		year: "2012",
		tags: [
		],
		image: "/img/experience/tech-company.jpg",
		awards: [
		],
		project: {
		}
	},
	{
		type: "experience",
		highlighted: true,
		title: "Developer/Designer",
		description: "Managed design and development tasks while overseeing server administration and web hosting operations.",
		detailedDescription: [
			"Co-founded and managed a design and development agency.",
			"Developed and maintained the company's primary website.",
			"Designed and built small-scale WordPress websites tailored to client needs.",
			"Managed end-to-end project workflows, from initial client consultations to deployment and post-launch support.",
			"Optimized WordPress sites for performance, SEO, and security."
		],
		org: "Next Generation Design",
		startDate: "2011-01",
		endDate: "2012-01",
		year: "2010 - 2011",
		tags: [
		],
		image: "/img/0_3.png",
		awards: [
		],
		project: {
			title: "E-commerce Platform for Local Artisans",
			description: "Built a custom WordPress-based e-commerce platform enabling local artisans to sell their crafts online. The platform included custom payment integration and a unique rating system.",
			technologies: [
				"WooCommerce",
				"Custom WordPress Theme",
				"Payment Gateway Integration"
			],
			image: "/img/w2-transformed.jpeg"
		},
		team: [
			{
				name: "Lucian Branzei",
				role: "Co-Founder & Sell",
				linkedin: "",
				img: ""
			}
		]
	}
];
const services = [
	{
		id: 1,
		title: "Web Development",
		description: "Building modern, responsive websites with cutting-edge technologies.",
		icon: "💻",
		image: "/img/110_1.png",
		features: [
			"Custom website development",
			"Responsive design",
			"Full-stack development"
		]
	},
	{
		id: 2,
		title: "Application Development",
		description: "Creating cross-platform applications with modern frameworks.",
		icon: "📱",
		image: "/img/110_2.png",
		features: [
			"Cross-platform app development using Electron",
			"Tailwind and Vite integration",
			"React Native mobile apps"
		]
	},
	{
		id: 3,
		title: "UI/UX Design",
		description: "Designing intuitive and engaging user interfaces.",
		icon: "🎨",
		image: "/img/110_3_3.png",
		features: [
			"Wireframing",
			"Prototyping",
			"User Research"
		]
	},
	{
		id: 4,
		title: "Technical Consulting",
		description: "Providing expert guidance on system architecture and development strategies.",
		icon: "🛠️",
		image: "/img/110_8.png",
		features: [
			"Codebase reviews and optimizations",
			"Cloud and database strategy",
			"Technical team mentorship"
		]
	},
	{
		id: 5,
		title: "Music Production",
		description: "Producing high-quality music with professional tools and techniques.",
		icon: "🎵",
		image: "/img/110_31.png",
		features: [
			"Music production with Reason Studios and Logic",
			"Beat creation and MIDI programming",
			"Sound design and mastering"
		]
	}
];
const skills = [
	{
		range: "10",
		description: "Highly skilled in mentoring, architectural decisions, and technical problem-solving."
	},
	{
		range: "8",
		description: "Proficient in modern front-end frameworks and backend development."
	}
];
const testimonials = [
	{
		id: 11,
		name: "Fredrik Madsen",
		title: "Software developer at Telavox",
		img: "/img/testimonial/fredrik2.jpg",
		short: "Ehsan is never afraid of a challenge, and will happily take on on tasks that might seem daunting to others. He was always first to jump on the problem when our complicated build system acted up, and even when others were dealing with the issues, he was happy to volunteer to help. When Ehsan was around, we could always be confident that our issues would get solved.",
		desc: "For the two years that I worked with Eshan, he proved himself to be a knowledgeable, skilled and enthusiastic teammate, as well as a great guy to be around. Ehsan has vast frontend knowledge, which he demonstrated by being instrumental in our efforts to rewrite and modernize our huge, unwieldy react app. He was the go-to guy when we wanted to discuss code structure and quality. As if that wasn't enough, Ehsan is always keeping up with the latest toolkits and frameworks, learning in his spare time and finding ways to put his new knowledge to use at work.  \n Ehsan is never afraid of a challenge, and will happily take on on tasks that might seem daunting to others. He was always first to jump on the problem when our complicated build system acted up, and even when others were dealing with the issues, he was happy to volunteer to help. When Ehsan was around, we could always be confident that our issues would get solved.  \n Ehsan is also great at taking care of the team and contributing to our sense of community. When we were left without a manager for a time, Ehsan stepped up to lead discussions and plan meetings. When we had concerns about things, Ehsan would be the one to address them and make sure the right people heard them. And even though he's not afraid to deal with serious topics, he's also a real fun guy who brightens the office with his presence and we had plenty of laughs together. \n One thing I always liked about Ehsan was how he'd share his knowledge and findings with the team. Ehsan makes sure to stay at the forefront of modern technology and keeps the rest of us in the loop. If you read about a new AI tool, Ehsan has probably already tested and evaluated it, and knows if it's worth your time and money. He'd often do little presentations about these things to the team, helping us all improve our workflows and productivity.\n  \n tl;dr, when Ehsan comes knocking on your company door, make sure you answer!"
	},
	{
		id: 10,
		name: "Heshan Kithuldora",
		title: "Software developer at Telavox",
		img: "/img/testimonial/heshan.jpg",
		short: "He’s someone who brings a lot of honesty and integrity to discussions. He is never afraid to speak up, challenge assumptions, or offer a different perspective.",
		desc: "I had the privilege of working closely with Ehsan at Telavox, and it was truly a pleasure to collaborate with him. Ehsan is a highly experienced engineer with strong technical expertise across both front-end and back-end development. \n Throughout our collaboration, he consistently demonstrated deep technical knowledge and a proactive mindset. He often took the lead on new initiatives and helped establish effective ways of working within the team. Ehsan regularly kept the team up to date with the latest technical trends and best practices, and he also shared valuable insights on how AI-driven development can improve team productivity and overall performance. \n He was a key contributor to project planning and technical decision-making, always engaging in thoughtful and well-reasoned technical discussions that led to sound and pragmatic decisions. \n Beyond his technical capabilities, Ehsan is an excellent team player with strong professional values. He is always willing to support his teammates and consistently makes himself available when help is needed. His collaborative nature and reliability make him a valuable asset to any team. \n I highly recommend Ehsan and would welcome the opportunity to work with him again.."
	},
	{
		id: 9,
		name: "Jony Lai",
		title: "Software developer at Telavox",
		img: "/img/testimonial/jony.jpg",
		short: "He’s someone who brings a lot of honesty and integrity to discussions. He is never afraid to speak up, challenge assumptions, or offer a different perspective.",
		desc: "I had the privilege of working closely with Ehsan for about two years at Telavox, where we collaborated as full-stack developers on several major projects. During that time, he consistently proved to be one of the most reliable, thoughtful, and principled teammates I’ve worked with. \n One of the things that stands out most about him is his strong sense of ownership. Whether it was planning upcoming work, breaking down complex tasks, or ensuring that we stayed aligned as a team, he always took initiative and pushed our projects forward with clarity and structure. He played a huge role in making sure we kept our documentation in good shape—something that had a real, long-term impact on the maintainability of our codebase.\n He’s also someone who brings a lot of honesty and integrity to discussions. He is never afraid to speak up, challenge assumptions, or offer a different perspective. And even in cases where the team decided on a direction he personally disagreed with, he would still put in the work needed to make the solution succeed. That combination of high moral standards, transparency, and responsibility is rare and incredibly valuable.\n Another strength I really appreciated was his innovative mindset. He constantly explored new technologies, shared knowledge with the team, and helped us adopt better tools and practices. His curiosity and willingness to teach others made a big difference in how our team evolved. \n Beyond all the technical excellence, he’s simply a great colleague—supportive, dependable, and someone you can trust both in day-to-day work and during high-pressure moments. \n I highly recommend Ehsan. He elevates the people around him, drives work forward with professionalism and courage, and would be an asset to any team lucky enough to have him."
	},
	{
		id: 8,
		name: "Lenny Erlesand",
		title: "Engineering Manager at Telavox",
		img: "/img/testimonial/lenny.jpg",
		short: "As an engineer, Ehsan consistently takes the lead on the most advanced projects and tasks, translating complex business needs into solid technical designs.",
		desc: "I have had the pleasure of working with Ehsan as part of my team at Telavox. From day one, he has impressed me with a rare combination of deep technical expertise, a drive to continuously improve, and the leadership skills to help the team grow stronger. As an engineer, Ehsan consistently takes the lead on the most advanced projects and tasks, translating complex business needs into solid technical designs. Beyond his individual contributions, he is deeply engaged in improving how we work together as a team. Ehsan takes initiative in refining our processes, ensuring that we collaborate more effectively and work more sustainably. What I value most is how much Ehsan has helped me grow as well. He provides thoughtful feedback, asks challenging questions, and contributes to discussions with both openness and courage – listening carefully while also expressing divergent opinions. Having someone like Ehsan as a colleague is a privilege. He is not only a strong engineer but also a team player who actively contributes to long-term success."
	},
	{
		id: 7,
		name: "Desiré Stigsson",
		title: "Software Developer på Telavox",
		img: "/img/testimonial/desire.jpeg",
		short: "I worked with Ehsan during his time as Software Developer at Telavox, and I have never met another colleague with so much drive and passion.",
		desc: "I worked with Ehsan during his time as Software Developer at Telavox, and I have never met another colleague with so much drive and passion. Ehsan was a key component to our team, whose contributions extended far beyond his immediate tasks. He was eager to take on responsibilities, prepared and documented multiple discussions across many different topics, would not shy away from solving urgent or complex issues, and often communicating outside the team to discuss solutions. He had a contagious enthusiasm and took responsibility for the overall wellbeing of the team, never hesitating to knock on one’s shoulder to discuss an issue or offering help or support. Working alongside Ehsan was something I really enjoyed, and I wholeheartedly wish him all the best with any and all of his future endeavors!"
	},
	{
		id: 6,
		name: "Asger Bjerre-Nielsen",
		title: "Developer At Bredeband2",
		img: "/img/testimonial/asger.jpg",
		short: "Ehsan and I have worked closely together on a variety of projects, each differing in size and complexity.",
		desc: "Having worked in the industry for only a handful of years, I consider the opportunity to have worked with Ehsan as extremely rewarding. Even though we started out in different teams, Ehsan has always been open to discussing both problems and solutions. Over the past two years, Ehsan and I have worked closely together on a variety of projects, each differing in size and complexity. Besides his excellent ability to break down tasks and problems and provide high quality code to efficiently solve even the most demanding task we have had, Ehsan also has the ability to convey the essence of a problem and explain both the ‘how’ and the ‘why’ it should be solved to junior devs as well as customers alike. But working with Ehsan is also challenging in the best possible way. He is always on the lookout for new tech and ideas, on how to do things better. This is something from which everyone in our team has benefitted from. Over a great many cups of tea, we have discussed how to approach problems, potential pitfalls and best practices. I’m sure that Ehsan’s knowledge, curiosity and sense of teamwork will be a great asset to any organisation and I envy the next developer who gets to pick his brain. - It’s always time for tea…"
	},
	{
		id: 5,
		name: "Rebecca Löfgren",
		title: "Senior UX Designer at Bredband2",
		img: "/img/testimonial/rebecca.jpg",
		short: "Ehsan possesses the ability to see the whole picture, which enables him to produce quality products – even if the brief is a bit fuzzy.",
		desc: "I had the pleasure of working with Ehsan during my first couple of years at Bredband2 (before he unfortunately moved on to take on new adventures). And let me tell you – I don’t think I’ve ever met someone as passionate and knowledgeable about “everything code” as him! Working with Ehsan means constantly being introduced to new ideas and interesting innovations. It’s about being challenged (in a good way!) in your ways of thinking, to find creative and efficient solutions to complex problems, and being confident that the code your team produces will adhere to best practices. But above all, it’s an absolute blast. Ehsan possesses the ability to see the whole picture, which enables him to produce quality products – even if the brief is a bit fuzzy. He has an eagerness to share his expertise and has, on countless occasions, made both our team and our department better by doing so. He also has a keen eye for design, which has made my job as a designer so much easier. Replacing him in our team will be a struggle, and I do hope our professional paths cross again in the future. To anyone who has the opportunity to work with him: I’m jealous."
	},
	{
		id: 4,
		name: "Timothy Alexis Vass",
		title: "System Developer at Bredband2",
		img: "/img/testimonial/timmy.jpg",
		short: "Ehsan is a good influence and will contribute. Since he is helpful, curious and kind, he will make an extra effort to participate and investigate an issue even if it isn't his primary responsibility.",
		desc: "Ehsan is intelligent, sociable, helpful and really good at what he does. We worked together in the front-end team when I started at Bredband2, before I changed to backend. Ehsan is a good influence and will contribute. Since he is helpful, curious and kind, he will make an extra effort to participate and investigate an issue even if it is not his primary responsibility. His cheerful attitude is very valuable since he will uplift others, which in combination with his professional qualities makes him a really great and dedicated colleague. We shared many lunches, laughs and interesting conversations together. I definitely recommend Ehsan for these reasons!"
	},
	{
		id: 3,
		name: "Fredrik Månsson",
		title: "System Developer at Bredband2",
		img: "/img/testimonial/fredrik.jpg",
		short: "He has a strong ability to quickly grasp the problems that need to be solved and utilize existing knowledge or gather new information to solve them.",
		desc: "During our time as colleagues at Bredband2, I have experienced Ehsan’s knowledge in programming and his desire to stay at the forefront of new technology. I have had the honor of working together with Ehsan in both large and small teams and projects. He has a strong ability to quickly grasp the problems that need solving and to use existing or acquire new knowledge to resolve them. We have had many great moments discussing programming and problem-solving, most recently in a project involving React and NextJS. In summary, I consider Ehsan to be a very skilled and motivated programmer. His technical expertise, commitment to self-improvement, and remarkable teamwork make him an indispensable member of any organization. I have no doubt that Ehsan will continue to make significant contributions and achieve great success in his future endeavors. I would not hesitate to have Ehsan as a colleague again in the future."
	},
	{
		id: 2,
		name: "Erfan Shirazi",
		title: "CIO at Bredband2",
		img: "/img/testimonial/erfan.jpg",
		short: "He is incredibly competent, knowledgeable, and learns quickly. He is highly regarded by his colleagues and contributes a lot when it comes to various issues related to web development and software engineering in general.",
		desc: "Ehsan worked as a system developer with us at Bredband2 for 3 years, mainly focusing on frontend development with React. He is incredibly competent, knowledgeable, and a fast learner. He was very well-liked by his colleagues and contributed a lot of valuable input regarding various aspects of web development and system development in general. I can highly recommend Ehsan for almost anything related to system development, both backend and frontend. If there’s ever something he doesn’t already know, he will learn it quickly. And he is always welcome back to us at Bredband2 in the future!"
	},
	{
		id: 1,
		name: "David Szmak",
		title: "Front End Developer at Guts & Glory",
		img: "/img/testimonial/david.jpg",
		short: "Few people have the opportunity to code to a Tech Lead Developer who is also a good coach and a great mentor—but I did when I worked with Ehsan.",
		desc: "Few people have the opportunity to code to a Tech Lead Developer who is also a good coach and a great mentor—but I did when I worked with Ehsan. I had the pleasure of working with Ehsan in my two interships at the Guts & Glory, we collaborated on many projects. I was particularly impressed by Ehsan´s ability to handle even the toughest projects effortlessly. That skill often takes years to develop among developers professionals, but it seemed to come perfectly naturally to him. And I still miss working with him! As a team member or a leader, Ehsan earns my highest recommendation."
	},
	{
		id: 0,
		name: "Klas Oskarsson",
		title: "Account Director",
		img: "/img/testimonial/klas.jpg",
		short: "As the project manager for the award-winning project TOOLPOOL, I have Ehsan to thank for its significant success.",
		desc: "As project manager for the Golden Egg award-winning project TOOLPOOL, I have Ehsan to thank for its success. The entire project was based on a (at the time) unavailable feature on Facebook. Ehsan not only managed to create this feature and thereby secure the entire delivery, but he was also deeply involved in shaping the entire technical aspect of the project. Hard work under intense time pressure and with a non-existent budget was no obstacle for Ehsan. Thank you!"
	}
];
const stacks = [
	{
		slug: "Front-end",
		labels: [
			"React",
			"Gatsby",
			"Next.js",
			"TypeScript",
			"Css"
		],
		icon: "/img/stacks/front-end.svg",
		data: [
			"10",
			"10",
			"8",
			"7",
			"10"
		]
	},
	{
		slug: "Backend",
		labels: [
			"Node.js",
			"PHP",
			"Ruby on Rails",
			"Rest API",
			"GraphQL"
		],
		icon: "/img/stacks/back-end.svg",
		data: [
			"10",
			"9",
			"7",
			"10",
			"10"
		]
	},
	{
		slug: "Database",
		labels: [
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"Redis",
			"Elasticsearch"
		],
		icon: "/img/stacks/database2.svg",
		data: [
			"10",
			"7",
			"8",
			"7",
			"6"
		]
	},
	{
		slug: "Design",
		labels: [
			"UI",
			"UX",
			"Adobe XD",
			"Photoshop",
			"Motion Graphics"
		],
		icon: "/img/stacks/design2.svg",
		data: [
			"10",
			"9",
			"8",
			"10",
			"8"
		]
	},
	{
		slug: "Apps",
		labels: [
			"Electron js",
			"Typescript",
			"Tailwind",
			"Vite",
			"React Native"
		],
		icon: "/img/stacks/apps.svg",
		data: [
			"7",
			"8",
			"8",
			"6",
			"8"
		]
	},
	{
		slug: "Cloud",
		labels: [
			"AWS API Gateway",
			"Lambda",
			"DynamoDB",
			"S3",
			"CloudFront"
		],
		icon: "/img/stacks/cloud.svg",
		data: [
			"8",
			"6",
			"6",
			"8",
			"7"
		]
	},
	{
		slug: "DevOps",
		labels: [
			"Linux",
			"Docker",
			"Nginx",
			"Shell Script"
		],
		icon: "/img/stacks/devop2.svg",
		data: [
			"9",
			"9",
			"9",
			"8"
		]
	},
	{
		slug: "CI/CD",
		labels: [
			"Github Actions",
			"Jenkins",
			"CircleCI",
			"GitLab CI"
		],
		icon: "/img/stacks/cicd.svg",
		data: [
			"9",
			"7",
			"6",
			"6"
		]
	},
	{
		slug: "Multimedia",
		labels: [
			"Reason Studios",
			"Cubase",
			"FFmpeg",
			"After Effects"
		],
		icon: "/img/stacks/music.svg",
		data: [
			"10",
			"9",
			"7",
			"5"
		]
	}
];
const timeline = [
	{
		id: 1,
		name: "HTML & CSS",
		icon: "/img/timeline-icons/html-css.svg",
		duration: "2010-2025"
	},
	{
		id: 2,
		name: "Javascript",
		icon: "/img/timeline-icons/javascript.svg",
		duration: "2010-2025"
	},
	{
		id: 20,
		name: "TypeScript",
		icon: "/img/timeline-icons/typescript.svg",
		duration: "2022-2025"
	},
	{
		id: 110,
		name: "Reason Studios",
		icon: "/img/timeline-icons/reason-studios.svg",
		duration: "2010-2025"
	},
	{
		id: 111,
		name: "Cubase",
		icon: "/img/timeline-icons/cubase.svg",
		duration: "2010-2019"
	},
	{
		id: 0,
		name: "Photoshop",
		icon: "/img/timeline-icons/photoshop.svg",
		duration: "2010-2019"
	},
	{
		id: 113,
		name: "After Effects",
		icon: "/img/timeline-icons/after-effects.svg",
		duration: "2010-2014"
	},
	{
		id: 100,
		name: "Adobe Flash",
		icon: "/img/timeline-icons/adobe-flash.svg",
		duration: "2010-2012"
	},
	{
		id: 101,
		name: "Rest API",
		icon: "/img/timeline-icons/rest-api.svg",
		duration: "2012-2025"
	},
	{
		id: 4,
		name: "PHP",
		icon: "/img/timeline-icons/php.svg",
		duration: "2012-2020"
	},
	{
		id: 5,
		name: "jQuery",
		icon: "/img/timeline-icons/jquery.svg",
		duration: "2012-2015"
	},
	{
		id: 104,
		name: "Motion Graphics",
		icon: "/img/timeline-icons/motion-graphics.svg",
		duration: "2012-2020"
	},
	{
		id: 6,
		name: "Wordpress",
		icon: "/img/timeline-icons/wordpress.svg",
		duration: "2013-2020"
	},
	{
		id: 7,
		name: "Python",
		icon: "/img/timeline-icons/python.svg",
		duration: "2013-2014"
	},
	{
		id: 8,
		name: "MySQL",
		icon: "/img/timeline-icons/mysql.svg",
		duration: "2013-2017"
	},
	{
		id: 9,
		name: "Drupal",
		icon: "/img/timeline-icons/drupal.svg",
		duration: "2014-2018"
	},
	{
		id: 24,
		name: "Laravel",
		icon: "/img/timeline-icons/laravel.svg",
		duration: "2014-2017"
	},
	{
		id: 10,
		name: "Angular",
		icon: "/img/timeline-icons/angular.svg",
		duration: "2015-2016"
	},
	{
		id: 23,
		name: "Node.js",
		icon: "/img/timeline-icons/node-js.svg",
		duration: "2016-2025"
	},
	{
		id: 32,
		name: "UX Design",
		icon: "/img/timeline-icons/ux-design.svg",
		duration: "2016-2025"
	},
	{
		id: 25,
		name: "AWS",
		icon: "/img/timeline-icons/aws.svg",
		duration: "2017-2018"
	},
	{
		id: 8,
		name: "NoSQL",
		icon: "/img/timeline-icons/nosql.svg",
		duration: "2017-2018"
	},
	{
		id: 11,
		name: "ReactJS",
		icon: "/img/timeline-icons/reactjs.svg",
		duration: "2018-2025"
	},
	{
		id: 27,
		name: "Webpack",
		icon: "/img/timeline-icons/webpack.svg",
		duration: "2018-2025"
	},
	{
		id: 26,
		name: "ExpressJS",
		icon: "/img/timeline-icons/expressjs.svg",
		duration: "2018-2019"
	},
	{
		id: 107,
		name: "Nginx",
		icon: "/img/timeline-icons/nginx.svg",
		duration: "2018-2025"
	},
	{
		id: 108,
		name: "Shell Script",
		icon: "/img/timeline-icons/shell-script.svg",
		duration: "2018-2025"
	},
	{
		id: 102,
		name: "MongoDB",
		icon: "/img/timeline-icons/mongodb.svg",
		duration: "2019-2020"
	},
	{
		id: 27,
		name: "Redux",
		icon: "/img/timeline-icons/redux.svg",
		duration: "2019-2025"
	},
	{
		id: 13,
		name: "Ruby on Rails",
		icon: "/img/timeline-icons/ruby-on-rails.svg",
		duration: "2019-2025"
	},
	{
		id: 12,
		name: "Adobe XD",
		icon: "/img/timeline-icons/adobe-xd.svg",
		duration: "2019-2022"
	},
	{
		id: 115,
		name: "GitLab CI",
		icon: "/img/timeline-icons/gitlab-ci.svg",
		duration: "2019-2021"
	},
	{
		id: 103,
		name: "Redis",
		icon: "/img/timeline-icons/redis.svg",
		duration: "2020-2021"
	},
	{
		id: 104,
		name: "Elasticsearch",
		icon: "/img/timeline-icons/elasticsearch.svg",
		duration: "2020-2021"
	},
	{
		id: 114,
		name: "CircleCI",
		icon: "/img/timeline-icons/circleci.svg",
		duration: "2020-2022"
	},
	{
		id: 14,
		name: "GraphQL",
		icon: "/img/timeline-icons/graphql.svg",
		duration: "2020-2022"
	},
	{
		id: 15,
		name: "Gatsby",
		icon: "/img/timeline-icons/gatsby.svg",
		duration: "2020-2023"
	},
	{
		id: 31,
		name: "Cypress",
		icon: "/img/timeline-icons/cypress.svg",
		duration: "2020-2023"
	},
	{
		id: 28,
		name: "VueJS",
		icon: "/img/timeline-icons/vuejs.svg",
		duration: "2020-2021"
	},
	{
		id: 112,
		name: "FFmpeg",
		icon: "/img/timeline-icons/ffmpeg.svg",
		duration: "2020-2025"
	},
	{
		id: 16,
		name: "Figma",
		icon: "/img/timeline-icons/figma.svg",
		duration: "2021-2025"
	},
	{
		id: 17,
		name: "PostgreSQL",
		icon: "/img/timeline-icons/postgresql.svg",
		duration: "2021-2022"
	},
	{
		id: 18,
		name: "Next.js",
		icon: "/img/timeline-icons/next-js.svg",
		duration: "2021-2024"
	},
	{
		id: 109,
		name: "Github Actions",
		icon: "/img/timeline-icons/github-actions.svg",
		duration: "2021-2025"
	},
	{
		id: 29,
		name: "Vite",
		icon: "/img/timeline-icons/vite.svg",
		duration: "2022-2025"
	},
	{
		id: 30,
		name: "React Native",
		icon: "/img/timeline-icons/react-native.svg",
		duration: "2022-2025"
	},
	{
		id: 30,
		name: "Jenkins",
		icon: "/img/timeline-icons/jenkins.svg",
		duration: "2022-2025"
	},
	{
		id: 19,
		name: "Tailwind",
		icon: "/img/timeline-icons/tailwind.svg",
		duration: "2022-2025"
	},
	{
		id: 21,
		name: "Electron JS",
		icon: "/img/timeline-icons/electron-js.svg",
		duration: "2022-2025"
	},
	{
		id: 29,
		name: "Zustand",
		icon: "/img/timeline-icons/zustand.svg",
		duration: "2024-2025"
	},
	{
		id: 22,
		name: "Astro",
		icon: "/img/timeline-icons/astro.svg",
		duration: "2024-2025"
	}
];
const charts = [
	{
		slug: "Overall",
		labels: [
			"Front-End",
			"Backend",
			"Database",
			"Design",
			"Cloud",
			"Devop"
		],
		data: [
			"10",
			"9",
			"8",
			"8",
			"6",
			"7"
		]
	}
];
const certifications = [
	{
		name: "Cybersecurity Awareness Professional Certificate (CAPC)",
		img: "/img/cert/CAPC.png",
		year: "2025"
	},
	{
		name: "Lean Leadership Professional Certificate (LLPC)",
		img: "/img/cert/LLPC.png",
		year: "2025"
	},
	{
		name: "Certified Prompt Engineering Foundation Professional Certificate (CPEFPC)",
		img: "/img/cert/CPEFPC.png",
		year: "2025"
	},
	{
		name: "Introduction to Cybersecurity",
		img: "/img/cert/cybersecurity.png",
		year: "2022"
	},
	{
		name: "AWS Cloud Certification",
		img: "/img/cert/AWS.png",
		year: "2017"
	},
	{
		name: "Scrum Foundation Professional Certificate (SFPC)",
		img: "/img/cert/SFPC.png",
		year: "2022"
	},
	{
		name: "Remote Work and Virtual Collaboration Certificate (RWVCPC)",
		img: "/img/cert/RWVCPC.png",
		year: "2022"
	},
	{
		name: "UI Components I: Basic",
		img: "/img/cert/ui-basic.png",
		year: "2022"
	},
	{
		name: "UI Components II: Advanced",
		img: "/img/cert/ui-adv.png",
		year: "2022"
	},
	{
		name: "Design Composition",
		img: "/img/cert/design-composition.png",
		year: "2022"
	},
	{
		name: "Design Accessibility",
		img: "/img/cert/accessibility.png",
		year: "2022"
	},
	{
		name: "Advanced Google Analytics",
		img: "/img/cert/GAA.png",
		year: "2022"
	},
	{
		name: "Google Tag Manager Fundamentals",
		img: "/img/cert/GTM.png",
		year: "2022"
	},
	{
		name: "Google Analytics for Beginners",
		img: "/img/cert/GA.png",
		year: "2022"
	}
];
const education = [
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
const awards = [
	{
		name: "Svenska design",
		description: "Gold Category Digital Design",
		images: "/img/awards/svenskadesign.png",
		link: "portfolio/malmo-saluhall"
	},
	{
		name: "Cannes lions",
		description: "Silver Lion in Promo & Activation, Bronze Lion in Cyber & Shortlist in Media",
		images: "/img/awards/cannen.png",
		link: "portfolio/toolpool"
	},
	{
		name: "Guldägget",
		description: "Gold Category PR & Silver Categories Digital and Alternative Media",
		images: "/img/awards/guldagg.png",
		link: "portfolio/toolpool"
	}
];
const tools = [
	{
		name: "Visual Studio Code",
		icon: "/img/tools/vscode.svg",
		description: "Primary code editor with extensive customization and plugin support",
		proficiency: 9
	},
	{
		name: "Docker",
		icon: "/img/tools/docker.svg",
		description: "Container platform for consistent development and deployment",
		proficiency: 8
	},
	{
		name: "Git",
		icon: "/img/tools/git.svg",
		description: "Version control system for code management and collaboration",
		proficiency: 9
	},
	{
		name: "Figma",
		icon: "/img/tools/figma.svg",
		description: "Design tool for UI/UX prototyping and collaboration",
		proficiency: 8
	},
	{
		name: "Postman",
		icon: "/img/tools/postman.svg",
		description: "API development and testing platform",
		proficiency: 9
	},
	{
		name: "Terminal",
		icon: "/img/tools/terminal.svg",
		description: "Command-line interface for system operations and development",
		proficiency: 9
	}
];
const languages = [
	{
		name: "English",
		proficiency: "Professional"
	},
	{
		name: "Swedish",
		proficiency: "Professional"
	},
	{
		name: "Persian",
		proficiency: "Native"
	}
];
const life = [
	{
		year: "1988",
		title: "🐣 Born in Tehran",
		org: "Tehran, Iran",
		description: "Born on May 24, 1988 in Tehran, Iran. The beginning of an incredible journey.",
		image: "/img/life/littleep.jpg",
		tags: [
			"Life",
			"Beginning"
		],
		highlighted: true
	},
	{
		year: "2003",
		title: "✈️ Relocated to Sweden",
		org: "Malmö, Sweden",
		description: "Moved to Malmö, Sweden on May 5, 2003. A new chapter in a new country, embracing new cultures and opportunities.",
		image: "/img/life/sweden.jpg",
		tags: [
			"Migration",
			"New Beginning"
		],
		highlighted: true
	},
	{
		year: "2008",
		title: "🎓 Education Journey",
		org: "Technical & Creative Education",
		description: "⚡ Studied Electrical Automation (PLC, control engineering)\n🎨 Completed Web Design course – first step into digital creation",
		image: "/img/life/education.jpg",
		tags: [
			"Education",
			"Electrical Automation",
			"Web Design",
			"PLC"
		],
		highlighted: true
	},
	{
		year: "2010",
		title: "🎵 First Music Release",
		org: "Independent Artist",
		description: "Released my first official track 'The Demo' – marking the beginning of my music production journey. A milestone that combined technical skills with creative expression.",
		image: "/img/music.jpeg",
		tags: [
			"Music",
			"Production",
			"Hip-Hop",
			"Creative"
		],
		highlighted: true,
		spotifyEmbed: "https://open.spotify.com/embed/track/4ac9ugMH2a90F4LnRN8W01?utm_source=generator"
	},
	{
		year: "2011",
		title: "💻 Co-Founded Next Generation Design",
		org: "Next Generation Design",
		description: "Co-founded Next Generation Design, a design and development agency. Started my entrepreneurial journey building WordPress websites, managing client projects, and handling server administration. This was my first step as a professional developer.",
		image: "/img/0_3.png",
		tags: [
			"Entrepreneurship",
			"Web Development",
			"WordPress",
			"First Company"
		],
		highlighted: true
	},
	{
		year: "2012",
		title: "💼 First Professional Role",
		org: "The Fan Club",
		description: "Started my first official job as Web Developer/Designer at The Fan Club advertising agency. This role launched my professional career in web development and creative digital solutions.",
		image: "/img/bg5-7.jpg",
		tags: [
			"Career",
			"Web Development",
			"First Job"
		],
		highlighted: true
	},
	{
		year: "2012",
		title: "🏆 ToolPool Award Winner",
		org: "Industry Recognition",
		description: "Created ToolPool – an award-winning web application that received multiple industry awards including Guldägget (Gold Egg). Recognized for innovation, technical execution, and creative concept.",
		image: "/img/life/toolpool-team.jpg",
		tags: [
			"Award",
			"Innovation",
			"Web Application"
		],
		highlighted: true,
		awards: [
			"Guldägget (Gold Egg) - Prestigious Swedish award for creative excellence"
		]
	},
	{
		year: "2019",
		title: "💍 Married CharLeen",
		org: "Love & Partnership",
		description: "Got married to CharLeen on August 8, 2019 ❤️. A beautiful celebration of love and commitment.",
		image: "/img/life/char.jpg",
		tags: [
			"Marriage",
			"Love",
			"Family"
		],
		highlighted: true
	}
];
const roles = [
	{
		title: "Senior Software Engineer",
		slug: "senior-software-engineer",
		description: "Delivering technical excellence through experience, leadership, and continuous innovation.",
		icon: "👨‍💻",
		image: "/img/roles/Senior Software Engineer.png",
		tags: [
			"Leadership",
			"Architecture",
			"Mentorship"
		]
	},
	{
		title: "Product Engineer",
		slug: "product-engineer",
		description: "Crafting product solutions, not just code — where engineering meets user needs.",
		icon: "🎯",
		image: "/img/roles/Product Engineer.png",
		tags: [
			"Product Thinking",
			"User Research",
			"Full-stack"
		]
	},
	{
		title: "Engineering Manager",
		slug: "engineering-manager",
		description: "Leading high-performing engineering teams to deliver exceptional software products.",
		icon: "👥",
		image: "/img/roles/Engineering Manage.png",
		tags: [
			"Team Leadership",
			"Strategy",
			"Process"
		]
	},
	{
		title: "DevOps Cloud Engineer",
		slug: "devops-cloud-engineer",
		description: "Building scalable infrastructure and optimizing deployment pipelines.",
		icon: "☁️",
		image: "/img/roles/devops.png",
		tags: [
			"Cloud",
			"Automation",
			"Scalability"
		]
	},
	{
		title: "Music Production Technologist",
		slug: "music-production-technologist",
		description: "Combining technical expertise with creative audio production and sound design.",
		icon: "🎵",
		image: "/img/roles/Music Production.png",
		tags: [
			"Audio",
			"Production",
			"Technology"
		]
	}
];
const portfolioData = {
	meta: meta,
	basics: basics,
	navigation: navigation,
	contact: contact,
	experience: experience,
	services: services,
	skills: skills,
	testimonials: testimonials,
	stacks: stacks,
	timeline: timeline,
	charts: charts,
	certifications: certifications,
	education: education,
	awards: awards,
	tools: tools,
	languages: languages,
	life: life,
	roles: roles
};

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://ehsan-pourhadi.com/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/bookmark-chaos-to-spring-boot-salvation/index.md": () => import('./index_B6KSsIc_.mjs'),"/src/content/blog/building-animator-sprite-animation-tool/index.md": () => import('./index_rCwetzxQ.mjs'),"/src/content/blog/building-audio-tools-three-apps-one-passion/index.md": () => import('./index_BgFY6Ay8.mjs'),"/src/content/blog/building-chillinvr-teleporting-to-my-brothers-trip/index.md": () => import('./index_nDJMZTGz.mjs'),"/src/content/blog/building-family-tracking-app-expo-supabase/index.md": () => import('./index_CS7Nh0q1.mjs'),"/src/content/blog/building-modern-web-apps-with-astro-react/index.md": () => import('./index_B-Y6zYoH.mjs'),"/src/content/blog/developer-personality-test/index.md": () => import('./index_CPOhucaU.mjs'),"/src/content/blog/from-automation-to-apps/index.md": () => import('./index_BrYod2MD.mjs'),"/src/content/blog/generative-art-circles/index.md": () => import('./index_CIgEq1fs.mjs'),"/src/content/blog/generative-waves/index.md": () => import('./index_BnNtR7gb.mjs'),"/src/content/blog/getting-started-with-react-native/index.md": () => import('./index_8lbI3vvY.mjs'),"/src/content/blog/machine-learning-lessons-learned/index.md": () => import('./index_Ml3yRz9V.mjs'),"/src/content/blog/music-production-tools-2022/index.md": () => import('./index_lSfsozkA.mjs'),"/src/content/blog/music-visualization-threejs/index.md": () => import('./index_VQOL9GNN.mjs'),"/src/content/blog/my-breakup-with-usestate/index.md": () => import('./index_BWM001n3.mjs'),"/src/content/blog/my-first-machine-learning-project/index.md": () => import('./index_CUuUelA8.mjs'),"/src/content/blog/my-fullstack-developer-journey/index.md": () => import('./index_Cqm3dN00.mjs'),"/src/content/blog/react-19-killing-usememo-usecallback/index.md": () => import('./index_DTRznJKI.mjs'),"/src/content/blog/typescript-best-practices/index.md": () => import('./index_EcGaKVVP.mjs'),"/src/content/blog/waverider-sunday-build/index.md": () => import('./index_CLxiF-yr.mjs'),"/src/content/blog/why-agile-ai-coding-feels-kinda-broken/index.md": () => import('./index_gSXtoi5c.mjs'),"/src/content/blog/why-i-actually-really-like-my-em/index.md": () => import('./index_DWq8zORq.mjs'),"/src/content/portfolio/040-fm/040-fm.md": () => import('./040-fm_CVLfULku.mjs'),"/src/content/portfolio/KompisKlubben/KompisKlubben.md": () => import('./KompisKlubben_CAUa1Fzl.mjs'),"/src/content/portfolio/alex-koll/alex-koll.md": () => import('./alex-koll_BjMZjaQX.mjs'),"/src/content/portfolio/appleappen/appleappen.md": () => import('./appleappen__oXCCak3.mjs'),"/src/content/portfolio/battretillvaro/battretillvaro-se.md": () => import('./battretillvaro-se_BdqCbcet.mjs'),"/src/content/portfolio/bilcleaniken/bilcleaniken.md": () => import('./bilcleaniken_Ch1R4rjv.mjs'),"/src/content/portfolio/bjornekulla/bjornekulla.md": () => import('./bjornekulla_D3t4ZyBJ.mjs'),"/src/content/portfolio/bra-energi/bra-energi.md": () => import('./bra-energi_BfFot44D.mjs'),"/src/content/portfolio/bredband2/Bredband2.md": () => import('./Bredband2_s6y5eoQ0.mjs'),"/src/content/portfolio/bussemester/bussemester.md": () => import('./bussemester_DzZFWWzM.mjs'),"/src/content/portfolio/bym/bym.md": () => import('./bym_CBcdNk7L.mjs'),"/src/content/portfolio/carpings/carpings.md": () => import('./carpings_CiZuGzm8.mjs'),"/src/content/portfolio/cecilia-bjork/cecilia-bjork.md": () => import('./cecilia-bjork_OZNzpV-Y.mjs'),"/src/content/portfolio/clever/clever.md": () => import('./clever_hkwmevhy.mjs'),"/src/content/portfolio/clx-network/clx-network.md": () => import('./clx-network_Dj9WnvhU.mjs'),"/src/content/portfolio/cottex/cottex.md": () => import('./cottex_BoLCCchY.mjs'),"/src/content/portfolio/digital-matchningstjanst/digital-matchningstjanst.md": () => import('./digital-matchningstjanst_C1RLNbQY.mjs'),"/src/content/portfolio/dosgardenias/dosgardenias.md": () => import('./dosgardenias_C1BvKXXx.mjs'),"/src/content/portfolio/flamman/flamman.md": () => import('./flamman_DqlNlSdu.mjs'),"/src/content/portfolio/folk-mat-moten/folk-mat-moten.md": () => import('./folk-mat-moten_gwHDBBXP.mjs'),"/src/content/portfolio/generative-circles/circles.md": () => import('./circles_BkSSvBq_.mjs'),"/src/content/portfolio/guts-glory/guts-glory.md": () => import('./guts-glory_D_CupLZU.mjs'),"/src/content/portfolio/hallbarhetsredovisning/hallbarhetsredovisning.md": () => import('./hallbarhetsredovisning_Chu_7dbp.mjs'),"/src/content/portfolio/holy-greens/holy-greens.md": () => import('./holy-greens_Dmz5JmNE.mjs'),"/src/content/portfolio/kammarkollegiet/kammarkollegiet.md": () => import('./kammarkollegiet_RMlo4fLs.mjs'),"/src/content/portfolio/kockenskamrater/kockenskamrater.md": () => import('./kockenskamrater_D6tmztyE.mjs'),"/src/content/portfolio/kondomspexen/kondomspexen.md": () => import('./kondomspexen_JEXCBIoH.mjs'),"/src/content/portfolio/library-event-display/library-event-display.md": () => import('./library-event-display_Dmp_PfPA.mjs'),"/src/content/portfolio/ljusjakten/ljusjakten.md": () => import('./ljusjakten_3wU0hZ5g.mjs'),"/src/content/portfolio/loof-foundation/loof-foundation.md": () => import('./loof-foundation_CepiT4oQ.mjs'),"/src/content/portfolio/lugi/lugi.md": () => import('./lugi_CKM3_kZP.mjs'),"/src/content/portfolio/lundaspelen/lundaspelen.md": () => import('./lundaspelen_IAn44ugx.mjs'),"/src/content/portfolio/malmo-saluhall/malmo-saluhall.md": () => import('./malmo-saluhall_B05dU858.mjs'),"/src/content/portfolio/mekonomen-group/mekonomen-group.md": () => import('./mekonomen-group_ezQg4azG.mjs'),"/src/content/portfolio/mekonomen/mekonomen.md": () => import('./mekonomen_h4a-496a.mjs'),"/src/content/portfolio/missmary/missmary.md": () => import('./missmary_DO5Uifg4.mjs'),"/src/content/portfolio/motesplatsip/motesplatsip.md": () => import('./motesplatsip_CzUcw7YR.mjs'),"/src/content/portfolio/muslimix/muslimix.md": () => import('./muslimix_B-iIZAxr.mjs'),"/src/content/portfolio/ngd/ngd.md": () => import('./ngd_DOCTHVgd.mjs'),"/src/content/portfolio/noaab/noaab.md": () => import('./noaab_Bg_gVvx8.mjs'),"/src/content/portfolio/noxo/noxo.md": () => import('./noxo_EERl7fG3.mjs'),"/src/content/portfolio/pf-system/pf-system.md": () => import('./pf-system_smS5s4Jm.mjs'),"/src/content/portfolio/pigpen-cipher/pigpen-cipher.md": () => import('./pigpen-cipher_Ca0jD0Eu.mjs'),"/src/content/portfolio/pinchis/pinchos.md": () => import('./pinchos_9g8GNcsI.mjs'),"/src/content/portfolio/redfellas/redfellas.md": () => import('./redfellas_BGh_YWAr.mjs'),"/src/content/portfolio/roofit/roofit.md": () => import('./roofit_Gq0nLE7W.mjs'),"/src/content/portfolio/sankt-lars-park/sankt-lars-park.md": () => import('./sankt-lars-park_EQcuJ1Vp.mjs'),"/src/content/portfolio/skaneleden/skaneleden.md": () => import('./skaneleden_DCddCvmz.mjs'),"/src/content/portfolio/skanska-landskap/skanska-landskap.md": () => import('./skanska-landskap_BXVmU0my.mjs'),"/src/content/portfolio/skanskahandboll/skanskahandboll.md": () => import('./skanskahandboll_Df9x6b3-.mjs'),"/src/content/portfolio/soctanter/soctanter.md": () => import('./soctanter_B8_oNqiL.mjs'),"/src/content/portfolio/stadshubbsalliansen/stadshubbsalliansen.md": () => import('./stadshubbsalliansen_DZMdTdag.mjs'),"/src/content/portfolio/telavox/telavox.md": () => import('./telavox_B4ITtiGb.mjs'),"/src/content/portfolio/telenor/telenor.md": () => import('./telenor_IvKEeP38.mjs'),"/src/content/portfolio/thefanclub/thefanclub.md": () => import('./thefanclub_BYMBLqEW.mjs'),"/src/content/portfolio/toolpool/toolpool.md": () => import('./toolpool_DEBxswwi.mjs'),"/src/content/portfolio/triwa/triwa.md": () => import('./triwa_DCjjKORZ.mjs'),"/src/content/portfolio/twilfit/twilfit.md": () => import('./twilfit_DMmjRJp4.mjs'),"/src/content/portfolio/unilever-food-solutions/unilever-food-solutions.md": () => import('./unilever-food-solutions_CpHKNVok.mjs'),"/src/content/portfolio/varagardar/varagardar.md": () => import('./varagardar_Cw8qx3FW.mjs'),"/src/content/portfolio/vivere/vivere.md": () => import('./vivere_Bk68f7OG.mjs'),"/src/content/portfolio/whitespace/whitespace.md": () => import('./whitespace_B8rmVCFs.mjs'),"/src/content/portfolio/wilfa/Wilfa.md": () => import('./Wilfa_Df0HJmUT.mjs'),"/src/content/portfolio/zest-hmd/zest-hmd.md": () => import('./zest-hmd_D4ZQOIKQ.mjs'),"/src/content/portfolio/zest/zest.md": () => import('./zest_DUFQbAri.mjs'),"/src/content/portfolio/zhowtime/zhowtime.md": () => import('./zhowtime_sTzH1Co6.mjs'),"/src/content/products/animator/animator.md": () => import('./animator_BsacB4Ks.mjs'),"/src/content/products/audio-tools/audio-tools.md": () => import('./audio-tools_B_jYV0Yt.mjs'),"/src/content/products/blockpress/blockpress.md": () => import('./blockpress_CG5bJBkR.mjs'),"/src/content/products/bookmark-library/bookmark-library.md": () => import('./bookmark-library_BOEcNjrV.mjs'),"/src/content/products/cyber-pet/cyber-pet.md": () => import('./cyber-pet_D4rL0AjS.mjs'),"/src/content/products/harlem-underworld/harlem-underworld.md": () => import('./harlem-underworld_DLMVr2FD.mjs'),"/src/content/products/herbal-ai/herbal-ai.md": () => import('./herbal-ai_Cg5fIj5w.mjs'),"/src/content/products/ritual-ai/ritual-ai.md": () => import('./ritual-ai_H9o4LJJd.mjs'),"/src/content/products/slack-points-bot/slack-points-bot.md": () => import('./slack-points-bot_uBtQ3sxS.mjs'),"/src/content/products/tracking-app/tracking-app.md": () => import('./tracking-app_DglaESTU.mjs'),"/src/content/products/vscode-console-remover/vscode-console-remover.md": () => import('./vscode-console-remover_BNlouNMe.mjs'),"/src/content/products/vscode-git-approvers/vscode-git-approvers.md": () => import('./vscode-git-approvers_B5nHmaGy.mjs'),"/src/content/products/vscode-px-to-tailwind/vscode-px-to-tailwind.md": () => import('./vscode-px-to-tailwind_cTApgOMh.mjs'),"/src/content/products/waverider/waverider.md": () => import('./waverider_Bj0WjlCk.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"bookmark-chaos-to-spring-boot-salvation":"/src/content/blog/bookmark-chaos-to-spring-boot-salvation/index.md","building-audio-tools-three-apps-one-passion":"/src/content/blog/building-audio-tools-three-apps-one-passion/index.md","building-animator-sprite-animation-tool":"/src/content/blog/building-animator-sprite-animation-tool/index.md","building-family-tracking-app-expo-supabase":"/src/content/blog/building-family-tracking-app-expo-supabase/index.md","building-modern-web-apps-with-astro-react":"/src/content/blog/building-modern-web-apps-with-astro-react/index.md","developer-personality-test":"/src/content/blog/developer-personality-test/index.md","from-automation-to-apps":"/src/content/blog/from-automation-to-apps/index.md","building-chillinvr-teleporting-to-my-brothers-trip":"/src/content/blog/building-chillinvr-teleporting-to-my-brothers-trip/index.md","generative-waves":"/src/content/blog/generative-waves/index.md","generative-art-circles":"/src/content/blog/generative-art-circles/index.md","getting-started-with-react-native":"/src/content/blog/getting-started-with-react-native/index.md","machine-learning-lessons-learned":"/src/content/blog/machine-learning-lessons-learned/index.md","music-production-tools-2022":"/src/content/blog/music-production-tools-2022/index.md","my-breakup-with-usestate":"/src/content/blog/my-breakup-with-usestate/index.md","my-first-machine-learning-project":"/src/content/blog/my-first-machine-learning-project/index.md","music-visualization-threejs":"/src/content/blog/music-visualization-threejs/index.md","my-fullstack-developer-journey":"/src/content/blog/my-fullstack-developer-journey/index.md","typescript-best-practices":"/src/content/blog/typescript-best-practices/index.md","react-19-killing-usememo-usecallback":"/src/content/blog/react-19-killing-usememo-usecallback/index.md","waverider-sunday-build":"/src/content/blog/waverider-sunday-build/index.md","why-agile-ai-coding-feels-kinda-broken":"/src/content/blog/why-agile-ai-coding-feels-kinda-broken/index.md","why-i-actually-really-like-my-em":"/src/content/blog/why-i-actually-really-like-my-em/index.md"}},"products":{"type":"content","entries":{"animator/animator":"/src/content/products/animator/animator.md","audio-tools/audio-tools":"/src/content/products/audio-tools/audio-tools.md","blockpress/blockpress":"/src/content/products/blockpress/blockpress.md","bookmark-library/bookmark-library":"/src/content/products/bookmark-library/bookmark-library.md","cyber-pet/cyber-pet":"/src/content/products/cyber-pet/cyber-pet.md","harlem-underworld/harlem-underworld":"/src/content/products/harlem-underworld/harlem-underworld.md","herbal-ai/herbal-ai":"/src/content/products/herbal-ai/herbal-ai.md","ritual-ai/ritual-ai":"/src/content/products/ritual-ai/ritual-ai.md","slack-points-bot/slack-points-bot":"/src/content/products/slack-points-bot/slack-points-bot.md","tracking-app/tracking-app":"/src/content/products/tracking-app/tracking-app.md","vscode-console-remover/vscode-console-remover":"/src/content/products/vscode-console-remover/vscode-console-remover.md","vscode-git-approvers/vscode-git-approvers":"/src/content/products/vscode-git-approvers/vscode-git-approvers.md","vscode-px-to-tailwind/vscode-px-to-tailwind":"/src/content/products/vscode-px-to-tailwind/vscode-px-to-tailwind.md","waverider/waverider":"/src/content/products/waverider/waverider.md"}},"portfolio":{"type":"content","entries":{"040-fm/040-fm":"/src/content/portfolio/040-fm/040-fm.md","alex-koll/alex-koll":"/src/content/portfolio/alex-koll/alex-koll.md","appleappen/appleappen":"/src/content/portfolio/appleappen/appleappen.md","battretillvaro/battretillvaro-se":"/src/content/portfolio/battretillvaro/battretillvaro-se.md","bilcleaniken/bilcleaniken":"/src/content/portfolio/bilcleaniken/bilcleaniken.md","bjornekulla/bjornekulla":"/src/content/portfolio/bjornekulla/bjornekulla.md","bra-energi/bra-energi":"/src/content/portfolio/bra-energi/bra-energi.md","bredband2/bredband2":"/src/content/portfolio/bredband2/Bredband2.md","bussemester/bussemester":"/src/content/portfolio/bussemester/bussemester.md","bym/bym":"/src/content/portfolio/bym/bym.md","carpings/carpings":"/src/content/portfolio/carpings/carpings.md","cecilia-bjork/cecilia-bjork":"/src/content/portfolio/cecilia-bjork/cecilia-bjork.md","clx-network/clx-network":"/src/content/portfolio/clx-network/clx-network.md","clever/clever":"/src/content/portfolio/clever/clever.md","cottex/cottex":"/src/content/portfolio/cottex/cottex.md","digital-matchningstjanst/digital-matchningstjanst":"/src/content/portfolio/digital-matchningstjanst/digital-matchningstjanst.md","flamman/flamman":"/src/content/portfolio/flamman/flamman.md","dosgardenias/dosgardenias":"/src/content/portfolio/dosgardenias/dosgardenias.md","folk-mat-moten/folk-mat-moten":"/src/content/portfolio/folk-mat-moten/folk-mat-moten.md","generative-circles/circles":"/src/content/portfolio/generative-circles/circles.md","guts-glory/guts-glory":"/src/content/portfolio/guts-glory/guts-glory.md","hallbarhetsredovisning/hallbarhetsredovisning":"/src/content/portfolio/hallbarhetsredovisning/hallbarhetsredovisning.md","holy-greens/holy-greens":"/src/content/portfolio/holy-greens/holy-greens.md","kammarkollegiet/kammarkollegiet":"/src/content/portfolio/kammarkollegiet/kammarkollegiet.md","kockenskamrater/kockenskamrater":"/src/content/portfolio/kockenskamrater/kockenskamrater.md","kompisklubben/kompisklubben":"/src/content/portfolio/KompisKlubben/KompisKlubben.md","kondomspexen/kondomspexen":"/src/content/portfolio/kondomspexen/kondomspexen.md","library-event-display/library-event-display":"/src/content/portfolio/library-event-display/library-event-display.md","ljusjakten/ljusjakten":"/src/content/portfolio/ljusjakten/ljusjakten.md","loof-foundation/loof-foundation":"/src/content/portfolio/loof-foundation/loof-foundation.md","lundaspelen/lundaspelen":"/src/content/portfolio/lundaspelen/lundaspelen.md","lugi/lugi":"/src/content/portfolio/lugi/lugi.md","malmo-saluhall/malmo-saluhall":"/src/content/portfolio/malmo-saluhall/malmo-saluhall.md","mekonomen/mekonomen":"/src/content/portfolio/mekonomen/mekonomen.md","mekonomen-group/mekonomen-group":"/src/content/portfolio/mekonomen-group/mekonomen-group.md","missmary/missmary":"/src/content/portfolio/missmary/missmary.md","motesplatsip/motesplatsip":"/src/content/portfolio/motesplatsip/motesplatsip.md","muslimix/muslimix":"/src/content/portfolio/muslimix/muslimix.md","ngd/ngd":"/src/content/portfolio/ngd/ngd.md","noaab/noaab":"/src/content/portfolio/noaab/noaab.md","noxo/noxo":"/src/content/portfolio/noxo/noxo.md","pf-system/pf-system":"/src/content/portfolio/pf-system/pf-system.md","pigpen-cipher/pigpen-cipher":"/src/content/portfolio/pigpen-cipher/pigpen-cipher.md","pinchis/pinchos":"/src/content/portfolio/pinchis/pinchos.md","redfellas/redfellas":"/src/content/portfolio/redfellas/redfellas.md","roofit/roofit":"/src/content/portfolio/roofit/roofit.md","sankt-lars-park/sankt-lars-park":"/src/content/portfolio/sankt-lars-park/sankt-lars-park.md","skaneleden/skaneleden":"/src/content/portfolio/skaneleden/skaneleden.md","skanska-landskap/skanska-landskap":"/src/content/portfolio/skanska-landskap/skanska-landskap.md","skanskahandboll/skanskahandboll":"/src/content/portfolio/skanskahandboll/skanskahandboll.md","soctanter/soctanter":"/src/content/portfolio/soctanter/soctanter.md","stadshubbsalliansen/stadshubbsalliansen":"/src/content/portfolio/stadshubbsalliansen/stadshubbsalliansen.md","telavox/telavox":"/src/content/portfolio/telavox/telavox.md","telenor/telenor":"/src/content/portfolio/telenor/telenor.md","thefanclub/thefanclub":"/src/content/portfolio/thefanclub/thefanclub.md","toolpool/toolpool":"/src/content/portfolio/toolpool/toolpool.md","triwa/triwa":"/src/content/portfolio/triwa/triwa.md","twilfit/twilfit":"/src/content/portfolio/twilfit/twilfit.md","unilever-food-solutions/unilever-food-solutions":"/src/content/portfolio/unilever-food-solutions/unilever-food-solutions.md","varagardar/varagardar":"/src/content/portfolio/varagardar/varagardar.md","vivere/vivere":"/src/content/portfolio/vivere/vivere.md","whitespace/whitespace":"/src/content/portfolio/whitespace/whitespace.md","wilfa/wilfa":"/src/content/portfolio/wilfa/Wilfa.md","zest/zest":"/src/content/portfolio/zest/zest.md","zest-hmd/zest-hmd":"/src/content/portfolio/zest-hmd/zest-hmd.md","zhowtime/zhowtime":"/src/content/portfolio/zhowtime/zhowtime.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/bookmark-chaos-to-spring-boot-salvation/index.md": () => import('./index_BPBVkaKQ.mjs'),"/src/content/blog/building-animator-sprite-animation-tool/index.md": () => import('./index_DDK9Se7I.mjs'),"/src/content/blog/building-audio-tools-three-apps-one-passion/index.md": () => import('./index_Ce1keHyD.mjs'),"/src/content/blog/building-chillinvr-teleporting-to-my-brothers-trip/index.md": () => import('./index_BlZzTcOJ.mjs'),"/src/content/blog/building-family-tracking-app-expo-supabase/index.md": () => import('./index_r8lnVPkR.mjs'),"/src/content/blog/building-modern-web-apps-with-astro-react/index.md": () => import('./index_Cqc0dgBI.mjs'),"/src/content/blog/developer-personality-test/index.md": () => import('./index_BtG9l50r.mjs'),"/src/content/blog/from-automation-to-apps/index.md": () => import('./index_COD2mkK-.mjs'),"/src/content/blog/generative-art-circles/index.md": () => import('./index_B_k56iIj.mjs'),"/src/content/blog/generative-waves/index.md": () => import('./index_DrVEttXj.mjs'),"/src/content/blog/getting-started-with-react-native/index.md": () => import('./index_DPjPEGwT.mjs'),"/src/content/blog/machine-learning-lessons-learned/index.md": () => import('./index_BsCu2SEF.mjs'),"/src/content/blog/music-production-tools-2022/index.md": () => import('./index_C7aYrC7T.mjs'),"/src/content/blog/music-visualization-threejs/index.md": () => import('./index_DzZxD3Og.mjs'),"/src/content/blog/my-breakup-with-usestate/index.md": () => import('./index_ugpUOBcI.mjs'),"/src/content/blog/my-first-machine-learning-project/index.md": () => import('./index_DclclQSE.mjs'),"/src/content/blog/my-fullstack-developer-journey/index.md": () => import('./index_D0jqrXtb.mjs'),"/src/content/blog/react-19-killing-usememo-usecallback/index.md": () => import('./index_BfOdpvQn.mjs'),"/src/content/blog/typescript-best-practices/index.md": () => import('./index_CSqU2VlY.mjs'),"/src/content/blog/waverider-sunday-build/index.md": () => import('./index_D36HiPL5.mjs'),"/src/content/blog/why-agile-ai-coding-feels-kinda-broken/index.md": () => import('./index_DN21DOoM.mjs'),"/src/content/blog/why-i-actually-really-like-my-em/index.md": () => import('./index_D_e3AL9w.mjs'),"/src/content/portfolio/040-fm/040-fm.md": () => import('./040-fm_BbzjrRtR.mjs'),"/src/content/portfolio/KompisKlubben/KompisKlubben.md": () => import('./KompisKlubben_LZLYRBNB.mjs'),"/src/content/portfolio/alex-koll/alex-koll.md": () => import('./alex-koll_DPC1vqwP.mjs'),"/src/content/portfolio/appleappen/appleappen.md": () => import('./appleappen_Hj1w8_zh.mjs'),"/src/content/portfolio/battretillvaro/battretillvaro-se.md": () => import('./battretillvaro-se_BYZyj3iD.mjs'),"/src/content/portfolio/bilcleaniken/bilcleaniken.md": () => import('./bilcleaniken_DoUuA6IT.mjs'),"/src/content/portfolio/bjornekulla/bjornekulla.md": () => import('./bjornekulla_BATqtC-7.mjs'),"/src/content/portfolio/bra-energi/bra-energi.md": () => import('./bra-energi_CJYEQXCq.mjs'),"/src/content/portfolio/bredband2/Bredband2.md": () => import('./Bredband2_C_nIPsjc.mjs'),"/src/content/portfolio/bussemester/bussemester.md": () => import('./bussemester_CMIrAlEp.mjs'),"/src/content/portfolio/bym/bym.md": () => import('./bym_Cgik9KEW.mjs'),"/src/content/portfolio/carpings/carpings.md": () => import('./carpings_Biob0NCK.mjs'),"/src/content/portfolio/cecilia-bjork/cecilia-bjork.md": () => import('./cecilia-bjork_Dm9JsIUu.mjs'),"/src/content/portfolio/clever/clever.md": () => import('./clever_Dyuf6Dnh.mjs'),"/src/content/portfolio/clx-network/clx-network.md": () => import('./clx-network_Dq99Wied.mjs'),"/src/content/portfolio/cottex/cottex.md": () => import('./cottex_aNEfy0qi.mjs'),"/src/content/portfolio/digital-matchningstjanst/digital-matchningstjanst.md": () => import('./digital-matchningstjanst_BPSvCl_5.mjs'),"/src/content/portfolio/dosgardenias/dosgardenias.md": () => import('./dosgardenias_Dychmkb0.mjs'),"/src/content/portfolio/flamman/flamman.md": () => import('./flamman_BPqNHtAD.mjs'),"/src/content/portfolio/folk-mat-moten/folk-mat-moten.md": () => import('./folk-mat-moten_CpqAy8rY.mjs'),"/src/content/portfolio/generative-circles/circles.md": () => import('./circles_BtXbksln.mjs'),"/src/content/portfolio/guts-glory/guts-glory.md": () => import('./guts-glory_CWlwWKBr.mjs'),"/src/content/portfolio/hallbarhetsredovisning/hallbarhetsredovisning.md": () => import('./hallbarhetsredovisning_DaEpf-It.mjs'),"/src/content/portfolio/holy-greens/holy-greens.md": () => import('./holy-greens_DZ3WNSqi.mjs'),"/src/content/portfolio/kammarkollegiet/kammarkollegiet.md": () => import('./kammarkollegiet_BT7VTnRm.mjs'),"/src/content/portfolio/kockenskamrater/kockenskamrater.md": () => import('./kockenskamrater_DpUlJhAg.mjs'),"/src/content/portfolio/kondomspexen/kondomspexen.md": () => import('./kondomspexen_ah8rmVPj.mjs'),"/src/content/portfolio/library-event-display/library-event-display.md": () => import('./library-event-display_pIh56Yur.mjs'),"/src/content/portfolio/ljusjakten/ljusjakten.md": () => import('./ljusjakten_1MVlGrqW.mjs'),"/src/content/portfolio/loof-foundation/loof-foundation.md": () => import('./loof-foundation_KjehLJpN.mjs'),"/src/content/portfolio/lugi/lugi.md": () => import('./lugi_CgRwjbU9.mjs'),"/src/content/portfolio/lundaspelen/lundaspelen.md": () => import('./lundaspelen_COMfs07C.mjs'),"/src/content/portfolio/malmo-saluhall/malmo-saluhall.md": () => import('./malmo-saluhall_CSOvRzBf.mjs'),"/src/content/portfolio/mekonomen-group/mekonomen-group.md": () => import('./mekonomen-group_Co6PoXmg.mjs'),"/src/content/portfolio/mekonomen/mekonomen.md": () => import('./mekonomen_C87h2ZuN.mjs'),"/src/content/portfolio/missmary/missmary.md": () => import('./missmary_Dnb9IRnv.mjs'),"/src/content/portfolio/motesplatsip/motesplatsip.md": () => import('./motesplatsip_5mNNsCSQ.mjs'),"/src/content/portfolio/muslimix/muslimix.md": () => import('./muslimix_9X-Gthqq.mjs'),"/src/content/portfolio/ngd/ngd.md": () => import('./ngd_DXtSxJVD.mjs'),"/src/content/portfolio/noaab/noaab.md": () => import('./noaab_Doo_oniS.mjs'),"/src/content/portfolio/noxo/noxo.md": () => import('./noxo_DZbI0tzg.mjs'),"/src/content/portfolio/pf-system/pf-system.md": () => import('./pf-system_CC56RPXf.mjs'),"/src/content/portfolio/pigpen-cipher/pigpen-cipher.md": () => import('./pigpen-cipher_GHuhruZH.mjs'),"/src/content/portfolio/pinchis/pinchos.md": () => import('./pinchos_B1FWY7hb.mjs'),"/src/content/portfolio/redfellas/redfellas.md": () => import('./redfellas_BJvXhu3d.mjs'),"/src/content/portfolio/roofit/roofit.md": () => import('./roofit_DEgO1WMU.mjs'),"/src/content/portfolio/sankt-lars-park/sankt-lars-park.md": () => import('./sankt-lars-park_BA3L6bdG.mjs'),"/src/content/portfolio/skaneleden/skaneleden.md": () => import('./skaneleden_CeLJiHxT.mjs'),"/src/content/portfolio/skanska-landskap/skanska-landskap.md": () => import('./skanska-landskap_CmlcNLQ_.mjs'),"/src/content/portfolio/skanskahandboll/skanskahandboll.md": () => import('./skanskahandboll_DI_BZvSa.mjs'),"/src/content/portfolio/soctanter/soctanter.md": () => import('./soctanter_DRg-uwQL.mjs'),"/src/content/portfolio/stadshubbsalliansen/stadshubbsalliansen.md": () => import('./stadshubbsalliansen_Zhwr8Oz-.mjs'),"/src/content/portfolio/telavox/telavox.md": () => import('./telavox_BinLVY1h.mjs'),"/src/content/portfolio/telenor/telenor.md": () => import('./telenor_My1OnK4J.mjs'),"/src/content/portfolio/thefanclub/thefanclub.md": () => import('./thefanclub_DXf7CV9S.mjs'),"/src/content/portfolio/toolpool/toolpool.md": () => import('./toolpool_g-DgJxs1.mjs'),"/src/content/portfolio/triwa/triwa.md": () => import('./triwa_DgDl2_TB.mjs'),"/src/content/portfolio/twilfit/twilfit.md": () => import('./twilfit_CMict53q.mjs'),"/src/content/portfolio/unilever-food-solutions/unilever-food-solutions.md": () => import('./unilever-food-solutions_DEjd0wgQ.mjs'),"/src/content/portfolio/varagardar/varagardar.md": () => import('./varagardar_C2eGZw8x.mjs'),"/src/content/portfolio/vivere/vivere.md": () => import('./vivere_DAOJWH8I.mjs'),"/src/content/portfolio/whitespace/whitespace.md": () => import('./whitespace_CfgmG0Fz.mjs'),"/src/content/portfolio/wilfa/Wilfa.md": () => import('./Wilfa__MozLniR.mjs'),"/src/content/portfolio/zest-hmd/zest-hmd.md": () => import('./zest-hmd_BjPWHRIj.mjs'),"/src/content/portfolio/zest/zest.md": () => import('./zest_DbJZFADC.mjs'),"/src/content/portfolio/zhowtime/zhowtime.md": () => import('./zhowtime_0WuqxP7e.mjs'),"/src/content/products/animator/animator.md": () => import('./animator_B9je5-hd.mjs'),"/src/content/products/audio-tools/audio-tools.md": () => import('./audio-tools_Cw84DAE6.mjs'),"/src/content/products/blockpress/blockpress.md": () => import('./blockpress_3vpHxlkn.mjs'),"/src/content/products/bookmark-library/bookmark-library.md": () => import('./bookmark-library_C-mnCOKu.mjs'),"/src/content/products/cyber-pet/cyber-pet.md": () => import('./cyber-pet_BpNsu0fj.mjs'),"/src/content/products/harlem-underworld/harlem-underworld.md": () => import('./harlem-underworld_CspQOaPh.mjs'),"/src/content/products/herbal-ai/herbal-ai.md": () => import('./herbal-ai_BG9VsinE.mjs'),"/src/content/products/ritual-ai/ritual-ai.md": () => import('./ritual-ai_PMePwzK8.mjs'),"/src/content/products/slack-points-bot/slack-points-bot.md": () => import('./slack-points-bot_nh5tRfHF.mjs'),"/src/content/products/tracking-app/tracking-app.md": () => import('./tracking-app_BoN043ZH.mjs'),"/src/content/products/vscode-console-remover/vscode-console-remover.md": () => import('./vscode-console-remover_5BphDO-d.mjs'),"/src/content/products/vscode-git-approvers/vscode-git-approvers.md": () => import('./vscode-git-approvers_Bc_I7LUc.mjs'),"/src/content/products/vscode-px-to-tailwind/vscode-px-to-tailwind.md": () => import('./vscode-px-to-tailwind_Df7iCZLK.mjs'),"/src/content/products/waverider/waverider.md": () => import('./waverider_B9-PZbw5.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getPortfolioData = () => {
  return portfolioData;
};
const getPortfolioItems = async () => {
  const portfolioEntries = await getCollection("portfolio");
  return portfolioEntries.map((entry) => ({
    ...entry.data,
    slug: entry.slug,
    background_image: entry.data.background_image,
    logo: entry.data.logo,
    bilder: entry.data.images,
    content: entry
  }));
};
const getProductItems = async () => {
  const productEntries = await getCollection("products");
  return productEntries.map((entry) => ({
    ...entry.data,
    slug: entry.slug,
    background_image: entry.data.background_image,
    logo: entry.data.logo,
    bilder: entry.data.images,
    content: entry
  }));
};
const getBlogPosts = async () => {
  const blogEntries = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  return blogEntries.map((entry) => ({
    ...entry.data,
    slug: entry.slug,
    content: entry
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
const calculateYearsOfExperience = (duration) => {
  const [startYear, endYear] = duration.split("-").map((year) => parseInt(year));
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const actualEndYear = endYear <= currentYear ? endYear : currentYear;
  return actualEndYear - startYear;
};
const TECH_NAME_MAPPING = {
  // Front-end stack mappings
  React: "ReactJS",
  Gatsby: "Gatsby",
  "Next.js": "Next.js",
  TypeScript: "TypeScript",
  Sass: "Sass",
  // Not in timeline
  // Backend stack mappings
  "Node.js": "Node.js",
  PHP: "PHP",
  "Ruby on Rails": "Ruby on Rails",
  "Rest API": "Rest API",
  // Not in timeline
  GraphQL: "GraphQL",
  // Database stack mappings
  MySQL: "MySQL",
  PostgreSQL: "PostgreSQL",
  MongoDB: "MongoDB",
  // Not in timeline
  Redis: "Redis",
  // Not in timeline
  Elasticsearch: "Elasticsearch",
  // Not in timeline
  // Design stack mappings
  UI: "UX Design",
  // Maps to UX Design in timeline
  UX: "UX Design",
  "Adobe XD": "Adobe XD",
  Photoshop: "Photoshop",
  "Motion Graphics": "Motion Graphics",
  // Not in timeline
  // Cloud stack mappings (most not in timeline)
  "AWS API Gateway": "AWS",
  Lambda: "AWS",
  DynamoDB: "AWS",
  S3: "AWS",
  CloudFront: "AWS",
  // DevOps stack mappings (most not in timeline)
  Linux: "Linux",
  // Not in timeline
  Docker: "Docker",
  // Not in timeline
  Nginx: "Nginx",
  // Not in timeline
  "Shell Script": "Shell Script",
  // Not in timeline
  "Github Actions": "Github Actions",
  // Not in timeline
  // Apps stack mappings
  "Electron js": "Electron JS",
  Typescript: "TypeScript",
  Tailwind: "Tailwind",
  Vite: "Vite",
  // Not in timeline
  "React Native": "React Native",
  // Not in timeline
  // Multimedia stack mappings
  "Reason Studios": "Reason Studios",
  // Not in timeline
  Cubase: "Cubase",
  // Not in timeline
  FFmpeg: "FFmpeg",
  // Not in timeline
  "After Effects": "After Effects"
  // Not in timeline
};
const calculateStatus = (duration) => {
  const [startYear, endYear] = duration.split("-").map((year) => parseInt(year));
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  if (endYear > currentYear) {
    return 10;
  } else if (endYear === currentYear) {
    return 7;
  } else if (currentYear - endYear <= 2) {
    return 5;
  } else {
    return 2;
  }
};
const findTimelineMatch = (stackLabel) => {
  const timelineData = portfolioData.timeline;
  const mappedName = TECH_NAME_MAPPING[stackLabel];
  if (mappedName) {
    const match = timelineData.find((item) => item.name === mappedName);
    if (match) {
      return {
        ...match,
        yearsOfExperience: calculateYearsOfExperience(match.duration),
        stillActive: calculateStatus(match.duration)
      };
    }
  }
  const exactMatch = timelineData.find((item) => item.name === stackLabel);
  if (exactMatch) {
    return {
      ...exactMatch,
      yearsOfExperience: calculateYearsOfExperience(exactMatch.duration),
      stillActive: calculateStatus(exactMatch.duration)
    };
  }
  const partialMatch = timelineData.find(
    (item) => item.name.toLowerCase().includes(stackLabel.toLowerCase()) || stackLabel.toLowerCase().includes(item.name.toLowerCase())
  );
  if (partialMatch) {
    return {
      ...partialMatch,
      yearsOfExperience: calculateYearsOfExperience(partialMatch.duration),
      stillActive: calculateStatus(partialMatch.duration)
    };
  }
  return null;
};
const getRoles = () => {
  return portfolioData.roles;
};

const $$Astro$1 = createAstro("https://ehsan-pourhadi.com/");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = currentPath === href || href !== "/" && currentPath.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-game-nav-link${addAttribute(href, "data-href")}${addAttribute([
    "text font-medium transition-colors hover:text-primary-600",
    isActive ? "text-primary-600" : "text-gray-600 dark:text-gray-300"
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/nav/NavLink.astro", void 0);

const $$MainNav = createComponent(async ($$result, $$props, $$slots) => {
  const { navigation } = await getPortfolioData();
  return renderTemplate`${maybeRenderHead()}<div class="hidden items-center gap-6 font-basement md:flex"> ${navigation.main.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href }, { "default": ($$result2) => renderTemplate`${link.text}` })}`)} </div>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/nav/MainNav.astro", void 0);

const Toggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggleClick = () => {
    setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      id: "themeToggle",
      className: "fixed right-5 top-3 z-20 rounded-full bg-gray-200 p-2 dark:bg-neutral-800",
      onClick: handleToggleClick,
      children: [
        /* @__PURE__ */ jsx("svg", { width: "24", height: "24", className: "hidden dark:block", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
          }
        ) }),
        /* @__PURE__ */ jsx("svg", { width: "24", height: "24", className: "block dark:hidden", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"
          }
        ) })
      ]
    }
  );
};

const Button = ({
  href,
  text,
  className,
  target = "_self",
  variant = "primary"
}) => {
  const getColorClasses = () => {
    if (variant === "secondary") {
      return "border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:shadow-secondary-500 active:border-secondary-100";
    }
    return "border-primary-600 text-primary-600 hover:bg-primary-600 hover:shadow-primary-500 active:border-primary-100";
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: twMerge(
        `link-border btn font-tomorrow group relative inline-block rounded-lg border px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all hover:text-white hover:shadow-sm ${getColorClasses()}`,
        className
      ),
      target,
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center overflow-hidden px-4 py-2 font-basement", children: /* @__PURE__ */ jsxs("div", { className: "relative z-20", children: [
          /* @__PURE__ */ jsx("div", { className: "duration-[10s] ease-[cubic-bezier(0.19,1,0.22,1)] transform transition-transform group-hover:-translate-y-10", children: text }),
          /* @__PURE__ */ jsx("div", { className: "duration-[3000ms] absolute left-0 top-10 transition-all group-hover:top-0", children: text })
        ] }) }),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: { "--bg": `var(--${variant})` },
            className: "glitch-effect absolute inset-0 z-10 hidden group-hover:block"
          }
        )
      ]
    }
  );
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-neutral-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    children,
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] })
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-neutral-950 dark:text-neutral-50", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const GAME_VERSION = 1;
const GAME_STORAGE_KEY = "astro-game-save-v1";

const unlockCosts = {
  "/": 0,
  "/portfolio": 60,
  "/skills": 50,
  "/services": 50,
  "/about": 70,
  "/contact": 90,
  "/blog": 110,
  "/music": 100,
  "/cv": 80,
  "/life": 0
};
const unlockTargets = {
  "unlock-portfolio": "/portfolio",
  "unlock-skills": "/skills",
  "unlock-services": "/services",
  "unlock-about": "/about",
  "unlock-contact": "/contact",
  "unlock-blog": "/blog",
  "unlock-music": "/music",
  "unlock-cv": "/cv",
  "click-power": null,
  "combo-extender": null,
  "auto-clicker": null
};
const buildShop = (state) => [
  {
    id: "unlock-portfolio",
    title: "Unlock Work",
    description: "Unlock the Work page in the header.",
    cost: () => unlockCosts["/portfolio"],
    maxLevel: 1,
    type: "unlock",
    target: "/portfolio"
  },
  {
    id: "unlock-skills",
    title: "Unlock Skills",
    description: "Unlock the Skills page in the header.",
    cost: () => unlockCosts["/skills"],
    maxLevel: 1,
    type: "unlock",
    target: "/skills"
  },
  {
    id: "unlock-services",
    title: "Unlock Services",
    description: "Unlock the Services page in the header.",
    cost: () => unlockCosts["/services"],
    maxLevel: 1,
    type: "unlock",
    target: "/services"
  },
  {
    id: "unlock-about",
    title: "Unlock About",
    description: "Unlock the About page in the header.",
    cost: () => unlockCosts["/about"],
    maxLevel: 1,
    type: "unlock",
    target: "/about"
  },
  {
    id: "unlock-contact",
    title: "Unlock Contact",
    description: "Unlock the Contact page in the header.",
    cost: () => unlockCosts["/contact"],
    maxLevel: 1,
    type: "unlock",
    target: "/contact"
  },
  {
    id: "unlock-blog",
    title: "Unlock Blog",
    description: "Unlock the Blog page in the header.",
    cost: () => unlockCosts["/blog"],
    maxLevel: 1,
    type: "unlock",
    target: "/blog"
  },
  {
    id: "unlock-music",
    title: "Unlock Music",
    description: "Unlock the Music page in the header.",
    cost: () => unlockCosts["/music"],
    maxLevel: 1,
    type: "unlock",
    target: "/music"
  },
  {
    id: "unlock-cv",
    title: "Unlock Resume",
    description: "Unlock the Resume page in the header.",
    cost: () => unlockCosts["/cv"],
    maxLevel: 1,
    type: "unlock",
    target: "/cv"
  },
  {
    id: "click-power",
    title: "Click Power",
    description: "Earn more coins per click.",
    cost: () => 20 + state.clickPower * 15,
    type: "upgrade"
  },
  {
    id: "combo-extender",
    title: "Combo Extender",
    description: "Lengthen the combo window.",
    cost: () => 25 + Math.max(0, (state.combo.windowMs - 2e3) / 200) * 20,
    type: "utility"
  },
  {
    id: "auto-clicker",
    title: "Auto-Clicker",
    description: "Generate passive coins over time.",
    cost: () => 50 + state.autoClicker.level * 40,
    maxLevel: 10,
    type: "utility"
  }
];
const getItemDefinition = (state, id) => buildShop(state).find((item) => item.id === id);
const applyPurchase = (state, id) => {
  const def = getItemDefinition(state, id);
  if (!def) return { next: state, success: false, reason: "Item not found" };
  const cost = def.cost(state);
  if (state.coins < cost) return { next: state, success: false, reason: "Not enough coins" };
  if (def.maxLevel && id === "auto-clicker" && state.autoClicker.level >= def.maxLevel) {
    return { next: state, success: false, reason: "Max level reached" };
  }
  let next = { ...state, coins: state.coins - cost };
  const target = unlockTargets[id];
  switch (id) {
    case "click-power": {
      next.clickPower += 1;
      break;
    }
    case "combo-extender": {
      next.combo = { ...next.combo, windowMs: next.combo.windowMs + 200 };
      break;
    }
    case "auto-clicker": {
      next.autoClicker = { ...next.autoClicker, level: next.autoClicker.level + 1 };
      break;
    }
    default: {
      if (target) {
        if (next.unlocks[target])
          return { next: state, success: false, reason: "Already unlocked" };
        next.unlocks = { ...next.unlocks, [target]: true };
      }
      break;
    }
  }
  return { next, success: true };
};

const MAX_MULTIPLIER = 5;
const nextCombo = (combo, now) => {
  const withinWindow = combo.lastClickAt ? now - combo.lastClickAt <= combo.windowMs : false;
  const streak = withinWindow ? combo.streak + 1 : 1;
  const multiplier = Math.min(1 + streak * 0.1, MAX_MULTIPLIER);
  return {
    ...combo,
    streak,
    multiplier,
    lastClickAt: now,
    decayEndsAt: now + combo.windowMs
  };
};
const decayCombo = (combo, now) => {
  if (!combo.lastClickAt || !combo.decayEndsAt) return combo;
  if (now <= combo.decayEndsAt) return combo;
  return {
    ...combo,
    streak: 0,
    multiplier: 1,
    lastClickAt: null,
    decayEndsAt: null
  };
};

const achievementDefinitions = [
  {
    id: "first-click",
    title: "First Click",
    description: "Earn your first coin.",
    condition: (state) => state.totalClicks >= 1
  },
  {
    id: "shopper",
    title: "Shopper",
    description: "Make your first purchase.",
    condition: (state) => state.lifetimeCoins > state.coins
  },
  {
    id: "link-liberator",
    title: "Link Liberator",
    description: "Unlock three header links.",
    condition: (state) => Object.values(state.unlocks).filter(Boolean).length >= 4
    // includes home
  },
  {
    id: "combo-master",
    title: "Combo Master",
    description: "Reach a 5x combo multiplier.",
    condition: (state) => state.combo.multiplier >= 5
  },
  {
    id: "afk-tycoon",
    title: "AFK Tycoon",
    description: "Earn 1,000 lifetime coins.",
    condition: (state) => state.lifetimeCoins >= 1e3
  },
  {
    id: "life-unlocked",
    title: "Life Unlocked",
    description: "Reach Level 10.",
    condition: (state) => state.playerLevel >= 10
  }
];
const findNewAchievements = (state) => {
  return achievementDefinitions.filter(
    (def) => !state.achievements[def.id]?.unlocked && def.condition(state)
  );
};
const markAchievements = (state, ids) => {
  const next = { ...state, achievements: { ...state.achievements } };
  const now = Date.now();
  ids.forEach((id) => {
    next.achievements[id] = { unlocked: true, unlockedAt: now };
  });
  return next;
};

const defaultUnlocks = {
  "/": true,
  "/portfolio": false,
  "/skills": false,
  "/services": false,
  "/about": false,
  "/contact": false,
  "/blog": false,
  "/music": false,
  "/cv": false,
  "/life": false
};
const achievementIds = [
  "first-click",
  "shopper",
  "link-liberator",
  "combo-master",
  "afk-tycoon",
  "life-unlocked"
];
const makeAchievements = () => achievementIds.reduce(
  (acc, id) => {
    acc[id] = { unlocked: false, unlockedAt: null };
    return acc;
  },
  {}
);
const createInitialState = () => ({
  mode: "off",
  coins: 0,
  lifetimeCoins: 0,
  totalClicks: 0,
  clickPower: 1,
  combo: {
    multiplier: 1,
    streak: 0,
    lastClickAt: null,
    windowMs: 2e3,
    decayEndsAt: null
  },
  autoClicker: {
    level: 0,
    intervalMs: 2e3,
    amountPerTick: 1,
    lastTickAt: null,
    running: false
  },
  unlocks: { ...defaultUnlocks },
  achievements: makeAchievements(),
  playerLevel: 1,
  playerXp: 0,
  showHUD: false,
  shopOpen: false,
  toasts: [],
  version: GAME_VERSION
});
const STORAGE_KEY = GAME_STORAGE_KEY;
const migrateState = (raw) => {
  if (!raw || typeof raw !== "object") return createInitialState();
  const state = raw;
  return {
    ...createInitialState(),
    ...state,
    combo: { ...createInitialState().combo, ...state.combo },
    autoClicker: { ...createInitialState().autoClicker, ...state.autoClicker },
    unlocks: { ...defaultUnlocks, ...state.unlocks },
    achievements: { ...makeAchievements(), ...state.achievements },
    mode: "off",
    showHUD: false,
    shopOpen: false,
    version: GAME_VERSION
  };
};

const computeLevel = (xp) => {
  const level = Math.max(1, Math.floor(xp / 150) + 1);
  return { level, xp };
};
const pushToasts = (state, items) => {
  const existing = state.toasts.slice(-4);
  return [...existing, ...items].slice(-5);
};
const useGameStore = create()(
  persist(
    (set, get) => ({
      ...createInitialState(),
      enableGame: () => {
        set(
          (state) => state.mode === "active" ? state : { ...state, mode: "active", showHUD: true }
        );
      },
      exitGame: () => {
        set((state) => ({
          ...state,
          mode: "off",
          showHUD: false,
          shopOpen: false,
          combo: {
            ...state.combo,
            streak: 0,
            multiplier: 1,
            decayEndsAt: null,
            lastClickAt: null
          },
          autoClicker: {
            ...state.autoClicker,
            running: false,
            lastTickAt: null
          }
        }));
      },
      addClick: (source = "manual") => {
        const now = Date.now();
        set((state) => {
          const combo = nextCombo(state.combo, now);
          const gain = Math.max(1, state.clickPower) * combo.multiplier;
          const coins = state.coins + gain;
          const lifetimeCoins = state.lifetimeCoins + gain;
          const totalClicks = state.totalClicks + 1;
          const levelInfo = computeLevel(lifetimeCoins);
          const unlocks = { ...state.unlocks };
          if (levelInfo.level >= 10) {
            unlocks["/life"] = true;
          }
          let next = {
            ...state,
            coins,
            lifetimeCoins,
            totalClicks,
            combo,
            playerLevel: levelInfo.level,
            playerXp: levelInfo.xp,
            unlocks
          };
          const fresh = findNewAchievements(next);
          if (fresh.length) {
            const updated = markAchievements(
              next,
              fresh.map((f) => f.id)
            );
            return {
              ...next,
              ...updated,
              toasts: pushToasts(
                state,
                fresh.map((f) => ({
                  id: `${f.id}-${now}`,
                  title: f.title,
                  message: f.description,
                  createdAt: now
                }))
              )
            };
          }
          return next;
        });
      },
      addCoins: (amount) => {
        if (!Number.isFinite(amount)) return;
        set((state) => {
          const coins = state.coins + amount;
          const lifetimeCoins = state.lifetimeCoins + amount;
          const levelInfo = computeLevel(lifetimeCoins);
          const unlocks = { ...state.unlocks };
          if (levelInfo.level >= 10) {
            unlocks["/life"] = true;
          }
          let next = {
            ...state,
            coins,
            lifetimeCoins,
            playerLevel: levelInfo.level,
            playerXp: levelInfo.xp,
            unlocks
          };
          const fresh = findNewAchievements(next);
          if (fresh.length) {
            const updated = markAchievements(
              next,
              fresh.map((f) => f.id)
            );
            return {
              ...next,
              ...updated,
              toasts: pushToasts(
                state,
                fresh.map((f) => ({
                  id: `${f.id}-${Date.now()}`,
                  title: f.title,
                  message: f.description,
                  createdAt: Date.now()
                }))
              )
            };
          }
          return next;
        });
      },
      purchaseItem: (id) => {
        set((state) => {
          const { next, success } = applyPurchase(state, id);
          if (!success) return state;
          const fresh = findNewAchievements(next);
          if (fresh.length) {
            const updated = markAchievements(
              next,
              fresh.map((f) => f.id)
            );
            return {
              ...next,
              ...updated,
              toasts: pushToasts(
                state,
                fresh.map((f) => ({
                  id: `${f.id}-${Date.now()}`,
                  title: f.title,
                  message: f.description,
                  createdAt: Date.now()
                }))
              )
            };
          }
          return next;
        });
      },
      toggleShop: (open) => set((state) => ({
        ...state,
        shopOpen: typeof open === "boolean" ? open : !state.shopOpen
      })),
      ackToast: (id) => set((state) => ({ ...state, toasts: state.toasts.filter((t) => t.id !== id) })),
      setHUD: (visible) => set((state) => ({ ...state, showHUD: visible }))
    }),
    {
      name: STORAGE_KEY,
      version: 1,
      merge: (persisted, current) => {
        const migrated = migrateState(persisted ?? current);
        return { ...current, ...migrated };
      }
    }
  )
);

const getAutoInterval = (auto) => {
  const step = Math.max(400, auto.intervalMs - auto.level * 75);
  return step;
};

const useGameEngine = () => {
  const mode = useGameStore((s) => s.mode);
  const auto = useGameStore((s) => s.autoClicker);
  const addClick = useGameStore((s) => s.addClick);
  useEffect(() => {
    if (mode !== "active") return;
    const id = setInterval(() => {
      useGameStore.setState((state) => ({
        ...state,
        combo: decayCombo(state.combo, Date.now())
      }));
    }, 300);
    return () => clearInterval(id);
  }, [mode]);
  useEffect(() => {
    if (mode !== "active" || auto.level <= 0) return;
    const tick = () => addClick("auto");
    const id = setInterval(tick, getAutoInterval(auto));
    return () => clearInterval(id);
  }, [mode, auto.level, auto.intervalMs, addClick]);
};

const navigationMain = [
  { href: "/", text: "Home" },
  { href: "/portfolio", text: "Work" },
  { href: "/skills", text: "Skills" },
  { href: "/services", text: "Services" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/life", text: "Life" }
];
const MenuItemComponent = ({
  item,
  depth = 0,
  locked = false
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  if (item.submenu) {
    return /* @__PURE__ */ jsxs(Collapsible, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        "button",
        {
          className: cn(
            "hover:text-primary flex w-full items-center justify-between py-2 text-lg font-medium transition-colors",
            depth > 0 && "pl-4"
          ),
          children: [
            item.text,
            isOpen ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(CollapsibleContent, { children: item.submenu.map((subItem) => /* @__PURE__ */ jsx(MenuItemComponent, { item: subItem, depth: depth + 1 }, subItem.title)) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: item.href,
      onClick: (e) => {
        if (locked) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      "aria-disabled": locked,
      title: locked ? "Locked — unlock in Shop" : void 0,
      className: cn(
        "block py-2 text-lg font-medium transition-colors",
        locked ? "cursor-not-allowed text-gray-400" : "hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      ),
      "data-game-nav-link": true,
      "data-href": item.href,
      children: item.text
    }
  );
};
function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);
  const mode = useGameStore((s) => s.mode);
  const unlocks = useGameStore((s) => s.unlocks);
  const items = unlocks["/life"] ? navigationMain : navigationMain.filter((item) => item.href !== "/life");
  const isLocked = (href) => {
    if (!href || href === "/") return false;
    if (mode !== "active") return false;
    return !unlocks[href];
  };
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsx(
      Button,
      {
        className: "md:hidden",
        text: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx(SheetContent, { className: "w-[240px] sm:w-[300px]", "data-game-ignore": true, children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-4", children: items.map((item) => /* @__PURE__ */ jsx(MenuItemComponent, { item, locked: isLocked(item.href) }, item.text)) }) })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg color-interpolation-filters="sRGB" style="display:none"> <defs> <filter id="mixed-ui-player-filter"> <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blurred_source"></feGaussianBlur> </filter> </defs> </svg> <header class="clip4 fixed top-0 z-50 w-full max-w-[100vw] overflow-hidden backdrop-blur-md"> <div class="absolute inset-0 bg-white/80 dark:bg-neutral-900/80"></div> <div class="container relative z-10 mx-auto px-4"> <nav class="flex h-16 items-center justify-center"> <a href="/" class="gradient-text-inv fixed left-4 top-3 font-basement text-2xl font-bold"> <!-- <img src="/img/logo.svg" alt="Logo" class="w-8 h-8" /> --> <svg width="36px" class="h-8 w-8 text-primary-500" data-rellax-speed="-7" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.8 26.7" style="transform: translate3d(0px, 0px, 0px);" xml:space="preserve"><path fill="currentColor" class="st1" d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
          c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
          c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
          c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
          l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
          c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"></path></svg> </a> ${renderComponent($$result, "MainNav", $$MainNav, {})} ${renderComponent($$result, "HamburgerMenu", HamburgerMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/Menu", "client:component-export": "default" })} ${renderComponent($$result, "Toggle", Toggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/Toggle", "client:component-export": "default" })} </nav> </div> </header>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/Header.astro", void 0);

function Tooltip({ children, content, position = "top", className }) {
  const [isVisible, setIsVisible] = useState(false);
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        isVisible && /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg transition-opacity duration-200",
              "before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-gray-900",
              position === "top" && "before:left-1/2 before:top-full before:-translate-x-1/2",
              position === "bottom" && "before:bottom-full before:left-1/2 before:-translate-x-1/2",
              position === "left" && "before:left-full before:top-1/2 before:-translate-y-1/2",
              position === "right" && "before:right-full before:top-1/2 before:-translate-y-1/2",
              getPositionClasses(),
              className
            ),
            children: content
          }
        )
      ]
    }
  );
}

const generateSound = (type) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (type === "duck") {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    const frequency = 400 + Math.random() * 400;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency * 0.7,
      audioContext.currentTime + 0.05
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency * 0.5,
      audioContext.currentTime + 0.1
    );
    oscillator.type = "square";
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.06, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(1e-3, audioContext.currentTime + 0.08);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } else if (type === "cat") {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const delayNode = audioContext.createDelay(1);
    const feedbackGain = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.connect(delayNode);
    delayNode.connect(feedbackGain);
    feedbackGain.connect(filterNode);
    filterNode.connect(delayNode);
    filterNode.connect(audioContext.destination);
    delayNode.delayTime.setValueAtTime(0.15, audioContext.currentTime);
    feedbackGain.gain.setValueAtTime(0.25, audioContext.currentTime);
    filterNode.frequency.setValueAtTime(2e3, audioContext.currentTime);
    filterNode.Q.setValueAtTime(1, audioContext.currentTime);
    const startFreq = 900 + Math.random() * 300;
    const midFreq = 600 + Math.random() * 200;
    const endFreq = 250 + Math.random() * 150;
    oscillator.frequency.setValueAtTime(startFreq, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(midFreq, audioContext.currentTime + 0.3);
    oscillator.frequency.exponentialRampToValueAtTime(endFreq, audioContext.currentTime + 0.8);
    oscillator.type = "sawtooth";
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0.06, audioContext.currentTime + 0.6);
    gainNode.gain.exponentialRampToValueAtTime(1e-3, audioContext.currentTime + 1.2);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);
  } else if (type === "click") {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    const frequency = 800 + Math.random() * 400;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency * 1.5,
      audioContext.currentTime + 5e-3
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency * 0.3,
      audioContext.currentTime + 0.03
    );
    oscillator.type = "triangle";
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 2e-3);
    gainNode.gain.exponentialRampToValueAtTime(1e-3, audioContext.currentTime + 0.04);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  }
};

const DuckSprite = ({ className = "" }) => {
  const [position, setPosition] = useState(0);
  const [animation, setAnimation] = useState("idle_normal");
  const [direction, setDirection] = useState("right");
  const [isWalking, setIsWalking] = useState(false);
  const handleQuack = () => {
    generateSound("duck");
  };
  useEffect(() => {
    const getContainerWidth = () => {
      const bodyWidth = document.body.clientWidth;
      return Math.max(320, bodyWidth - 32);
    };
    const containerWidth = getContainerWidth();
    setPosition(Math.random() * Math.max(0, containerWidth - 64));
    const interval = setInterval(
      () => {
        const shouldWalk = Math.random() > 0.4;
        if (shouldWalk) {
          setIsWalking(true);
          setDirection(Math.random() > 0.5 ? "right" : "left");
          setAnimation(Math.random() > 0.5 ? "walk_normal" : "walk_bounce");
        } else {
          setIsWalking(false);
          setAnimation(Math.random() > 0.5 ? "idle_normal" : "idle_bounce");
        }
      },
      2e3 + Math.random() * 3e3
    );
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (!isWalking) return;
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const speed = direction === "right" ? 2 : -2;
        const newPos = prev + speed;
        const bodyWidth = document.body.clientWidth;
        const maxX = Math.max(0, bodyWidth - 96);
        if (newPos <= 0) {
          setDirection("right");
          return 0;
        } else if (newPos >= maxX) {
          setDirection("left");
          return maxX;
        }
        return newPos;
      });
    }, 50);
    return () => clearInterval(moveInterval);
  }, [isWalking, direction]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `duck-sprite ${animation} ${className}`,
      onClick: handleQuack,
      style: {
        position: "absolute",
        left: `${position}px`,
        bottom: "160px",
        width: "32px",
        height: "32px",
        backgroundImage: "url(/img/ducky_2_spritesheet.png)",
        backgroundSize: "192px 128px",
        imageRendering: "pixelated",
        transform: direction === "left" ? "scaleX(-2) scaleY(2)" : "scaleX(2) scaleY(2)",
        zIndex: 1e3,
        pointerEvents: "auto",
        cursor: "pointer"
      }
    }
  );
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ehsanpo",
    color: "hover:text-gray-600 dark:hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ehsanp/",
    color: "hover:text-blue-600"
  },
  {
    name: "SoundCloud",
    icon: Headphones,
    href: "https://soundcloud.com/eprumental",
    color: "hover:text-orange-500"
  },
  {
    name: "Dribbble",
    icon: Pen,
    // Using Pen as placeholder for Dribbble
    href: "https://dribbble.com/epo",
    color: "hover:text-pink-500"
  },
  {
    name: "Twitter/X",
    icon: X,
    href: "https://twitter.com/ehsanpo",
    color: "hover:text-black dark:hover:text-white"
  },
  {
    name: "YouTube",
    icon: Play,
    // Using Play as placeholder for YouTube
    href: "https://www.youtube.com/user/ehsanpo/",
    color: "hover:text-red-600"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ehsan.po@gmail.com",
    color: "hover:text-green-500"
  }
];
const navigationSections = [
  {
    title: "Portfolio",
    links: [
      { name: "Work", href: "/portfolio", icon: Briefcase },
      { name: "Skills", href: "/skills", icon: Code },
      { name: "Services", href: "/services", icon: Palette },
      { name: "About", href: "/about", icon: User }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Music", href: "/music", icon: Music },
      { name: "Resume", href: "/cv", icon: FileText },
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "Blog", href: "/blog", icon: Newspaper }
    ]
  },
  {
    title: "Connect",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ehsanp/",
        icon: Linkedin
      },
      { name: "GitHub", href: "https://github.com/ehsanpo", icon: Github },
      {
        name: "SoundCloud",
        href: "https://soundcloud.com/eprumental",
        icon: Headphones
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/user/ehsanpo/",
        icon: Play
      },
      { name: "Email", href: "mailto:ehsan.po@gmail.com", icon: Mail }
    ]
  }
];
function Footer({
  variant = "glass",
  showSocial = true,
  showNavigation = true,
  showContact = true,
  showStats = true,
  onSectionChange,
  className
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNavigation = (id) => {
    if (onSectionChange) {
      onSectionChange(id);
    }
  };
  const getVariantClasses = () => {
    switch (variant) {
      case "glass":
        return "glass-card border-t border-border/50 border-gray-800";
      case "gradient":
        return "bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-t border-primary-500/20";
      case "default":
        return "bg-background border-t border-border";
      case "minimal":
        return "bg-transparent border-t border-border/30";
      default:
        return "glass-card border-t border-border/50";
    }
  };
  if (variant === "minimal") {
    return /* @__PURE__ */ jsx("footer", { className: cn("py-8", className), children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "48",
            height: "48",
            className: "text-primary-500",
            viewBox: "0 0 27.8 26.7",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fill: "currentColor",
                d: "M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5\r\n                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6\r\n                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2\r\n                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1\r\n                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5\r\n                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-basement", children: "Ehsan Pourhadi" })
      ] }),
      showSocial && /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: socialLinks.map((social) => {
        const Icon = social.icon;
        return /* @__PURE__ */ jsx(
          "a",
          {
            href: social.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: cn(
              "rounded-lg p-2 transition-all duration-300 hover:scale-110",
              "text-muted-foreground",
              social.color
            ),
            "aria-label": social.name,
            children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
          },
          social.name
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-kabel text-sm", children: "© 2024 Ehsan Pourhadi. All rights reserved." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs("footer", { className: cn("relative mt-20", getVariantClasses(), className), children: [
    /* @__PURE__ */ jsx(DuckSprite, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/60", children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "48",
                height: "48",
                className: "text-primary-500",
                viewBox: "0 0 27.8 26.7",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5\r\n                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6\r\n                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2\r\n                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1\r\n                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5\r\n                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "gradient-text font-basement text-xl font-bold", children: "Ehsan Pourhadi" }),
              /* @__PURE__ */ jsx("div", { className: "font-kabel text-muted-foreground text-sm", children: "Software Developer" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-kabel mb-6 text-sm leading-relaxed", children: "Experienced software developer passionate about creating impactful digital experiences with modern web technologies and thoughtful design." }),
          showSocial && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-1", children: socialLinks.map((social) => {
            const Icon = social.icon;
            return /* @__PURE__ */ jsxs(
              "a",
              {
                href: social.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: cn(
                  "glass-card group relative min-w-10 overflow-hidden rounded-lg border border-gray-800 p-2 transition-all duration-300 hover:scale-110",
                  "text-muted-foreground",
                  social.color
                ),
                "aria-label": social.name,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
                  /* @__PURE__ */ jsx(Icon, { className: "relative z-10 h-5 w-5" })
                ]
              },
              social.name
            );
          }) })
        ] }),
        showNavigation && navigationSections.map((section) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-4 font-basement text-lg", children: section.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: section.links.map((link) => {
            const Icon = link.icon;
            return /* @__PURE__ */ jsx("li", { children: link.href ? /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.href,
                target: link.href.startsWith("http") ? "_blank" : "_self",
                rel: link.href.startsWith("http") ? "noopener noreferrer" : void 0,
                className: "font-kabel group flex items-center text-sm text-gray-400 transition-colors hover:text-primary-500",
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4 transition-transform group-hover:scale-110" }),
                  link.name,
                  link.href.startsWith("http") && /* @__PURE__ */ jsx(ExternalLink, { className: "ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => link.id && handleNavigation(link.id),
                className: "text-muted-foreground font-kabel group flex items-center text-sm transition-colors hover:text-primary-500",
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4 transition-transform group-hover:scale-110" }),
                  link.name
                ]
              }
            ) }, link.name);
          }) })
        ] }, section.title))
      ] }),
      showStats && /* @__PURE__ */ jsx("div", { className: "border-border/50 mt-12 border-t border-gray-500/20 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 text-center md:grid-cols-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-text font-basement text-2xl font-bold", children: "70+" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-kabel text-sm", children: "Projects Completed" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-text font-basement text-2xl font-bold", children: "50+" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-kabel text-sm", children: "Happy Clients" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-text font-basement text-2xl font-bold", children: "12+" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-kabel text-sm", children: "Years Experience" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-text font-basement text-2xl font-bold", children: "100%" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-kabel text-sm", children: "Client Satisfaction" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "border-border/50 mt-12 border-t border-gray-500/20 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-kabel flex items-center space-x-1 text-xs text-gray-500", children: [
          /* @__PURE__ */ jsx("span", { children: "© 2025 Ehsan Pourhadi. All rights reserved." }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { children: "Made with" }),
            /* @__PURE__ */ jsx(Tooltip, { content: "Love and passion", position: "top", children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 fill-current text-red-600" }) }),
            /* @__PURE__ */ jsx("span", { children: "and" }),
            /* @__PURE__ */ jsx(Tooltip, { content: "Actually tea ☕ - coffee is for emergencies!", position: "top", children: /* @__PURE__ */ jsx(Coffee, { className: "h-4 w-4 text-yellow-500" }) }),
            /* @__PURE__ */ jsx("span", { children: "using" }),
            /* @__PURE__ */ jsx(Tooltip, { content: "See all tools and resources", position: "top", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/credits",
                className: "inline-flex items-center gap-1 align-bottom text-primary-500 transition-colors hover:text-primary-400",
                children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { className: "underline decoration-primary-500/50 underline-offset-2", children: "awesome tools" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: scrollToTop,
            className: "glass-card font-kabel flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-300 hover:scale-105",
            children: [
              /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" }),
              "Back to Top"
            ]
          }
        )
      ] }) })
    ] })
  ] });
}

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function KonamiCode() {
  const [mounted, setMounted] = useState(false);
  const [keys, setKeys] = useState([]);
  const [activated, setActivated] = useState(false);
  const enableGame = useGameStore((s) => s.enableGame);
  const setHUD = useGameStore((s) => s.setHUD);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10);
        const matches = KONAMI_CODE.every((key, i) => key === newKeys[i]);
        if (matches && !activated) {
          setActivated(true);
          triggerEasterEgg();
          enableGame();
          setHUD(true);
          setTimeout(() => {
            setActivated(false);
            setKeys([]);
          }, 5e3);
        }
        return newKeys;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, activated, enableGame, setHUD]);
  const triggerEasterEgg = () => {
    const duration = 3e3;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
    console.log(
      "%c🎮 KONAMI CODE ACTIVATED! 🎮",
      "font-size: 24px; font-weight: bold; color: #ff6b6b; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"
    );
    console.log("%cYou found the secret! 🎉", "font-size: 16px; color: #4ecdc4;");
  };
  if (!mounted) return null;
  return /* @__PURE__ */ jsx(Fragment, { children: activated && /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-[9998] flex items-center justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-600 opacity-20" }),
    /* @__PURE__ */ jsxs("div", { className: "relative animate-bounce rounded-lg bg-primary-600 px-8 py-4 shadow-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white", children: "🎮 KONAMI CODE! 🎮" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xl text-white", children: "GAME MODE ACTIVATED!!! 🎉" })
    ] })
  ] }) });
}

function AchievementToast({ toast }) {
  const ack = useGameStore((s) => s.ackToast);
  useEffect(() => {
    const id = setTimeout(() => ack(toast.id), 4200);
    return () => clearTimeout(id);
  }, [toast.id, ack]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pointer-events-auto rounded-lg border border-amber-200/40 bg-amber-500/15 px-4 py-3 text-sm text-amber-50 shadow-lg shadow-amber-500/20 backdrop-blur",
      "data-game-ignore": true,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", role: "img", children: "🏆" }),
          /* @__PURE__ */ jsx("span", { children: toast.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-amber-50/90", children: toast.message }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => ack(toast.id),
            className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-100 underline",
            "data-game-ignore": true,
            children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", role: "img", children: "✨" }),
              /* @__PURE__ */ jsx("span", { children: "Dismiss" })
            ]
          }
        )
      ]
    }
  );
}

const format$1 = (value) => Math.floor(value).toLocaleString();
function ShopModal() {
  const state = useGameStore((s) => s);
  const toggleShop = useGameStore((s) => s.toggleShop);
  const exitGame = useGameStore((s) => s.exitGame);
  const purchase = useGameStore((s) => s.purchaseItem);
  const items = buildShop(state);
  const renderItem = (item) => {
    const cost = item.cost(state);
    const alreadyUnlocked = item.target ? state.unlocks[item.target] : false;
    const disabled = state.coins < cost || alreadyUnlocked;
    const helper = item.target ? alreadyUnlocked ? "Unlocked" : "Locked" : "Upgrade";
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex flex-col gap-1 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white",
        "data-game-ignore": true,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-200", children: item.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right text-xs text-amber-200", children: [
              format$1(cost),
              " coins"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wide text-gray-300", children: helper }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => purchase(item.id),
                disabled,
                className: clsx$1(
                  "rounded-md px-3 py-1 text-xs font-semibold transition",
                  disabled ? "cursor-not-allowed bg-white/10 text-gray-300" : "bg-primary-500 text-black hover:bg-primary-400"
                ),
                "data-game-ignore": true,
                children: alreadyUnlocked ? "Unlocked" : "Buy"
              }
            )
          ] })
        ]
      },
      item.id
    );
  };
  if (!state.shopOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[9997] flex items-center justify-center bg-black/70 p-4",
      "data-game-ignore": true,
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900/90 p-5 shadow-2xl backdrop-blur", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-start justify-between text-white", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: "Game Shop" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-300", children: "Spend coins to unlock links and upgrades." })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleShop(false),
              className: "rounded-full px-2 py-1 text-xs text-gray-200 hover:bg-white/10",
              "data-game-ignore": true,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "flex max-h-[60vh] flex-col gap-3 overflow-auto pr-1", "data-game-ignore": true, children: items.map(renderItem) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white",
            "data-game-ignore": true,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Exit game mode" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-300", children: "Pause HUD, stop auto-click, close shop." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    exitGame();
                  },
                  className: "rounded-md bg-red-500/90 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-red-400",
                  "data-game-ignore": true,
                  children: "Exit"
                }
              )
            ]
          }
        )
      ] })
    }
  );
}

function BlinkingLED({
  color = "#efb503",
  size = 10,
  height = 1,
  width = 100,
  durationSec = 2,
  className
}) {
  const style = {
    width,
    height,
    color,
    backgroundColor: "currentColor",
    borderRadius: 9999,
    boxShadow: `0 0 ${Math.max(4, size)}px ${Math.max(1, Math.floor(size / 3))}px currentColor`,
    opacity: 1,
    animation: `blink-led ${durationSec}s ease-in-out infinite`,
    pointerEvents: "none"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
          @keyframes blink-led {
            0% { opacity: 0.25; }
            35% { opacity: 0.9; }
            55% { opacity: 1; }
            60% { opacity: 1; }
            75% { opacity: 0.6; }
            100% { opacity: 0; }
          }
        ` }),
    /* @__PURE__ */ jsx("div", { className, style, "aria-hidden": "true" })
  ] });
}

const format = (value) => Math.floor(value).toLocaleString();
function GameHUD() {
  const [mounted, setMounted] = useState(false);
  const [clickAnimations, setClickAnimations] = useState([]);
  const mode = useGameStore((s) => s.mode);
  const coins = useGameStore((s) => s.coins);
  const clickPower = useGameStore((s) => s.clickPower);
  const combo = useGameStore((s) => s.combo);
  const playerLevel = useGameStore((s) => s.playerLevel);
  const auto = useGameStore((s) => s.autoClicker);
  const showHUD = useGameStore((s) => s.showHUD);
  const toasts = useGameStore((s) => s.toasts);
  const toggleShop = useGameStore((s) => s.toggleShop);
  const addClick = useGameStore((s) => s.addClick);
  useGameEngine();
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted || mode !== "active") return;
    const handler = (event) => {
      const target = event.target;
      if (target?.closest("[data-game-ignore]")) return;
      try {
        generateSound("click");
      } catch (error) {
        console.warn("Could not play click sound:", error);
      }
      const id = Date.now() + Math.random();
      const amount = clickPower * combo.multiplier;
      setClickAnimations((prev) => [
        ...prev,
        {
          id,
          x: event.clientX,
          y: event.clientY,
          amount,
          combo: combo.multiplier
        }
      ]);
      setTimeout(() => {
        setClickAnimations((prev) => prev.filter((a) => a.id !== id));
      }, 1e3);
      addClick("manual");
    };
    window.addEventListener("click", handler, false);
    return () => window.removeEventListener("click", handler, false);
  }, [mounted, mode, addClick, clickPower, combo.multiplier]);
  if (!mounted) return null;
  if (!showHUD) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    clickAnimations.map((anim) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "fixed",
          left: anim.x,
          top: anim.y,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          animation: "float-up 1s ease-out forwards"
        },
        className: "text-xl font-bold text-yellow-400",
        "data-game-ignore": true,
        children: [
          "+",
          Math.floor(anim.amount),
          "💰",
          anim.combo > 1 && /* @__PURE__ */ jsxs("span", { className: "ml-1 text-sm text-cyan-300", children: [
            "x",
            anim.combo.toFixed(1)
          ] })
        ]
      },
      anim.id
    )),
    /* @__PURE__ */ jsxs("div", { className: "wires fixed left-0 right-0 top-[80px] z-40 m-auto flex w-80 justify-between", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "relative top-[-33px] w-20 fill-primary-700",
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "-5.0 -10.0 110.0 135.0",
          children: /* @__PURE__ */ jsx("path", { d: "m65.625 74.664c-2.9062 2.3203-7.7422 3.4492-13.27 3.0977-6.7461-0.42969-13.996-2.9375-20.969-7.2578-0.30078-0.1875-0.65625-0.26172-1.0078-0.21094-1.3086 0.19141-2.2422 0.77734-2.7773 1.7461-0.42578 0.76563-0.5 1.5938-0.5625 2.3242-0.10156 1.1406-0.19141 1.3945-0.5625 1.5938-0.47266 0.25391-0.77344 0.73828-0.78906 1.2734-0.015625 0.53516 0.25391 1.0391 0.71094 1.3203 8.293 5.1367 17.059 8.1289 25.355 8.6562 0.86719 0.054688 1.7383 0.082031 2.582 0.082031 3.4141 0 6.6172-0.44141 9.5195-1.3164 2.957-0.89062 5.5391-2.207 7.6758-3.9141 2.7891-2.2266 4.75-5.1055 5.6641-8.3164 0.95313-3.3477 0.78906-6.9258-0.48437-10.637-1.0195-2.9688-2.5742-5.4062-4.6133-7.2422-1.8477-1.6641-4.125-2.8555-6.7656-3.5469-4.3359-1.1328-9.0508-0.80078-13.609-0.48047-10.098 0.71094-14.082 0.38672-15.832-5.875-1.3867-4.9531 0.45312-9.6992 5.4688-14.109 4.2422-3.7305 9.1875-5.8008 9.3008-5.8477 2.0391-0.82812 3.1914-2.9336 2.9062-5.0195l8.9727-3.8164c0.76172-0.32422 1.1172-1.2031 0.79297-1.9688-0.32422-0.76172-1.2031-1.1172-1.9688-0.79297l-9.125 3.8789c-1.3047-1.3125-3.3203-1.793-5.1406-1.0586-0.25781 0.10547-6.3477 2.5977-11.852 7.3906-3.4062 2.9648-5.918 6.2148-7.4609 9.6602-2.043 4.5547-2.3828 9.3438-1.0156 14.234 0.91797 3.2812 2.4062 5.9844 4.418 8.0391 1.8633 1.9023 4.2031 3.2773 6.957 4.0859 4.5195 1.3281 9.4648 0.98047 14.246 0.64062 3.9727-0.28125 7.7227-0.54297 10.551 0.19531 2.5273 0.66016 3.8789 1.9805 4.8164 4.707 1.2109 3.5352 0.49609 6.3867-2.1328 8.4844zm5.4023-2.9062c0.51562-2.0039 0.37109-4.2031-0.43359-6.5391-1.2617-3.6719-3.3906-5.7188-6.8945-6.6328-3.3047-0.86328-7.2969-0.58203-11.52-0.28516-4.5156 0.31641-9.1875 0.64453-13.188-0.52734-2.2539-0.66016-4.1562-1.7734-5.6562-3.3047-1.6562-1.6914-2.8906-3.9609-3.6719-6.75-1.1758-4.1953-0.88281-8.3008 0.86328-12.199 1.3672-3.0469 3.6172-5.9492 6.6953-8.625 5.1289-4.4648 10.77-6.7734 11.008-6.8711 0.88672-0.35938 1.8984 0.070312 2.2578 0.95703s-0.070312 1.8984-0.95703 2.2578c0 0-0.003906 0-0.003906 0.003907-0.22266 0.089843-5.4883 2.2773-10.145 6.3711-2.9141 2.5625-4.9414 5.3008-6.0156 8.1406-1.1016 2.9141-1.2266 5.9492-0.36328 9.0312 1.1602 4.1406 3.3477 6.5703 6.8789 7.6406 3.1406 0.94922 7.1445 0.76172 12.051 0.41797 4.3164-0.30469 8.7852-0.61719 12.641 0.39062 2.1719 0.56641 4.0273 1.5352 5.5156 2.875 1.6562 1.4922 2.9297 3.5078 3.7812 5.9883 1.0703 3.1172 1.2188 6.0898 0.4375 8.8398-0.74219 2.6094-2.3516 4.9609-4.6484 6.7969-3.6953 2.9492-9.1367 4.5742-15.324 4.5742-0.78516 0-1.5898-0.027344-2.3945-0.078125-7.2969-0.46484-15.02-2.9766-22.426-7.2891 0.37891-0.79297 0.45312-1.6406 0.51172-2.3008 0.074218-0.83203 0.11328-1.1211 0.31641-1.2461 7.2266 4.375 14.762 6.9219 21.82 7.3711 0.71484 0.046875 1.4219 0.066406 2.1172 0.066406 5.3945 0 10.133-1.3516 13.215-3.8125 1.8203-1.4609 3.0078-3.2305 3.5312-5.2617z" })
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "relative top-[-62px] w-16 rotate-180 fill-primary-800",
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "-5.0 -10.0 110.0 135.0",
          children: /* @__PURE__ */ jsx("path", { d: "m65.625 74.664c-2.9062 2.3203-7.7422 3.4492-13.27 3.0977-6.7461-0.42969-13.996-2.9375-20.969-7.2578-0.30078-0.1875-0.65625-0.26172-1.0078-0.21094-1.3086 0.19141-2.2422 0.77734-2.7773 1.7461-0.42578 0.76563-0.5 1.5938-0.5625 2.3242-0.10156 1.1406-0.19141 1.3945-0.5625 1.5938-0.47266 0.25391-0.77344 0.73828-0.78906 1.2734-0.015625 0.53516 0.25391 1.0391 0.71094 1.3203 8.293 5.1367 17.059 8.1289 25.355 8.6562 0.86719 0.054688 1.7383 0.082031 2.582 0.082031 3.4141 0 6.6172-0.44141 9.5195-1.3164 2.957-0.89062 5.5391-2.207 7.6758-3.9141 2.7891-2.2266 4.75-5.1055 5.6641-8.3164 0.95313-3.3477 0.78906-6.9258-0.48437-10.637-1.0195-2.9688-2.5742-5.4062-4.6133-7.2422-1.8477-1.6641-4.125-2.8555-6.7656-3.5469-4.3359-1.1328-9.0508-0.80078-13.609-0.48047-10.098 0.71094-14.082 0.38672-15.832-5.875-1.3867-4.9531 0.45312-9.6992 5.4688-14.109 4.2422-3.7305 9.1875-5.8008 9.3008-5.8477 2.0391-0.82812 3.1914-2.9336 2.9062-5.0195l8.9727-3.8164c0.76172-0.32422 1.1172-1.2031 0.79297-1.9688-0.32422-0.76172-1.2031-1.1172-1.9688-0.79297l-9.125 3.8789c-1.3047-1.3125-3.3203-1.793-5.1406-1.0586-0.25781 0.10547-6.3477 2.5977-11.852 7.3906-3.4062 2.9648-5.918 6.2148-7.4609 9.6602-2.043 4.5547-2.3828 9.3438-1.0156 14.234 0.91797 3.2812 2.4062 5.9844 4.418 8.0391 1.8633 1.9023 4.2031 3.2773 6.957 4.0859 4.5195 1.3281 9.4648 0.98047 14.246 0.64062 3.9727-0.28125 7.7227-0.54297 10.551 0.19531 2.5273 0.66016 3.8789 1.9805 4.8164 4.707 1.2109 3.5352 0.49609 6.3867-2.1328 8.4844zm5.4023-2.9062c0.51562-2.0039 0.37109-4.2031-0.43359-6.5391-1.2617-3.6719-3.3906-5.7188-6.8945-6.6328-3.3047-0.86328-7.2969-0.58203-11.52-0.28516-4.5156 0.31641-9.1875 0.64453-13.188-0.52734-2.2539-0.66016-4.1562-1.7734-5.6562-3.3047-1.6562-1.6914-2.8906-3.9609-3.6719-6.75-1.1758-4.1953-0.88281-8.3008 0.86328-12.199 1.3672-3.0469 3.6172-5.9492 6.6953-8.625 5.1289-4.4648 10.77-6.7734 11.008-6.8711 0.88672-0.35938 1.8984 0.070312 2.2578 0.95703s-0.070312 1.8984-0.95703 2.2578c0 0-0.003906 0-0.003906 0.003907-0.22266 0.089843-5.4883 2.2773-10.145 6.3711-2.9141 2.5625-4.9414 5.3008-6.0156 8.1406-1.1016 2.9141-1.2266 5.9492-0.36328 9.0312 1.1602 4.1406 3.3477 6.5703 6.8789 7.6406 3.1406 0.94922 7.1445 0.76172 12.051 0.41797 4.3164-0.30469 8.7852-0.61719 12.641 0.39062 2.1719 0.56641 4.0273 1.5352 5.5156 2.875 1.6562 1.4922 2.9297 3.5078 3.7812 5.9883 1.0703 3.1172 1.2188 6.0898 0.4375 8.8398-0.74219 2.6094-2.3516 4.9609-4.6484 6.7969-3.6953 2.9492-9.1367 4.5742-15.324 4.5742-0.78516 0-1.5898-0.027344-2.3945-0.078125-7.2969-0.46484-15.02-2.9766-22.426-7.2891 0.37891-0.79297 0.45312-1.6406 0.51172-2.3008 0.074218-0.83203 0.11328-1.1211 0.31641-1.2461 7.2266 4.375 14.762 6.9219 21.82 7.3711 0.71484 0.046875 1.4219 0.066406 2.1172 0.066406 5.3945 0 10.133-1.3516 13.215-3.8125 1.8203-1.4609 3.0078-3.2305 3.5312-5.2617z" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "pointer-events-none fixed left-1/2 top-[86px] z-[9996] flex -translate-x-1/2 flex-col gap-2 text-white",
        "data-game-ignore": true,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "clip pointer-events-auto relative flex items-center gap-3 rounded-sm bg-white/90 px-5 py-3 text-sm shadow-lg backdrop-blur dark:bg-neutral-900/80", children: [
            /* @__PURE__ */ jsx(BlinkingLED, { className: "absolute -top-1 left-2 -translate-y-1/2", color: "#ce8b00" }),
            /* @__PURE__ */ jsx(BlinkingLED, { className: "absolute -top-1 right-2 -translate-y-1/2", color: "#ce8b00" }),
            /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
              "Coins: ",
              format(coins)
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-amber-200", children: [
              "Lvl ",
              playerLevel
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-200", children: [
              "Power ",
              clickPower,
              "x"
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `text-xs transition-all duration-200 ${combo.multiplier > 1 ? "scale-110 font-bold text-cyan-400" : "text-cyan-200"}`,
                children: [
                  "Combo ",
                  combo.multiplier.toFixed(1),
                  "x"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-200", children: [
              "Auto ",
              auto.level
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toggleShop(true),
                className: "rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white shadow",
                "data-game-ignore": true,
                children: "Shop"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "pointer-events-none flex flex-col gap-2",
              "aria-live": "polite",
              "data-game-ignore": true,
              children: toasts.map((toast) => /* @__PURE__ */ jsx("div", { className: "pointer-events-auto", "data-game-ignore": true, children: /* @__PURE__ */ jsx(AchievementToast, { toast }) }, toast.id))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(ShopModal, {})
  ] });
}

const isUnlocked = (href, unlocks) => {
  const key = href;
  return unlocks[key] ?? true;
};
const applyLockState = (mode, unlocks) => {
  const anchors = Array.from(
    document.querySelectorAll("[data-game-nav-link]")
  );
  const handlers = [];
  const useCapture = true;
  anchors.forEach((el) => {
    const href = el.dataset.href || el.getAttribute("href") || "";
    const isLife = href === "/life";
    const locked = mode === "active" && href !== "/" && !isUnlocked(href, unlocks);
    const hideLife = isLife && (mode !== "active" || !unlocks["/life"]);
    if (hideLife) {
      el.style.display = "none";
      return;
    }
    el.style.display = "";
    const originalText = el.textContent?.replace(/🔒\s*/, "") || "";
    if (locked) {
      el.setAttribute("aria-disabled", "true");
      el.title = "Locked — unlock in Shop";
      el.classList.add("pointer-events-none", "opacity-60");
      if (!el.textContent?.includes("🔒")) {
        el.textContent = `🔒 ${originalText}`;
      }
      const fn = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      el.addEventListener("click", fn, useCapture);
      handlers.push({ el, fn });
    } else {
      el.removeAttribute("aria-disabled");
      el.classList.remove("pointer-events-none", "opacity-60");
      if (el.textContent?.includes("🔒")) {
        el.textContent = originalText;
      }
    }
  });
  return () => handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn, useCapture));
};
function NavLockGuard() {
  const [mounted, setMounted] = useState(false);
  const mode = useGameStore((s) => s.mode);
  const unlocks = useGameStore((s) => s.unlocks);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const cleanup = applyLockState(mode, unlocks);
    return cleanup;
  }, [mounted, mode, unlocks]);
  return null;
}

function FireAnimation({ className, style }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("fire-sprite fire-animate", className),
      style: {
        width: "192px",
        height: "172px",
        backgroundSize: "1344px 172px",
        ...style
      }
    }
  );
}

function WeatherSystem({
  className,
  weatherType = "clear",
  intensity = "medium"
}) {
  const [currentWeather, setCurrentWeather] = useState(weatherType);
  const [currentIntensity, setCurrentIntensity] = useState(intensity);
  useEffect(() => {
    if (weatherType !== "clear") return;
    const weatherTypes = ["clear", "rain", "snow", "fog"];
    const intensities = ["light", "medium", "heavy"];
    const interval = setInterval(() => {
      setCurrentWeather(weatherTypes[Math.floor(Math.random() * weatherTypes.length)]);
      setCurrentIntensity(intensities[Math.floor(Math.random() * intensities.length)]);
    }, 15e3);
    return () => clearInterval(interval);
  }, [weatherType]);
  const activeWeather = weatherType === "clear" ? currentWeather : weatherType;
  const activeIntensity = weatherType === "clear" ? currentIntensity : intensity;
  const getParticleCount = () => {
    const baseCount = activeIntensity === "light" ? 30 : activeIntensity === "medium" ? 60 : 100;
    return activeWeather === "snow" ? baseCount * 0.7 : baseCount;
  };
  const particleCount = Math.floor(getParticleCount());
  if (activeWeather === "clear") return null;
  return /* @__PURE__ */ jsxs("div", { className: cn("pointer-events-none absolute inset-0 z-[5] overflow-hidden", className), children: [
    activeWeather === "fog" && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-gray-300 opacity-30 dark:bg-gray-600",
          style: {
            mask: `
							linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
							linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%),
							radial-gradient(circle at 20% 40%, transparent 20%, black 40%, transparent 60%),
							radial-gradient(circle at 80% 30%, transparent 15%, black 35%, transparent 55%),
							radial-gradient(circle at 40% 70%, transparent 25%, black 45%, transparent 65%),
							radial-gradient(circle at 90% 60%, transparent 20%, black 40%, transparent 60%)
						`,
            maskComposite: "intersect"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 animate-[fogDrift_20s_linear_infinite] bg-gray-400 opacity-20 dark:bg-gray-500",
          style: {
            mask: `
							linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%),
							linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
							radial-gradient(ellipse at 60% 50%, transparent 30%, black 50%, transparent 70%),
							radial-gradient(ellipse at 30% 40%, transparent 25%, black 45%, transparent 65%)
						`,
            maskComposite: "intersect"
          }
        }
      )
    ] }),
    activeWeather === "rain" && /* @__PURE__ */ jsx(
      "div",
      {
        className: "rain-container absolute inset-0",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none"
        },
        children: [...Array(particleCount)].map((_, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-px animate-[rainFall_0.5s_linear_infinite] bg-blue-400 opacity-70 dark:bg-blue-300",
            style: {
              position: "absolute",
              left: `${Math.random() * 100}vw`,
              top: "-20px",
              height: `${8 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.3 + Math.random() * 0.4}s`,
              transform: "translateX(0px) translateY(0px)",
              willChange: "top"
            }
          },
          `rain-${i}`
        ))
      }
    ),
    activeWeather === "snow" && /* @__PURE__ */ jsx(
      "div",
      {
        className: "snow-container absolute inset-0",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none"
        },
        children: [...Array(particleCount)].map((_, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-1 w-1 animate-[snowFall_3s_linear_infinite] rounded-full bg-white opacity-80",
            style: {
              position: "absolute",
              left: `${Math.random() * 100}vw`,
              top: "-10px",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: "translateX(0px) translateY(0px)",
              willChange: "top, transform"
            }
          },
          `snow-${i}`
        ))
      }
    ),
    activeWeather === "rain" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-blue-900 opacity-5 dark:bg-blue-800" }),
    activeWeather === "snow" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-blue-50 opacity-10 dark:bg-slate-700" })
  ] });
}

function PixelWorld({ className, height = 320 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [catAnimationDuration, setCatAnimationDuration] = useState(8);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);
  const handleCatClick = () => {
    generateSound("cat");
    setCatAnimationDuration(3);
    setTimeout(() => setCatAnimationDuration(8), 1e3);
  };
  const themeFolder = isDarkMode ? "dark" : "light";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("relative mx-auto w-full overflow-hidden", className),
      style: { height: `${height}px` },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-32 h-32 w-[120%] animate-[slideBG_60s_linear_infinite]",
            style: {
              backgroundImage: `url('/img/px/${themeFolder}/sky.${isDarkMode ? "jpg" : "png"}')`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              imageRendering: "pixelated"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-[100px] h-32 w-full transition-transform duration-100 ease-out",
            style: {
              backgroundImage: `url('/img/px/${themeFolder}/mountain.png')`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              imageRendering: "pixelated",
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px)`
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-8 h-16 w-full",
            style: {
              backgroundImage: `url('/img/px/${themeFolder}/grass.png')`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              imageRendering: "pixelated"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-0 z-10 h-8 w-full",
            style: {
              backgroundImage: `url('/img/px/${themeFolder}/ground.${isDarkMode ? "jpg" : "png"}')`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              imageRendering: "pixelated"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `/img/px/${themeFolder}/tree.png`,
            alt: "Tree",
            className: "pointer-events-none absolute bottom-8 z-20 h-32",
            style: {
              left: "15%",
              imageRendering: "pixelated"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `/img/px/${themeFolder}/stone.png`,
            alt: "Stone",
            className: "pointer-events-none absolute bottom-8 z-20 h-20",
            style: {
              left: "60%",
              imageRendering: "pixelated"
            }
          }
        ),
        /* @__PURE__ */ jsx(FireAnimation, { className: "absolute bottom-6 z-20", style: { left: "45%" } }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-auto absolute bottom-5 z-10 h-32 w-32 cursor-pointer",
            style: {
              left: "-128px",
              imageRendering: "pixelated",
              animation: `runCat ${catAnimationDuration}s linear infinite`
            },
            onClick: handleCatClick,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/img/banner.gif",
                alt: "Running cat",
                className: "h-full w-full object-contain",
                style: { imageRendering: "pixelated" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(WeatherSystem, {})
      ]
    }
  );
}

function ScrollBottomEasterEgg() {
  const [showBanner, setShowBanner] = useState(false);
  const [extraScrollAttempts, setExtraScrollAttempts] = useState(0);
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  useEffect(() => {
    let attemptTimeout;
    const THROTTLE_MS = 300;
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastWheelTime < THROTTLE_MS) {
        return;
      }
      setLastWheelTime(now);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const isAtBottom = scrollPosition >= scrollableHeight - 10;
      if (isAtBottom && e.deltaY > 0) {
        setExtraScrollAttempts((prev) => {
          const newAttempts = prev + 1;
          if (newAttempts > 7) {
            setShowBanner(true);
          }
          return newAttempts;
        });
        clearTimeout(attemptTimeout);
        attemptTimeout = setTimeout(() => {
          setExtraScrollAttempts(0);
        }, 2e3);
      } else if (!isAtBottom && e.deltaY < 0) {
        setExtraScrollAttempts(0);
        setShowBanner(false);
      }
      setLastScrollPos(scrollPosition);
    };
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const isAtBottom = scrollPosition >= scrollableHeight - 10;
      if (!isAtBottom && scrollPosition < lastScrollPos) {
        setExtraScrollAttempts(0);
        setShowBanner(false);
      }
      setLastScrollPos(scrollPosition);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(attemptTimeout);
    };
  }, [lastWheelTime, lastScrollPos]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "pointer-events-auto relative z-40 overflow-hidden",
      id: "pixelworld",
      initial: { y: "100%" },
      animate: {
        y: showBanner ? "0%" : "100%",
        display: showBanner ? "block" : "none",
        opacity: showBanner ? 1 : 0
      },
      transition: { duration: 0.6, ease: "easeOut" },
      children: /* @__PURE__ */ jsx(PixelWorld, { className: "border-t border-neutral-800/50" })
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Developer Portfolio",
    image = "/img/og-default.jpg",
    imageAlt = "Ehsan Portfolio"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImage = new URL(image, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="sitemap" href="/sitemap-index.xml"><script async defer src="https://scripts.withcabin.com/hello.js"><\/script><title>', "</title>", "", '</head> <body class="bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100"> ', " ", " ", " ", ' <main class="min-h-screen"> ', " ", " ", ` </main>  <script>
			// Easter Egg: Developer Console Message
			console.log(
				"%c" +
					"\\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\\n" +
					"\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\\n" +
					"\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\\n" +
					"\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\\n" +
					"\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\\n" +
					"\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\\n",
				"color: #6366f1; font-weight: bold;"
			);
			console.log(
				"%c\u{1F44B} Hey there, curious developer!",
				"font-size: 18px; font-weight: bold; color: #10b981;"
			);
			console.log(
				"%c\u{1F50D} I see you're checking out the console. I like your style!",
				"font-size: 14px; color: #8b5cf6;"
			);
			console.log(
				"%c\u{1F4A1} Fun fact: This portfolio is built with Astro, React, and TailwindCSS",
				"font-size: 14px; color: #f59e0b;"
			);
			console.log(
				"%c\u{1F3AE} Pro tip: Try the Konami Code! (\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA)",
				"font-size: 14px; color: #ec4899; font-style: italic;"
			);
			console.log(
				"%c\u{1F4E7} Want to chat? Reach out at the contact page!",
				"font-size: 14px; color: #06b6d4;"
			);
			console.log("%c\u2B50 GitHub: github.com/ehsanpo", "font-size: 14px; color: #a855f7;");
		<\/script> </body> </html>`], ['<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="sitemap" href="/sitemap-index.xml"><script async defer src="https://scripts.withcabin.com/hello.js"><\/script><title>', "</title>", "", '</head> <body class="bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100"> ', " ", " ", " ", ' <main class="min-h-screen"> ', " ", " ", ` </main>  <script>
			// Easter Egg: Developer Console Message
			console.log(
				"%c" +
					"\\\\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\\\\n" +
					"\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\\\\n" +
					"\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\\\\n" +
					"\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\\\\n" +
					"\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\\\\n" +
					"\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\\\\n",
				"color: #6366f1; font-weight: bold;"
			);
			console.log(
				"%c\u{1F44B} Hey there, curious developer!",
				"font-size: 18px; font-weight: bold; color: #10b981;"
			);
			console.log(
				"%c\u{1F50D} I see you're checking out the console. I like your style!",
				"font-size: 14px; color: #8b5cf6;"
			);
			console.log(
				"%c\u{1F4A1} Fun fact: This portfolio is built with Astro, React, and TailwindCSS",
				"font-size: 14px; color: #f59e0b;"
			);
			console.log(
				"%c\u{1F3AE} Pro tip: Try the Konami Code! (\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA)",
				"font-size: 14px; color: #ec4899; font-style: italic;"
			);
			console.log(
				"%c\u{1F4E7} Want to chat? Reach out at the contact page!",
				"font-size: 14px; color: #06b6d4;"
			);
			console.log("%c\u2B50 GitHub: github.com/ehsanpo", "font-size: 14px; color: #a855f7;");
		<\/script> </body> </html>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImage, "content"), addAttribute(imageAlt, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImage, "content"), addAttribute(imageAlt, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "KonamiCode", KonamiCode, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/KonamiCode", "client:component-export": "default" }), renderComponent($$result, "NavLockGuard", NavLockGuard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/game/NavLockGuard", "client:component-export": "NavLockGuard" }), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "GameHUD", GameHUD, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/game/GameHUD", "client:component-export": "GameHUD" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/footer/Footer", "client:component-export": "Footer" }), renderComponent($$result, "ScrollBottomEasterEgg", ScrollBottomEasterEgg, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ScrollBottomEasterEgg", "client:component-export": "default" }));
}, "C:/Users/Ehsan/dev/astro-template/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, getBlogPosts as a, getPortfolioItems as b, cn as c, getProductItems as d, getRoles as e, findTimelineMatch as f, getPortfolioData as g, useGameStore as u };

import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";
import { useRef } from "react";
const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });
const main_projects = [
	{
		id: 1,
		project_name: "Tool Connect",
		text: "E-Commerce Web App using ReactJS and Django",
		description: `This Python-based project is a Password Manager employing AES
							256 encryption for local storage in a MySQL database. Tkinter
							facilitates an intuitive interface for efficient password
							management, ensuring security and usability.`,
		tools: ["ReactJS", "Django", "Tailwind CSS", "SQLite"],
		url: "https://github.com/Rohithk2003/toolConnect",
	},
	{
		id: 2,
		project_name: "One Pass",
		text: "Password Manager",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: ["Python", "Tkinter", "MySQL"],
		url: "https://github.com/Rohithk2003/One-Pass",
	},
	{
		id: 3,
		project_name: "Web Tumor",
		text: "Web App for detecting Tumors using Deep Learning and Django",
		tools: ["Python", "Django", "Tensorflow", "Keras", "Next.JS"],

		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		url: "https://github.com/Rohithk2003/webTumor",
	},
];

const projects = [
	{
		id: 1,
		project_name: "Tool Connect",
		text: "E-Commerce Web App using ReactJS and Django",
		description: `This Python-based project is a Password Manager employing AES
								256 encryption for local storage in a MySQL database. Tkinter
								facilitates an intuitive interface for efficient password
								management, ensuring security and usability.`,
		tools: ["ReactJS", "Django", "Tailwind CSS", "SQLite"],
		url: "https://github.com/Rohithk2003/toolConnect",
	},
	{
		id: 2,
		project_name: "One Pass",
		text: "Password Manager",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: ["Python", "Tkinter", "MySQL"],
		url: "https://github.com/Rohithk2003/One-Pass",
	},
	{
		id: 3,
		project_name: "Web Tumor",
		text: "Web App for detecting Tumors using Deep Learning and Django",
		tools: ["Python", "Django", "Tensorflow", "Keras", "Next.JS"],

		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		url: "https://github.com/Rohithk2003/webTumor",
	},
	{
		id: 4,
		project_name: "Lung Cancer Prediction",
		text: "Lung Cancer Prediction using Machine Learning",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: [
			"Machine Learning",
			"Python",
			"Pandas",
			"Numpy",
			"Matplotlib",
			"Seaborn",
			"Scikit-learn",
		],
		url: "https://github.com/Rohithk2003/LungCancerPrediction",
	},
	{
		id: 5,
		project_name: "Youtube Music Scraper",
		text: "Youtube Video Downloader and Audio Converter using Python",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: ["Python", "Pytube", "Moviepy"],
		url: "https://github.com/Rohithk2003/youtubeMusicScraper",
	},
	{
		id: 6,
		project_name: "Leavescape",
		text: "Java based Software for Leave Management System",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: ["Java", "Swing", "PostgreSQL"],
		url: "https://github.com/Rohithk2003/Leavescape",
	},
	{
		id: 7,
		project_name: "Skyblaze",
		text: "2-D Game using Pygame",
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		tools: ["Python", "Pygame"],
		url: "https://github.com/Rohithk2003/Skyblaze",
	},
	{
		id: 8,
		project_name: "Aesthetic Designs",
		text: "Website for a client",
		tools: ["ReactJS", "Tailwind CSS", "Next.JS"],
		description: `This Python-based project is a Password Manager employing AES
		256 encryption for local storage in a MySQL database. Tkinter
		facilitates an intuitive interface for efficient password
		management, ensuring security and usability.`,
		url: "https://aestheticdesigns.vercel.app",
	},
];

function useProjectRefs(projects) {
	const refs = useRef({});

	useEffect(() => {
		projects.forEach((project) => {
			refs.current[project.id] = React.createRef();
		});
	}, [projects]);

	return refs.current;
}
export default function Project() {
	const [ref, inView, entry] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const projectRefs = useProjectRefs(main_projects);
	useEffect(() => {
		const options = {
			threshold: 0.4,
			triggerOnce: true,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("opacity-0");
					entry.target.classList.add(
						"slide-up-down-2",
						"animate-1",
						"opacity-1"
					);
				}
			});
		}, options);

		Object.values(projectRefs).forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

	return (
		<div
			ref={ref}
			id={"project"}
			className={`${
				inView ? "pop-up animate-1" : "opacity-0"
			} h-max text-justify mt-28 lg:pt-36  flex flex-wrap  lg:pl-[184px] md:pl-20  pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 pt-20   sm:pr-0  `}
		>
			<div className="w-full min-h-20">
				<div className="flex flex-row gap-5  justify-start items-center ">
					<div
						className={`project-text before:content-['03.'] after:md:block after:hidden  text-[28px] after:md:w-[300px] after:w-[100px] after:md:left-[300px] after:left-[140px] font-bold `}
					>
						Some Things I&apos;ve Built
					</div>
				</div>
			</div>
			<ul
				className={`flex flex-col flex-wrap xl:gap-2 xl:pt-0 mt-10 gap-3 sm:pr-0 pr-3 w-full items-start h-full`}
			>
				{main_projects.map((project) => {
					return (
						<li
							id={project.id}
							ref={projectRefs[project.id]}
							className={`flex flex-col w-full opacity-0 ${
								project.id % 2 !== 0
									? "lg:justify-end justify-start lg:items-end items-start"
									: "lg:justify-start justify-start lg:items-start items-start"
							}   `}
							key={project.id}
						>
							<div
								className={`${sf.className} mb-5 text-md  ${
									project.id % 2 !== 0
										? "lg:text-end text-start"
										: "lg:text-start text-start"
								}  w-full`}
							>
								{project.project_name}
							</div>
							<div
								className={`${
									ca.className
								} text-xl  w-full mb-5 text-[#6f6f6f]  ${
									project.id % 2 !== 0
										? "lg:text-end text-start"
										: "lg:text-start text-start"
								}`}
							>
								{project.text}
							</div>
							<div
								className={`${
									ca.className
								} max-w-[400px]  bg-gray-800 text-[#7b8fac] p-6 ${
									project.id % 2 !== 0 ? "lg:text-right" : "lg:text-start"
								} text-start rounded-md `}
							>
								{project.description}
							</div>
							<ul
								className={`flex flex-wrap flex-row lg:gap-10 gap-7 p-5 lg:pr-0 pr-auto lg:pl-auto pl-0  ${sf.className} text-[13px] text-[#6f6f6f]`}
							>
								{project.tools.map((tool, index) => {
									return <li key={index}>{tool}</li>;
								})}
							</ul>
							<ul>
								<li className="h-5 w-5 pop-up animate-8 text-[#6f6f6f]">
									<Link
										href="https://github.com/Rohithk2003"
										className="w-5 h-5"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-github h-5 hover:text-white transition-all duration-300 hover:-translate-y-1"
										>
											<title>GitHub</title>
											<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
										</svg>
									</Link>
								</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

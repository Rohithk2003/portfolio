import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const projectsReducedDescriptions = [
	{
		id: 1,
		project_name: "Tool Connect",
		text: "E-Commerce Web App using ReactJS and Django",
		description:
			"E-Commerce Web App with ReactJS and Django for secure password management.",
		tools: ["ReactJS", "Django", "Tailwind CSS", "SQLite"],
		website_url: "https://tool-connect.vercel.app",
		url: "https://github.com/Rohithk2003/toolConnect",
	},
	{
		id: 2,
		project_name: "One Pass",
		text: "Password Manager",
		description:
			"Python-based Password Manager using AES 256 encryption and Tkinter interface.",
		tools: ["Python", "Tkinter", "MySQL"],
		website_url: "",
		url: "https://github.com/Rohithk2003/One-Pass",
	},
	{
		id: 3,
		project_name: "Web Tumor",
		text: "Deep Learning Tumor Detection Web App",
		description:
			"Django Web App detecting tumors with Deep Learning, TensorFlow, and Keras.",
		tools: ["Python", "Django", "Tensorflow", "Keras", "Next.JS"],
		website_url: "https://webtumor.onrender.com/",
		url: "https://github.com/Rohithk2003/webTumor",
	},
	{
		id: 4,
		project_name: "Lung Cancer Prediction",
		text: "Machine Learning",
		description:
			"ML project for predicting lung cancer using Python and various libraries.",
		tools: ["Python", "Jupyter Notebook"],
		website_url: "",
		url: "https://github.com/Rohithk2003/LungCancerPrediction",
	},
	{
		id: 5,
		project_name: "Youtube Music Scraper",
		text: "Video Downloader",
		description:
			"Python tool for downloading and converting YouTube videos to audio.",
		tools: ["Python", "Pytube", "Moviepy"],
		website_url: "",
		url: "https://github.com/Rohithk2003/youtubeMusicScraper",
	},
	{
		id: 6,
		project_name: "Leavescape",
		text: "Leave Management System",
		description:
			"Java-based Leave Management System software using Swing and PostgreSQL.",
		tools: ["Java", "Swing", "PostgreSQL"],
		website_url: "",
		url: "https://github.com/Rohithk2003/Leavescape",
	},
	{
		id: 7,
		project_name: "Skyblaze",
		text: "2-D Game using Pygame",
		description: "Pygame-based 2D game development project.",
		tools: ["Python", "Pygame"],
		website_url: "",
		url: "https://github.com/Rohithk2003/Skyblaze",
	},
	{
		id: 8,
		project_name: "Aesthetic Designs",
		text: "Website for a client",
		description:
			"Client website developed with ReactJS, Tailwind CSS, and Next.JS.",
		tools: ["ReactJS", "Tailwind CSS", "Next.JS"],
		website_url: "https://aestheticdesigns.vercel.app",
		url: "",
	},
	{
		id: 9,
		project_name: "Modiva",
		text: "E-Commerce Shopping Website",
		description:
			"E-Commerce Shopping Website developed with HTML, CSS and Javascript",
		tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
		website_url: "",
		url: "https://github.com/Rohithk2003/modiva",
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
	const onAnimationEndHandler = (elementRef) => {
		if (
			elementRef.current &&
			elementRef.current.classList.contains("slide-up-down-2")
		) {
			elementRef.current.classList.add("animation-over");
			elementRef.current.classList.remove("slide-up-down-2");
		}
	};
	const projectRefs = useProjectRefs(projectsReducedDescriptions);
	useEffect(() => {
		const options = {
			threshold: 0.4,

			triggerOnce: true,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("opacity-0");
					if (!entry.target.classList.contains("animation-over"))
						entry.target.classList.add(
							"slide-up-down-2",
							"hover:-translate-y-2",
							"transition-all",
							"duration-500",
							"ease-in-out",
							"hover:text-white!",
							"card-animation",
							"animate-1",
							"opacity-1"
						);
					entry.target.onAnimationEnd = () => {
						entry.target.classList.remove("slide-up-down-2");
					};
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
	const [showmore, setshowmore] = React.useState(false);
	return (
		<div
			ref={ref}
			id={"project"}
			className={`${
				inView ? "pop-up animate-4" : "opacity-0"
			} h-max text-justify mt-28 lg:pt-36  flex flex-wrap  lg:pl-[184px]   md:p-20  xs:pt-0 pt-20   pr-0 `}
		>
			<div className="w-full min-h-20 lg:pr-32 pr-0">
				<div className="flex flex-row gap-5  justify-center items-center ">
					<div
						className={`font-sf_display leading-loose text-[25px]  font-bold `}
					>
						Other Noteworthy Projects
					</div>
				</div>
				<div className="w-full text-center font-sans text-gray-500 ">
					<div className="flex flex-row gap-5  justify-center items-center ">
						<div
							className={`font-sf leading-loose text-md  font-bold underline-animation `}
						>
							view the archive
						</div>
					</div>
				</div>
			</div>
			<ul
				className={`grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 place-items-center mt-10  lg:mr-28 mr-0 p-0    w-full items-start h-full`}
			>
				{projectsReducedDescriptions.map((project) => {
					return (
						<li
							id={project.id}
							ref={projectRefs[project.id]}
							onAnimationEnd={() => {
								onAnimationEndHandler(projectRefs[project.id]);
							}}
							className={` flex-col relative ${
								project.id >= 7 ? (showmore ? "flex" : "hidden") : "flex"
							} bg-gray-800  pt-10 gap-4 p-4 py-7 w-80 h-80 opacity-0 text-center md:mb-0 mt-7 `}
							key={project.id}
						>
							<div className="flex flex-row justify-between w-full">
								<div className="w-10 h-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="feather feather-folder text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
									>
										<title>Folder</title>
										<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
									</svg>
								</div>
								<div className="flex justify-center gap-2 items-center pop-up animate-8 text-[#6f6f6f]">
									{project.url && (
										<Link
											href={project.url}
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
									)}
									{project.website_url ? (
										<Link
											href={project.website_url}
											className="w-5 h-5"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												role="img"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="feather feather-github h-5 hover:text-white transition-all duration-300 hover:-translate-y-1"
											>
												<title>External Link</title>
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
												<polyline points="15 3 21 3 21 9"></polyline>
												<line
													x1="10"
													y1="14"
													x2="21"
													y2="3"
												></line>
											</svg>
										</Link>
									) : (
										""
									)}
								</div>
							</div>
							<div
								className={`font-mono text-lg text-start w-full h-12 heading-text font-extrabold text-[#9f9f9f] `}
							>
								{`${project.project_name}-${project.text}`}
							</div>
							<div
								className={`font-mono h-24 text-start rounded-md text-[#6f6f6f] `}
							>
								{project.description}
							</div>
							<ul
								className={`flex flex-wrap flex-row gap-3 font-sans text-[13px] text-[#6f6f6f]`}
							>
								{project.tools.map((tool, index) => {
									return <li key={index}>{tool}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</ul>
			<div className="w-full h-24 flex justify-center items-center">
				<div
					onClick={() => {
						setshowmore(!showmore);
					}}
					className={`bg-white flex justify-center items-center font-sans sm:mt-7 mt-20 text-black  rounded-md lg:mr-28 mr-0 sm:w-44 w-32 text-md h-12 btn-style5`}
				>
					{showmore ? "Show Less" : "Show More"}
				</div>
			</div>
		</div>
	);
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";
import Image from "next/image";

const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });
const projects = [
	{
		id: 1,
		image_url: "/projects/ecommerce.jpg",
		text: "E-Commerce Web App using ReactJS and Django",
		heading: "ToolConnect",
		url: "https://github.com/Rohithk2003/toolConnect",
	},
	{
		id: 2,
		image_url: "/projects/passwordManager.jpg",
		text: "Password Manager using Python",
		heading: "One-Pass",
		url: "https://github.com/Rohithk2003/One-Pass",
	},
	{
		id: 3,
		image_url: "/projects/medical.jpg",
		text: "Web App for detecting Tumors using Deep Learning and Django",
		heading: "WebTumor",
		url: "https://github.com/Rohithk2003/webTumor",
	},
	{
		id: 4,
		image_url: "/projects/lungcancer.jpg",
		text: "Lung Cancer Prediction using Machine Learning",
		heading: "Lung Cancer Prediction",
		url: "https://github.com/Rohithk2003/LungCancerPrediction",
	},
	{
		id: 5,
		image_url: "/projects/music.jpg",
		text: "Youtube Video Downloader and Audio Converter using Python",
		heading: "Music Scraper Web App",
		url: "https://github.com/Rohithk2003/youtubeMusicScraper",
	},
	{
		id: 6,
		image_url: "/projects/leave.jpg",
		text: "Java based Software for Leave Management System",
		heading: "LeaveScape",
		url: "https://github.com/Rohithk2003/Leavescape",
	},
	{
		id: 7,
		image_url: "/projects/jet.jpg",
		text: "2-D Game using Pygame",
		heading: "Skyblaze",
		url: "https://github.com/Rohithk2003/Skyblaze",
	},
	{
		id: 8,
		image_url: "/projects/client.jpg",
		text: "Website for a client",
		heading: "Client Website",
		url: "https://aestheticdesigns.vercel.app",
	},
];
// function MediaCard({ text, heading, url, image_url }) {
// 	return (
// 	);
// }

export default function Project() {
	const [ref, inView, entry] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<div
			ref={ref}
			id={"about"}
			className={`${
				inView ? "pop-up animate-1" : "opacity-0"
			} h-max text-justify mt-28 lg:pt-36  flex flex-wrap justify-center lg:pl-[184px] md:pl-20     pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 pt-20  lg:pr-22 pr-0 `}
		>
			<div className="w-full min-h-20">
				<div className="flex flex-row gap-5  justify-start items-center ">
					<div
						className={`project-text  before:content-['03.'] text-[28px] after:md:w-[300px] after:w-[100px] after:md:left-[300px] after:left-[140px] font-bold `}
					>
						Some Things I&apos;ve Built
					</div>
				</div>
			</div>
			<div
				className={`flex flex-col flex-wrap xl:gap-2 xl:pt-0 mt-10 gap-3 pr-5 lg:justify-end justify-start  lg:items-end items-start  xl:w-2/3 w-full  h-full`}
			>
				<div
					className={`${sf.className} lg:text-xs text-md lg:text-end text-start w-full`}
				>
					Featured Project
				</div>
				<div
					className={`${ca.className} text-2xl lg:text-end text-star w-full mb-5 text-[#6f6f6f]`}
				>
					One Pass - Password Manager
				</div>
				<div
					className={`${ca.className} max-w-[400px]  bg-gray-800 text-[#7b8fac] p-6 lg:text-right text-start rounded-md `}
				>
					A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
					more. Available on Visual Studio Marketplace, Package Control, Atom
					Package Manager, and npm.
				</div>
				<ul
					className={`flex flex-wrap flex-row lg:gap-10 gap-7 p-5 lg:pr-0 pr-auto lg:pl-auto pl-0  ${sf.className} text-[13px] text-[#6f6f6f]`}
				>
					<li>Next.JS</li>
					<li>Django</li>
					<li>SQLite</li>
					<li>Tailwind CSS</li>
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
			</div>
		</div>
	);
}

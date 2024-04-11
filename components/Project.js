import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Link from "next/link"; //import this
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
function MediaCard({ text, heading, url, image_url }) {
	return (
		<Card
			sx={{
				width: 345,
				height: 300,
				borderRadius: "10px 10px 10px 10px",
				backgroundColor: "#222222",
				color: "white",
			}}
		>
			<CardMedia
				sx={{ height: 140 }}
				image={image_url}
				title="green iguana"
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
				>
					{heading}
				</Typography>
				<Typography
					variant="body2"
					className="h-10"
				>
					{text}
				</Typography>
			</CardContent>
			<CardActions className="flex ml-2 flex-row gap-4 w-32 h-8 rounded-lg  text-white">
				<div className="flex justify-center items-center bg-gray-400 w-10 h-10 rounded-full shadow-xl">
					<Link
						size="small"
						href={url}
					>
						{url.includes("vercel") ? (
							<i
								className="fa-solid fa-earth-americas"
								style={{
									color: "#1c4b97",
								}}
							></i>
						) : (
							<i
								className="fa-brands fa-github"
								style={{
									color: "#1c4b97",
								}}
							></i>
						)}
					</Link>
				</div>
			</CardActions>
		</Card>
	);
}

export default function Project() {
	useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");
		console.log("D");
		if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
			addAnimation();
		}
		function addAnimation() {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", true);
				const scrollerInner = scroller.querySelector(".scroller__inner");
				const scrollerContent = Array.from(scrollerInner.children);
				scrollerContent.forEach((item) => {
					const clone = item.cloneNode(true);
					clone.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(clone);
				});
			});
		}
	});

	return (
		<div
			id={"projects"}
			className="flex flex-col justify-center items-center md:h-[100vh] h-svh gap-10 md:p-20 p-10 "
		>
			<p className="text-2xl text-start text-[#454545] md:w-3/4 w-full ">
				Projects
			</p>
			<div className="flex flex-row md:p-5 p-0 gap-10 justify-center  items-center w-full">
				<div className="scroller ">
					<ul className="tag-list scroller__inner">
						{projects.map((project) => {
							return (
								<li key={project.id}>
									<MediaCard
										text={project.text}
										heading={project.heading}
										url={project.url}
										image_url={project.image_url}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

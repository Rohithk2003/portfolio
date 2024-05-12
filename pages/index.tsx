import Navbar from "@/components/navbar";
import Main from "@/components/main";
import About from "@/components/about";
import Footer from "@/components/footer";
import Project from "@/components/Project";
import Head from "next/head";
import LeftSidebar from "@/components/leftSIdebar";
import RightSidebar from "@/components/rightSidebar";
import OtherProjects from "@/components/otherProjects";
import { useEffect, useState } from "react";
import Whatsnext from "@/components/Whatsnext";
import Experience from "@/components/experience";
import Grid from "@/components/grid";

export default function Home() {
	const [title, setTitle] = useState("Web Developer | Rohith Krishnan");

	const [overlayVisible, setOverlayVisible] = useState(true);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Portfolio of Rohith Krishnan, showcasing engineering projects and achievements."
				/>
				<meta
					name="keywords"
					content="Rohith Krishnan, engineer, portfolio, projects, achievements"
				/>
				<meta
					name="author"
					content="Rohith Krishnan"
				/>
				<meta
					name="robots"
					content="index,follow"
				/>
				<link
					rel="canonical"
					href="https://rohithk.engineer"
				/>

				<meta
					property="og:title"
					content={title}
				/>
				<meta
					property="og:description"
					content="Portfolio of Rohith Krishnan, showcasing engineering projects and achievements."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://rohithk.engineer"
				/>
				<meta
					property="og:image"
					content="https://www.rohithk.engineer/images/profile.jpg"
				/>

				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:site"
					content="@reidd_777"
				/>
				<meta
					name="twitter:title"
					content="Rohith Krishnan - Portfolio"
				/>
				<meta
					name="twitter:description"
					content="Portfolio of Rohith Krishnan, showcasing engineering projects and achievements."
				/>
				<meta
					name="twitter:image"
					content="https://rohithk.engineer/your-image.jpg"
				/>
			</Head>
			<Navbar />
			<div
				className={`w-[100%] h-[100%] ${
					overlayVisible ? "opacity-1" : "opacity-0 hidden"
				} flex justify-center items-center  z-[2000] fixed  transition duration-300 ease-in-out top-0 left-0 bg-transparent`}
			>
				<div className={"w-24 h-24"}>
					<svg
						id="logo"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						viewBox="0 0 84 96"
						onAnimationEnd={() => {
							setOverlayVisible(false);
						}}
						className={`  w-24 h-24 first-animation text-white font-bold`}
					>
						<title>Logo</title>
						<g transform="translate(-8.000000, -2.000000)">
							<g transform="translate(11.000000, 5.000000)">
								<polygon
									id="Shape"
									stroke="currentColor"
									strokeWidth="5"
									strokeLinecap="round"
									strokeLinejoin="round"
									points="39 0 0 22 0 67 39 90 78 68 78 23 "
								></polygon>

								<text
									x="26"
									y="57"
									id={"name-text"}
									fill="currentColor"
									fontSize="40"
									fontFamily="Roboto"
									fontWeight={"1000"}
								>
									R
								</text>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className={"flex relative z-[900]"}>
				<div className={"w-[5%] md:block hidden"}>
					<LeftSidebar />
				</div>
				<div
					className={"md:w-[90%] h-[500vh] w-full text-white bg-transparent"}
				>
					<Main />
					<About />
					<Experience />
					<Project />
					<OtherProjects />
					<Whatsnext />
					<Footer />
				</div>
				<div className={"w-[5%] md:block hidden"}>
					<RightSidebar />
				</div>
			</div>
			<Grid />
		</>
	);
}

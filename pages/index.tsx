import Navbar from "@/components/navbar";
import Script from "next/script";
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

export default function Home() {
	const [title, setTitle] = useState("Web Developer | Rohith Krishnan");
	useEffect(() => {});
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<div className={"flex "}>
				<div className={"w-[5%] md:block hidden"}>
					<LeftSidebar />
				</div>
				<div className={"md:w-[90%] h-[500vh] w-full text-white bg-black"}>
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
			<Script
				src="https://kit.fontawesome.com/93a493583b.js"
				crossOrigin="anonymous"
			></Script>
		</>
	);
}

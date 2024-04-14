import Navbar from "@/components/navbar";
import Script from "next/script";
import Main from "@/components/main";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";
import ContactDetails from "@/components/contact";
import Footer from "@/components/footer";
import Project from "@/components/Project";
import Head from "next/head";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
export default function Home() {
	const [title, setTitle] = useState("Hello there fellow Coder");
	useEffect(() => {
		setTimeout(() => {
			if (title === "Hello there fellow Coder!")
				setTitle("Welcome to my Portfolio!");
			else setTitle("Hello There Fellow Coder");
		}, 2000);
	});
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{/* <Navbar /> */}
			{/* <Main /> */}
			{/* <About /> */}
			{/* <Project /> */}
			{/* <Services /> */}
			{/* <Skills/> */}
			{/* <ContactDetails /> */}
			{/* <Footer /> */}
			<Sidebar />
			<Script
				src="https://kit.fontawesome.com/93a493583b.js"
				crossOrigin="anonymous"
			></Script>
		</>
	);
}

import Image from "next/image";
// import profile from '../public/profile.jpg'
import { Inter } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const inter = Inter({
	subsets: ["latin"],
	weights: [300],
});
export default function Main() {
	const el = useRef(null);
	// useEffect(() => {
	// 	const typed = new Typed(el.current, {
	// 		strings: [
	// 			"Hi , I am Rohith Krishnan",
	// 			" Based in India.",
	// 			"I'm a web-developer and ML enthusiast.",
	// 		],
	// 		typeSpeed: 50,
	// 		startDelay: 1500,
	// 		loop: true,
	// 		backSpeed: 50,
	// 	});

	// 	return () => {
	// 		typed.destroy();
	// 	};
	// }, []);
	return (
		<div
			id={"home"}
			className={`home flex bg-black flex-wrap  flex-col w-full h-dvh gap-3 md:gap-15!  pr-0  md:pl-44 sm:pl-14 pl-5 md:p-20 sm:p-14 p-5`}
		>
			<div className="md:h-3 h-6 w-full text-gray-300 sf-mono-text ">
				Hi, my name is
			</div>
			<div className="home-name text-white calibre-font md:text-7xl sm:text-6xl xs:text-5xl text-2xl font-bold">
				Rohith Krishnan
			</div>
			<div className="home-sub-text calibre-font md:text-7xl sm:text-6xl xs:text-5xl text-xl font-bold text-gray-300">
				I build things for the web
			</div>
			<div className="home-text md:w-1/2 sm:w-2/3 w-full text-gray-400 font-[400]  calibre-font md:text-[20px] text-[17.5px] pr-5">
				I&apos;m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I&apos;m a
				student at Amrita Vishwa Vidyapeetham based in India.
			</div>
			<button class="bg-white sf-mono-font text-black rounded-md sm:w-44 w-32 text-xl h-12 btn-style5">
				Say Hello!
			</button>
		</div>
	);
}

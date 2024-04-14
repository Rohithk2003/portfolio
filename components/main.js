import Image from "next/image";
// import profile from '../public/profile.jpg'
import { Inter } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import localFont from "next/font/local";
const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });
const inter = Inter({
	subsets: ["latin"],
	weights: [300],
});
export default function Main() {
	return (
		<div
			id={"home"}
			className={`home pop-up md:animate-9 animate-2 flex bg-black flex-wrap  flex-col w-full h-dvh xs:gap-3 gap-6 md:gap-15! lg:gap-12  md:pl-44 sm:pl-14 pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 pt-20  pr-2 `}
		>
			<div
				className={`md:h-3 md:mb-0 mb-6 md:mt-0 mt-11 h-6 w-full md:pl-0 pl-1 text-gray-300 ${sf.className}`}
			>
				Hi, my name is
			</div>
			<div
				className={`home-name text-white  md:text-8xl sm:text-7xl text-6xl font-bold ${ca.className} `}
			>
				Rohith Krishnan
			</div>
			<div
				className={`home-sub-text calibre-font md:text-8xl sm:text-7xl xs:text-6xl text-5xl font-bold text-gray-300 ${ca.className}`}
			>
				I build things for the web
			</div>
			<div
				className={`md:pl-0 pl-1 home-text md:w-1/2 sm:w-2/3 w-full text-gray-400 font-[400]  calibre-font text-[20px] pr-5 ${ca.className}`}
			>
				I&apos;m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I&apos;m a
				student at Amrita Vishwa Vidyapeetham based in India.
			</div>
			<button
				className={`bg-white ${sf.className} sm:mt-0 mt-20 text-black md:ml-0 ml-1 rounded-md sm:w-44 w-32 text-md h-12 btn-style5`}
			>
				Say Hello!
			</button>
		</div>
	);
}

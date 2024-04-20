import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useRef } from "react";
import PocketBase from "pocketbase";
import Typed from "typed.js";
const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });
const inter = Inter({
	subsets: ["latin"],
	weights: [300],
});

export default function Main() {
	const el = useRef();
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Rohith Krishnan"],
			typeSpeed: 50,
			startDelay: 4100,
			backSpeed: 50,
		});

		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div
			id={"home"}
			className={`home pop-up md:mt-16 mt-16 animate-16 flex bg-black flex-wrap  flex-col w-full h-dvh xs:gap-5 gap-6 md:gap-9 lg:gap-4 2xl:gap-7 lg:pl-44 md:pl-20     pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 md:pt-20 pt-14  pr-2 `}
		>
			<div
				className={`md:h-3 md:mb-6 mb-6 2xl:text-3xl md:mt-7 mt-11 h-6 w-full md:pl-0 pl-1 text-gray-300 font-sans`}
			>
				Hi, my name is
			</div>
			<div
				className={`home-name text-white 2xl:text-9xl md:text-7xl sm:text-7xl text-6xl font-extrabold font-mono `}
			>
				<span ref={el} />
			</div>
			<div
				className={`home-sub-text font-mono 2xl:text-9xl md:text-7xl sm:text-7xl xs:text-6xl text-5xl font-extrabold text-gray-300 `}
			>
				I build things for the web
			</div>
			<div
				className={`md:pl-0 pl-1 home-text 2xl:w-3/4 md:w-1/2 sm:w-2/3 w-full text-gray-400 font-[400] 2xl:text-[25px] text-[20px] pr-5 font-mono`}
			>
				I&apos;m a software engineer specializing in building exceptional
				digital experiences. Currently, I&apos;m a student at Amrita Vishwa
				Vidyapeetham.Passionate to develop websites with engineering and design
				principles.
			</div>
			<div
				className={`bg-white flex justify-center items-center font-sans sm:mt-7 mt-4 text-black md:ml-0 ml-1 rounded-md sm:w-44 w-32 text-md h-12 btn-style5`}
			>
				<Link href={"mailto:@rohithk652@gmail.com"}>Say Hello!</Link>
			</div>
		</div>
	);
}

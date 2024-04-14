import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300"],
});

export default function Navbar() {
	const [HamStatus, setHamButtonStatus] = useState(false);
	const [NavItemClicked, setNavItemStatus] = useState(false);
	const [activeIdx, setActiveIdx] = useState(-1);
	const [topBarVisible, setTopBarVisibility] = useState(false);

	function handleHamButtonClick() {
		setHamButtonStatus(!HamStatus);
		setTopBarVisibility(!topBarVisible);
	}

	function handleNavItemClicking() {
		setNavItemStatus(!NavItemClicked);
	}

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};
	return (
		<div className="w-[100vw]! overflow-hidden">
			<nav
				className={`flex w-[100vw] h-28 z-[500] justify-between px-10 bg-black text-white relative items-center`}
			>
				<div className="w-1/2 h-28 flex  justify-start items-center">
					<div className={"w-10 h-10  "}>
						<svg
							id="logo"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							viewBox="0 0 84 96"
							className={`${roboto.className}  w-10 h-10 text-white font-bold`}
						>
							<title>Logo</title>
							<g transform="translate(-8.000000, -2.000000)">
								<g transform="translate(11.000000, 5.000000)">
									<polygon
										id="Shape"
										stroke="currentColor"
										strokeWidth="7"
										strokeLinecap="round"
										strokeLinejoin="round"
										points="39 0 0 22 0 67 39 90 78 68 78 23 "
									></polygon>

									<text
										x="26"
										y="57"
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
				<div className="lg:w-1/2 w-2/3 md:block  hidden h-28 nav-items text-md">
					<div className="flex flex-row gap-14 h-28 ffff justify-center items-center">
						<div className="">
							01. <span className="nav-item">About</span>
						</div>
						<div className="">
							02 <span className="nav-item">Experience</span>
						</div>
						<div className="">
							03. <span className="nav-item">Work</span>
						</div>
						<div className="">
							04. <span className="nav-item">Contact</span>
						</div>
						<button class="bg-white text-black rounded-md w-28  h-10 btn-style5">
							Resume
						</button>
					</div>
				</div>
				<div
					className={`md:hidden z-[1000]! flex  align-middle w-full top-5 right-5 mr-2 justify-end m-auto `}
				>
					<div
						className={" grid ml-2 grid-rows-3w z-[999]!"}
						onClick={handleHamButtonClick}
					>
						<span
							className={`rotate-[180deg] w-7 h-1 mb-1 bg-white  ease-in-out ${
								HamStatus ? "top-5 hidden" : ""
							}`}
						></span>
						<span
							className={`rotate-[180deg] w-6  h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
								HamStatus ? "top-5 rotate-45 translate-y-[8px] w-7" : ""
							}`}
						></span>
						<span
							className={`rotate-[360deg] origin-right w-4 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
								HamStatus ? "top-5 rotate-[-45deg] translate-y-[0px] w-7" : ""
							}`}
						></span>
					</div>
				</div>
			</nav>
			<div className={`${topBarVisible ? "overlay" : ""}`}></div>
			<div
				className={`top-0 right-0 md:hidden block fixed transition-all w-56 duration-300 ease-in-out h-[100vh] bg-black text-white z-[998] ${
					topBarVisible ? "left-0" : "left-[-100%]"
				}`}
			>
				<div
					className="w-full  h-32 p-5 flex justify-end "
					onClick={handleHamButtonClick}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 text-gray-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
				<ul className="sf-mono-text flex flex-col justify-between items-center h-2/3 mb-10 pb-10">
					<li className=" flex flex-col justify-center items-center text-center">
						<span>01.</span> <span className="">About</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>02</span> <span className="">Experience</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>03.</span> <span className="">Work</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>04.</span> <span className="">Contact</span>
					</li>
					<li>
						<button class="bg-white text-black rounded-md w-28  h-10 btn-style5">
							Resume
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

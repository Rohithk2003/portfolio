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
		<nav
			className={`flex w-full h-28 z-[1000] justify-between px-10 bg-black text-white relative items-center`}
		>
			<div className="w-1/2 h-28 flex justify-start items-center">
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
			<div className="w-1/2 md:block hidden h-28 nav-items text-md">
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
				className={`md:hidden flex  align-middle w-full top-5 right-5 mr-2 justify-end m-auto `}
			>
				<a
					className={" grid ml-2 grid-rows-3w"}
					onClick={handleHamButtonClick}
				>
					<span
						className={`rotate-[180deg] w-7 h-1 mb-1 bg-white  ease-in-out ${
							HamStatus ? "top-5 hidden" : ""
						}`}
					></span>
					<span
						className={`rotate-[180deg] w-6  h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
							HamStatus ? "top-5 rotate-45 translate-y-[8px]" : ""
						}`}
					></span>
					<span
						className={`rotate-[360deg] origin-right w-4 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
							HamStatus ? "top-5 rotate-[-45deg] translate-y-[0px]" : ""
						}`}
					></span>
				</a>
			</div>
			<div
				className={` ${
					topBarVisible ? "translate-x-[-6%]" : "translate-x-[-150%]"
				} w-full h-[120vh] bg-white transition-all duration-300 ease-in-out translate-y-[44%] text-[#454545]  fixed z-[3000]`}
			>
				<div
					className="mt-10  font-bold ml-10 text-4xl"
					onClick={() => {
						setTopBarVisibility(!topBarVisible);
						setHamButtonStatus(!HamStatus);
					}}
				>
					Close
				</div>
				<ul
					className={`flex md:hidden w-full mt-[200px] h-[400px] fixed z-[999] gap-2 flex-col justify-center items-center `}
				>
					{" "}
					<il className="w-full text-3xl flex justify-center  items-center rounded hover:text-white transition-all duration-300 ease-in-out   h-16  ">
						About
					</il>
					<Link href={"#projects"}>
						<li
							className={
								"w-full text-3xl flex justify-center  items-center rounded hover:text-white transition-all duration-300 ease-in-out   h-16  "
							}
						>
							Projects
						</li>
					</Link>
					<Link
						onClick={() => {
							setTopBarVisibility(!topBarVisible);
							setHamButtonStatus(!HamStatus);
						}}
						href={""}
					>
						<li
							className={
								"w-full text-3xl flex justify-center  items-center rounded hover:text-white transition-all duration-300 ease-in-out   h-16  "
							}
						>
							Github
						</li>
					</Link>
					<Link
						onClick={() => {
							setTopBarVisibility(!topBarVisible);
							setHamButtonStatus(!HamStatus);
						}}
						href={""}
					>
						<li
							className={
								"w-full text-3xl flex justify-center  items-center rounded hover:text-white transition-all duration-300 ease-in-out   h-16  "
							}
						>
							Linkedin
						</li>
					</Link>
					<Link
						onClick={() => {
							setTopBarVisibility(!topBarVisible);
							setHamButtonStatus(!HamStatus);
						}}
						href={"#projects"}
					>
						<li
							className={
								"w-full text-3xl flex justify-center  items-center rounded hover:text-white transition-all duration-300 ease-in-out   h-16  "
							}
						>
							Projects
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

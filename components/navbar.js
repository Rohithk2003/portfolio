import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({
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

	return (
		<nav
			className={`flex w-full justify-center ${
				scrolled ? "h-16" : "h-24"
			} items-center`}
		>
			<div
				className={` ${
					scrolled ? "w-full rounded-none " : "w-3/4 rounded-full"
				} navbar fixed h-16 flex justify-between   transition-all duration-300 ease-in-out items-center p-2 pl-5   z-[2000] bg-[#222222] ${
					inter.className
				}`}
			>
				<div className="md:w-10 md:h-10 w-9 h-9 rounded-full  transition-all duration-300 p-3 bg-white flex justify-center items-center overflow-hidden">
					<Image
						src="/images/menu.png"
						alt="menu"
						width={24}
						className="absolute"
						height={24}
					/>
				</div>
				<ul
					className={
						"md:flex hidden flex-row pr-10 text-white  justify-center gap-10 items-center"
					}
				>
					<il className="hover:text-[#585858] hover:cursor-pointer">
						<Link href="#about">About</Link>
					</il>
					<li className="e">
						<Link href="#projects">Projects</Link>
					</li>
					<li className="w-2  h-10 b-white text-white flex justify-center items-center">
						<span className="w-[3px] border-0 outline-none h-6 bg-white text-white">
							|
						</span>
					</li>
					<li className="flex flex-row gap-2 justify-center items-center text-white nav-items w-10 hover:w-20 transition-all duration-300 ease-in-out">
						Twitter
						<Link
							href="https://twitter.com/reidd_777"
							className="w-4 h-4 mb-4 "
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 12 12"
								aria-hidden="true"
								class="flex-none mt-2 stroke-current"
							>
								<path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
								<path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
							</svg>
						</Link>
					</li>

					<li className="flex flex-row gap-2 justify-center items-center text-white nav-items w-10 hover:w-20 transition-all duration-300 ease-in-out">
						Github
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4 mb-4 "
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 12 12"
								aria-hidden="true"
								class="flex-none mt-2 stroke-current"
							>
								<path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
								<path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
							</svg>
						</Link>
					</li>
					<li className="flex flex-row gap-2 justify-center items-center text-white nav-items w-10 hover:w-24 transition-all duration-300 ease-in-out">
						<span>Linkedin</span>
						<Link
							href="https://www.linkedin.com/in/rohith-krishnan-645137262/"
							className="w-4 h-4 mb-4 "
						>
							<svg
								fill="none"
								stroke="currentColor"
								viewBox="0 0 12 12"
								aria-hidden="true"
								class="flex-none mt-2 stroke-current"
							>
								<path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
								<path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
							</svg>
						</Link>
					</li>
				</ul>
				<div
					className={`md:hidden flex  align-middle w-full top-5 right-5 mr-2 justify-end m-auto `}
				>
					<a
						className={" grid ml-2 grid-rows-3w"}
						onClick={handleHamButtonClick}
					>
						<span
							className={`w-7 h-1 mb-1 bg-white  ease-in-out ${
								HamStatus ? "top-5 hidden" : ""
							}`}
						></span>
						<span
							className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
								HamStatus ? "top-5 rotate-45 translate-y-[8px]" : ""
							}`}
						></span>
						<span
							className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
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
			</div>
		</nav>
	);
}

import Link from "next/link";
import React, { useState } from "react";
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

	return (
		<nav className="flex w-full justify-center md:h-24 h-16 items-center">
			<div
				className={` md:w-3/4 w-full md:rounded-full rounded-none navbar fixed h-16 flex justify-between items-center p-2 pl-5   z-[2000] bg-[#222222] ${inter.className}`}
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
					<li className="hover:text-white">
						<Link href="https://twitter.com/reidd_777">Twitter</Link>
					</li>
					<li className="hover:text-white">
						<Link href="https://github.com/Rohithk2003">Github</Link>
					</li>
					<li className="hover:text-white">
						<Link href="https://www.linkedin.com/in/rohith-krishnan-645137262/">
							Linkedin
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
						topBarVisible ? "translate-x-[-17%]" : "translate-x-[-150%]"
					} w-full h-[100vh] bg-white transition-all duration-300 ease-in-out translate-y-[44%] text-[#454545]  fixed z-[3000]`}
				>
					<div
						className="mt-10 font-bold ml-10 text-4xl"
						onClick={() => {
							setTopBarVisibility(!topBarVisible);
							setHamButtonStatus(!HamStatus);
						}}
					>
						Close
					</div>
					<ul
						className={`flex md:hidden w-full h-[400px] fixed z-[999] gap-2 flex-col justify-center items-center `}
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

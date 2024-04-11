import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";

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
		<nav>
			<div
				className={` w-full  h-16 flex justify-end align-middle   z-[999] bg-[#000000] ${inter.className}`}
			>
				<ul
					className={
						"md:flex hidden flex-row md:w-1/4 w-2/4 text-[#595959] mr-20  justify-center gap-10 items-center"
					}
				>
					<li className="hover:text-white">Github</li>
					<li className="hover:text-white">Linkedin</li>
					<li className="hover:text-white">
						<Link href="#projects">Projects</Link>
					</li>
				</ul>
				<div
					className={`md:hidden flex z-[1000]  order-0 align-middle w-full ${HamStatus ? "fixed" : "absolute"} top-5  justify-start m-auto `}
				>
					<a
						className={" grid ml-2 grid-rows-3w"}
						onClick={handleHamButtonClick}
					>
						<span
							className={`w-7 h-1 mb-1 bg-white  ease-in-out ${HamStatus ? "top-5 hidden" : ""}`}
						></span>
						<span
							className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? "top-5 rotate-45 translate-y-[8px]" : ""}`}
						></span>
						<span
							className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? "top-5 rotate-[-45deg] translate-y-[0px]" : ""}`}
						></span>
					</a>
				</div>
				<div
					className={` ${topBarVisible ? "translate-x-0" : "translate-x-[-150%]"} w-full h-[100vh] bg-black transition-all duration-300 ease-in-ou text-[#454545]  fixed z-[999]`}
				>
					<ul
						className={`flex md:hidden w-full h-[100vh] fixed z-[999] gap-2 flex-col justify-center items-center `}
					>
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

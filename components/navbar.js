import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300"],
});

export default function Navbar() {
	const [HamStatus, setHamButtonStatus] = useState(false);
	const [NavItemClicked, setNavItemStatus] = useState(false);
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

	useEffect(() => {
		const navbar = document.getElementsByClassName("navbar")[0];
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				navbar.style.top = "0";
			} else {
				navbar.style.top = "-150px";
			}
			prevScrollpos = currentScrollPos;
		};
	});

	return (
		<div className="w-[100vw]! overflow-hidden relative z-[902]">
			<nav
				className={`flex w-full fixed navbar backdrop-blur-lg h-24 transition-all duration-300 ease-in-out z-[500] justify-between md:px-10 px-4 md:pb-0 pb-6 bg-transparent text-white  items-center`}
			>
				<div className="w-1/6 h-28 flex  justify-start items-center pop-up animate-6">
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
										id={"name-text"}
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
				<div
					className={`font-sans w-max md:block  hidden h-28 nav-items text-md `}
				>
					<div className="flex flex-row gap-14 h-28 ffff justify-center items-center">
						<div className="flex flex-row gap-1 slide-down animate-8">
							<span>01. </span>
							<div className="nav-item ">
								<Link href={"#about"}>About</Link>
							</div>
						</div>
						<div className="flex flex-row gap-1 slide-down animate-9">
							<span>02. </span>
							<div className="nav-item ">
								<Link href={"#experience"}>Experience</Link>
							</div>
						</div>
						<div className="flex flex-row gap-1 slide-down animate-10">
							<span>03. </span>
							<div className="nav-item ">
								<Link href="#project">Work</Link>
							</div>
						</div>
						<div className="flex flex-row gap-1 slide-down animate-11">
							<span>04. </span>
							<div className="nav-item ">
								<Link href={"#contact"}>Contact</Link>
							</div>
						</div>
						<div className="bg-white text-center  align-middle flex  justify-center items-center text-black rounded-md w-24  h-10 btn-style5 slide-down animate-12">
							<Link href="https://flowcv.com/resume/34p8i21ase">Resume </Link>
						</div>
					</div>
				</div>
				<div
					className={`md:hidden z-[1000]! flex  align-middle w-full top-0 right-0 mr-2 justify-end m-auto `}
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
								HamStatus ? "top-5 hidden" : ""
							}`}
						></span>
						<span
							className={`rotate-[360deg] origin-right w-4 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${
								HamStatus ? "top-5 hidden" : ""
							}`}
						></span>
					</div>
				</div>
			</nav>
			<div
				onClick={handleHamButtonClick}
				className={`${topBarVisible ? "overlay" : ""} md:hidden block`}
			></div>
			<div
				className={`top-0 right-0 md:hidden block fixed transition-all w-56 duration-300 ease-in-out h-[100vh] bg-transparent text-white z-[998] ${
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
				<ul
					className={`font-sans flex flex-col justify-between items-center h-2/3 mb-10 pb-10`}
				>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>01.</span>
						<span className="">
							<Link
								legacyBehavior
								href={"#about"}
							>
								<a onClick={handleHamButtonClick}>About</a>
							</Link>
						</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>02</span>{" "}
						<span className="">
							<Link
								legacyBehavior
								href={"#experience"}
							>
								<a onClick={handleHamButtonClick}>Experience</a>
							</Link>
						</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>03.</span>{" "}
						<span className="">
							<Link
								legacyBehavior
								href="#project"
							>
								<a onClick={handleHamButtonClick}>Work</a>
							</Link>
						</span>
					</li>
					<li className=" flex flex-col justify-center items-center text-center">
						<span>04.</span>{" "}
						<span className="">
							<Link
								legacyBehavior
								href={"#contact"}
							>
								<a onClick={handleHamButtonClick}>Contact</a>
							</Link>
						</span>
					</li>
					<li>
						<div className="bg-white flex justify-center items-center text-black rounded-md w-24  h-10 btn-style5">
							<Link href="https://flowcv.com/resume/34p8i21ase">Resume </Link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

import { Inter } from "next/font/google";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });

const inter = Inter({
	subsets: ["latin"],
	weight: ["300"],
});
export default function Experience() {
	const [ref, inView, entry] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	const [active, setactive] = useState(true);

	return (
		<div
			ref={ref}
			id={"about"}
			className={`${
				inView ? "slide-up-down" : "opacity-0"
			} h-max text-justify mt-28 lg:pt-36  flex flex-wrap justify-center lg:pl-[184px] md:pl-20     pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 pt-20  pr-22 `}
		>
			<div className="w-full h-20">
				<div className="flex flex-row gap-5 justify-start items-center ">
					<div
						className={`about-text  before:content-['02.'] text-[28px] after:md:w-[300px] after:w-[100px] after:md:left-[170px] after:left-[140px] font-bold `}
					>
						Experience
					</div>
				</div>
			</div>
			<div
				className={`flex flex-row flex-wrap xl:gap-0 gap-10 justify-center  items-center  w-full h-full`}
			>
				<div
					className={`${sf.className} lg:w-1/3 w-full h-full text-start font-mono text-[20px] text-[#767676] flex flex-col gap-2`}
				>
					<ul className="flex lg:flex-col flex-row h-full justify-start md:w-[250px] w-full ">
						<li
							className={`text-white pl-2 h-10 text-center flex justify-center items-center  text-[16px] transition-all duration-300 ease-in-out hover:bg-[#222222]  ${
								active ? "border-l-[1px] border-white" : ""
							}`}
						>
							ACM Research Intern
						</li>
					</ul>
				</div>
				<div
					className={`lg:w-2/3 w-full h-full flex justify-start flex-col gap-4 items-start ${ca.className}`}
				>
					<div className="text-2xl font-bold flex flex-row gap-2">
						<span className="text-[#767676]">Research Intern</span>{" "}
						<span>@</span>
						<span className="text-white">ACM Amritapuri</span>
					</div>
					<div className={`${sf.className}`}>Sept 2023 - Feb 2024</div>
					<ul className={`${ca.className} skills text-lg `}>
						<li>
							I&apos;ve authored a research paper on &quot;SQL Query Processing
							using Matrix Factorization and Query Recommendation&quot;,
							showcasing my expertise in this area.
						</li>
						<li>
							During my internship, I collaborated with professors and
							researchers, contributing to innovative projects in database
							management. My work reflects my dedication to solving complex
							problems and my ability to communicate technical concepts
							effectively.
						</li>
						<li>
							Excited to continue exploring new frontiers in research and
							technology, I&apos;m eager to contribute to transformative
							projects and expand my skills as an ACM Research Intern.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

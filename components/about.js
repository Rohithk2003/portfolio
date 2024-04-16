import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";
import Image from "next/image";

const sf = localFont({ src: "./sf.otf" });
const ca = localFont({ src: "./ca.otf" });

export default function About() {
	const [ref, inView, entry] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<div
			ref={ref}
			id={"about"}
			className={`${
				inView ? "pop-up animate-1" : "opacity-0"
			} h-max text-justify mt-28 lg:pt-36  flex flex-wrap justify-center lg:pl-[184px] md:pl-20     pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 pt-20  pr-22 `}
		>
			<div className="w-full h-20">
				<div className="flex flex-row gap-5 justify-start items-center ">
					<div
						className={`about-text  before:content-['01.'] text-[28px] after:md:w-[300px] after:w-[100px] after:md:left-[170px] after:left-[140px] font-bold `}
					>
						About Me
					</div>
				</div>
			</div>
			<div
				className={`flex flex-row flex-wrap xl:gap-0 gap-10 justify-center  items-center  w-full h-full`}
			>
				<div
					className={`${ca.className} lg:w-1/2 w-full h-full text-start font-mono text-[17px] text-[#767676] flex flex-col gap-5`}
				>
					<div>
						Hello I&apos;m Rohith, a passionate frontend developer based in
						Poland, with over 4 years of commercial experience. Specializing in
						end-to-end development, I focus on crafting seamless user
						experiences through innovative solutions.
					</div>
					<div className={"2"}>
						My development roots are in
						<span
							className={
								"text-white pl-1.5 hover:underline transition-all duration-300 ease-in-out"
							}
						>
							React
						</span>
						,
						<span
							className={
								"text-white pr-1.5 hover:underline transition-all duration-300 ease-in-out"
							}
						>
							{" "}
							Next.js
						</span>
						,
						<span
							className={
								"text-white pr-1.5 hover:underline transition-all duration-300 ease-in-out"
							}
						>
							Django
						</span>
						and in general anything JavaScript related in React ecosystem.
					</div>
					<div className={""}>
						I&apos;m passionate about studying design principles to enhance user
						experiences across all my projects.
					</div>
					<div>
						Here are a few technologies I&apos;ve been working with recently:
					</div>
					<ul className={"grid grid-cols-2 skills"}>
						<li>JavaScript (ES6+)</li>
						<li> Python</li>
						<li> React</li>
						<li> Django</li>
						<li> Postgres</li>
						<li> C++</li>
					</ul>
				</div>
				<div className={`w-1/2 h-full flex justify-center items-center`}>
					<div className={"w-56 h-56 object-fit relative ease-in-out"}>
						<div className={"relative image-overlay ease-in-out"}>
							<div
								className={
									"w-56 h-52 transition-all duration-300 ease-in-out z-50 bg-white  absolute opacity-[0.1] hover:opacity-0 "
								}
							></div>
							<Image
								src={"/images/profile.jpg"}
								alt={"profile"}
								className={
									"absolute z-30 w-56 hover:-translate-x-1 hover:-translate-y-1 object-cover"
								}
								width={200}
								height={200}
							/>
						</div>
						<div
							className={
								"w-56 h-56 bg-transparent border-2  border-white z-9 translate-x-[14px] translate-y-[2px] border-profile"
							}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

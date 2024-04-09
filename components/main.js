import Image from "next/image";
// import profile from '../public/profile.jpg'
import { Inter } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const inter = Inter({
	subsets: ["latin"],
	weights: [300],
});
export default function Main() {
	const el = useRef(null);
	// useEffect(() => {
	// 	const typed = new Typed(el.current, {
	// 		strings: [
	// 			"Hi , I am Rohith Krishnan <br> Based in India. <br> I'm a web-develop and ML enthusiast.",
	// 		],
	// 		typeSpeed: 50,
	// 		backSpeed: 50,
	// 	});

	// 	return () => {
	// 		typed.destroy();
	// 	};
	// }, []);
	// const text = "Rohith Krishnan";
	return (
		<div
			id={"home"}
			className={` flex flex-wrap flex-row text-white      w-full bg-[#000000]   h-[100vh] ${inter.className}`}
		>
			<div className={"w-2/3 flex justify-center gap-4 items-center flex-col"}>
				<div className={"flex justify-start w-1/2"}>
					<div
						className={
							"w-24 h-24  rounded-full overflow-hidden object-bottom relative "
						}
					>
						<Image
							m
							run
							dev
							src={"/portfolio/main.png"}
							alt={"profile_photo w-full h-full"}
							style={{
								objectFit: "cover",
								objectPosition: "bottom",
							}}
							width={128}
							height={128}
						></Image>
					</div>
				</div>
				<div className={"text-xl text-start w-1/2 flex justify-start"}>
					Hi, I am Rohith
				</div>
				<div className={"flex flex-col w-1/2 text-[#454545] mt-3"}>
					<span>
						A Software Developer who develops well-architected applications.
					</span>
					<span>
						Passionate to develop them with engineering and design principles.
					</span>
				</div>
				<div className={" w-1/2 text-[#454545] "}>
					Currently working on{" "}
					<span className={"text-white"}>
						being a better person and a developer
					</span>
				</div>
				<div
					className={"text-lg text-white text-start w-1/2 flex justify-start"}
				>
					Top Skills
				</div>
				<ul
					className={
						"flex flex-row gap-4 text-[#585858] flex-wrap w-1/2 justify-start items-center"
					}
				>
					<li>Next.js</li>
					<li>Django</li>
					<li>PostgresSQL</li>
					<li>Machine Learning</li>
					<li>Git</li>
				</ul>
				<div
					className={"text-lg text-white text-start w-1/2 flex justify-start"}
				>
					Top Languages
				</div>
				<ul
					className={
						"flex flex-row gap-4 text-[#585858] flex-wrap w-1/2 justify-start items-center"
					}
				>
					<li>Python</li>
					<li>C++</li>
					<li>Java</li>
				</ul>
			</div>
		</div>
	);
}

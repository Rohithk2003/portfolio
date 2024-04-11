import { Inter } from "next/font/google";
import { useInView } from "react-intersection-observer";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300"],
});
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
				inView ? "slide-in-left opacity-1" : "opacity-0"
			} h-max md:p-20 p-10 text-justify pt-[-100px] lg:pt-36  bg-black flex flex-wrap justify-center ${
				inter.className
			}`}
		>
			`
			<div
				className={
					"w-full lg:w-3/4 h-full   flex flex-col justify-center flex-wrap "
				}
			>
				<div className={"w-full mb-2"}>
					<h4 className={"text-[#454545] "}>About me </h4>
					<div className={"w-44  border-b border-b-white text-[#ef6c50]"}></div>
				</div>
				<div className={"w-full text-md text-white"}>
					<div className={"w-full mb-4 font-bold text-lg lg:text-2xl"}>
						You {`can't`} use up creativity. The more you use, the more you have
						in your significant mind.
					</div>
					<div className={"md:text-xl text-lg text-[#454545]  w-full"}>
						Dedicated student with a strong passion for coding, particularly in
						web development and machine learning. Skilled at using the latest
						technologies to create innovative software. Committed to continuous
						learning and professional growth, staying updated with the latest
						industry trends and best practices. Driven by curiosity and a desire
						to push the boundaries of what&apos;s possible through code.
					</div>
				</div>
			</div>
		</div>
	);
}

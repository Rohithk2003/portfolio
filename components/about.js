import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300"],
});
export default function About() {
	return (
		<div
			id={"about"}
			className={`h-max p-10 pt-[-300px] lg:pt-44  bg-black flex flex-wrap justify-center ${inter.className}`}
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
						As a student with passion for programming, I am committed to
						developing skills and knowledge to build a successful foundation in
						computer science and programming concepts and I am always eager to
						learn and grow my abilities, I am driven by a desire to create
						practical solutions to complex problems and am dedicated to
						delivering high-quality results. I am motivated by the endless
						possibilities of programming and the potential to create innovative
						solutions that positively impact
						{` people's`} lives.
					</div>
				</div>
			</div>
		</div>
	);
}

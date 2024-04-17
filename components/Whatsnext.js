import Link from "next/link";
export default function Whatsnext() {
	return (
		<div className="w-full  h-max text-justify  flex flex-wrap md:mt-0 mt-14 lg:pl-[184px] md:pl-20   md:p-20 sm:p-0 p-5  sm:pt-0 pt-20   sm:pr-0 ">
			<div className="w-full min-h-20 flex flex-col gap-5">
				<div className="flex flex-row gap-5  justify-center items-center ">
					<div
						className={`font-sans before:content-['03.'] after:hidden   text-[18px] font-bold `}
					>
						What&apos;s Next?
					</div>
				</div>
				<div className="text-center w-full text-6xl font-sf_display font-extrabold">
					Get In Touch
				</div>
				<div className="flex justify-center items-center w-full">
					<div className="md:w-[40%] w-[80%] text-center font-mono text-xl">
						I&apos;m currently looking for any new opportunities,to either work
						or collaborate. If you just want to say hi, I&apos;ll try my best to
						get back to you!
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div
						className={`bg-white flex justify-center items-center font-sans sm:mt-7 mt-4 text-black md:ml-0 ml-1 rounded-md sm:w-44 w-32 text-md h-12 btn-style5`}
					>
						<Link href={"mailto:rohithk652@gmail.com"}>Say Hello!</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

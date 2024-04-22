import Image from "next/image";
import Link from "next/link";

export default function Main() {
	return (
		<div className="flex flex-row flex-wrap md:mt-16 mt-16 h-dvg ">
			<div
				id={"home"}
				className={`home pop-up  h-full animate-16 flex bg-black flex-wrap  flex-col lg:w-2/3 w-full xs:gap-5 gap-6 md:gap-9 lg:gap-4 2xl:gap-7 lg:pl-44 md:pl-20  pl-5 md:p-20 sm:p-14 p-5 xs:pt-0 md:pt-16 pt-14  pr-2 `}
			>
				<div
					className={`md:h-3 md:mb-6 mb-6  md:mt-7 mt-11 h-6 w-full pl-2 text-gray-300 font-sans`}
				>
					Hi, my name is
				</div>
				<div
					className={`home-name font-calibre text-white  md:text-7xl sm:text-7xl text-6xl font-extrabold  `}
				>
					Rohith Krishnan
				</div>
				<div
					className={`home-sub-text font-calibre  md:text-7xl sm:text-7xl xs:text-6xl text-5xl font-extrabold text-gray-300 `}
				>
					I build things for the web
				</div>
				<div
					className={`md:pl-0 pl-1 home-text  font-calibre w-full text-gray-400 font-[400] text-[20px] pr-5 `}
				>
					I&apos;m a software engineer specializing in building exceptional
					digital experiences. Currently, I&apos;m a student at Amrita Vishwa
					Vidyapeetham.Passionate to develop websites with engineering and
					design principles.
				</div>

				<div
					className={`bg-white flex justify-center items-center font-sans  mt-4 text-black md:ml-0 ml-1 rounded-md sm:w-44 w-32 text-md h-12 btn-style5`}
				>
					<Link href={"mailto:@rohithk652@gmail.com"}>Say Hello!</Link>
				</div>
			</div>
			<div className="w-1/3 h-[100vh]] lg:flex hidden justify-center items-center pr-10 slide-down animate-16">
				<Image
					src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
					width={1000}
					height={1000}
					alt={"webdev"}
				/>
			</div>
		</div>
	);
}

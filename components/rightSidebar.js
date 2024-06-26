import Link from "next/link";
export default function RightSidebar() {
	return (
		<div className="w-24  h-[100vh] top-0 right-0 fixed bg-transparent text-[#9ca09f] flex flex-col justify-end items-center">
			<div className="w-full h-3/4 btext-black flex flex-col  justify-end items-start  ">
				<div
					className={`flex flex-col h-52 w-24 justify-center items-center  pb-10 pop-up animate-18 font-sans`}
				>
					<Link href={"mailto:rohithk652@gmail.com"}>
						<div className="rotated-text text-[#9ca09f] ">
							rohithk652@gmail.com
						</div>
					</Link>
				</div>
				<div className="h-32 bg-transparent w-full flex justify-center items-center pop-up animate-18">
					<div className="h-32 bg-[#9ca09f] w-px "></div>
				</div>
			</div>
		</div>
	);
}

import Link from "next/link";
export default function LeftSidebar() {
	return (
		<div className="w-24  h-[100vh] top-0 z-[100] left-0 fixed bg-transparent text-[#9ca3af] flex flex-col justify-end">
			<div className="w-full h-2/4 flex flex-col justify-between items-center">
				<ul className="flex  pb-10  h-3/4 flex-col items-center gap-10 justify-end w-full">
					<li className="h-5 w-5 pop-up animate-18">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-5 h-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-github h-5 hover:text-white transition-all duration-300 hover:-translate-y-1"
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</Link>
					</li>
					<li className="h-5 w-5 pop-up animate-18">
						<Link
							href="https://instagram.com/___rohithk__"
							className="w-5 h-5"
						>
							<svg
								className="instagram-logo w-5 h-5 hover:-translate-y-1 transition-all duration-300"
								fill="#9ca3af"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								viewBox="0 0 551.034 551.034"
								xmlSpace="preserve"
							>
								<path
									className="logo"
									fill="#9ca3af"
									id="XMLID_17_"
									d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
								/>

								<path
									id="XMLID_81_"
									fill="#9ca3af"
									d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
								/>

								<circle
									id="XMLID_83_"
									fill="#9ca3af"
									cx="418.306"
									cy="134.072"
									r="34.149"
								/>
							</svg>
						</Link>
					</li>
					<li className="h-5 w-5 pop-up animate-18">
						<Link
							href="https://www.linkedin.com/in/rohith-krishnan-645137262/"
							className="h-5 w-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-linkedin h-5 w-5 hover:text-white transition-all duration-300 hover:-translate-y-1"
							>
								<title>LinkedIn</title>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-5z"></path>
								<rect
									x="2"
									y="9"
									width="4"
									height="12"
								></rect>
								<circle
									cx="4"
									cy="4"
									r="2"
								></circle>
							</svg>
						</Link>
					</li>
					<li className="h-5 w-5 pop-up animate-18">
						<Link
							href="https://twitter.com/reidd_777"
							className="w-5 h-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-twitter h-5 hover:text-white transition-all duration-300 hover:-translate-y-1"
							>
								<title>Twitter</title>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
						</Link>
					</li>
				</ul>
				<div className="h-32 bg-gray-500 w-px pop-up animate-18"></div>
			</div>
		</div>
	);
}

import Link from "next/link";
export default function Sidebar({ text }) {
	return (
		<div className="w-16  h-[100vh] top-0 left-0 fixed bg-white text-black flex flex-col justify-end">
			<div className="w-full h-2/4 flex flex-col justify-between items-center">
				<ul className="flex  pb-10 text-black h-3/4 flex-col items-center gap-4 justify-end w-full">
					<li className="h-4 w-4">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github h-4 "
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</Link>
					</li>
					<li className="h-4 w-4">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-instagram h-5 w-5"
							>
								<title>Instagram</title>
								<rect
									x="2"
									y="2"
									width="20"
									height="20"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line
									x1="17.5"
									y1="6.5"
									x2="17.51"
									y2="6.5"
								></line>
							</svg>
						</Link>
					</li>
					<li className="h-4 w-4">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github h-4 "
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</Link>
					</li>
					<li className="h-4 w-4">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-twitter h-4"
							>
								<title>Twitter</title>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
						</Link>
					</li>
					<li className="h-4 w-4">
						<Link
							href="https://github.com/Rohithk2003"
							className="w-4 h-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github h-4 "
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</Link>
					</li>
					<li className="h-4 mb-5">g4</li>
				</ul>
				<div className="h-32 bg-gray-500 w-px"></div>
			</div>
		</div>
	);
}

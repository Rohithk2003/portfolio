export default function Footer() {
	return (
		<footer>
			<div
				className={
					"flex flex-wrap flex-row font-sans justify-between w-full text-sm h-24 md:gap-0 gap-10 align-middle items-center p-10 pt-5"
				}
			>
				<div
					className={
						"text-[#ffffff] md:text-start md:pl-10 pl-0 text-center md:w-1/2 w-full "
					}
				>
					®2023 Rohith K. All rights reserved
				</div>
				<div
					className={
						"flex flex-row md:justify-end justify-center align-middle md:w-1/2 w-full gap-10 md:pb-0 pb-10"
					}
				>
					<div className={"w-64"}>
						<ul className={"flex justify-center flex-row gap-10 "}>
							<li>
								<a href="https://twitter.com/Rohithk93208098">
									<i className={"fa fa-twitter fa-xl text-[#ffffff]"}></i>
								</a>
							</li>
							<li>
								<a href={"https://www.instagram.com/r0hxth._/"}>
									<i className={"fa fa-instagram fa-xl text-[#ffffff]"}></i>
								</a>
							</li>
							<li>
								<a href={"https://www.github.com/Rohithk2003"}>
									<i className={"fa fa-github fa-xl text-[#ffffff]"}></i>
								</a>
							</li>
							<li>
								<a
									href={
										"https://www.linkedin.com/in/rohith-krishnan-645137262/"
									}
								>
									<i className={"fa fa-linkedin fa-xl text-[#ffffff]"}></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

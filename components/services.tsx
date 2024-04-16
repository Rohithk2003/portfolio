import www from "../public/www.png";
import web from "../public/web-programming.png";
import Image from "next/image";
import { Component } from "react";
import { Inter } from "next/font/google";
const inter = Inter({
	subsets: ["latin"],
});
const services = [
	{
		id: 1,
		image_link: www,
		text: "Web Design",
		about:
			"Elevate your online presence with dynamic and immersive web development with stunning and functionally seamless websites that leave a lasting impact.",
	},
	{
		id: 2,
		image_link: web,
		text: "UI Development",
		about:
			"Unlock the potential of unforgettable user experiences through cutting-edge UI development",
	},
];

export className ServiceCard extends Component<{
	image_link: any;
	key: any;
	text: any;
	about: any;
}> {
	render() {
		let { image_link, text, about, key } = this.props;
		return (
			<div
				className={`relative w-72 ml-9 md:ml-0  h-[260px] ${inter.className}`}
				key={key}
			>
				<div
					className={
						"z-[900] bg-[#222222] absolute top-0 right-0  w-80 p-10 h-[300px] hover:bg-black transition-all duration-300 rounded-xl  hover:translate-y-[-50px] hover:translate-x-[-60px]"
					}
				>
					<div className={" grid place-items-center"}>
						<div className={"w-16 h-16"}>
							<Image
								src={image_link}
								alt={"service"}
								width={128}
								height={128}
							/>
						</div>
					</div>
					<div
						className={"text-center text-2xl text-white font-extrabold w-full "}
					>
						{text}
					</div>
					<div
						className={
							"text-[#7c7c7c] text-sm font-bold  text-start h-[90px]  mt-4 mb-4"
						}
					>
						{about}
					</div>
					<div
						className={
							"flex flex-row justify-center align-middle text-[#7c7c7c] text-sm  "
						}
					>
						<div
							className={"w-32 flex justify-center align-middle text-[#454545]"}
						>
							<hr
								className={
									"w-full h-[2px] border-0 mt-3  bg-[#454545] text-[#454545]"
								}
							/>
						</div>
						<p className={"w-44 text-center"}>
							<a href={"mailto:rohithk652@gmail.com"}>Discuss Now</a>
						</p>
						<div
							className={
								"w-32 flex justify- center align-middle   text-[#454545]"
							}
						>
							<hr
								className={
									"w-full h-[2px] border-0 mt-3  bg-[#454545] text-[#454545]"
								}
							/>
						</div>
					</div>
				</div>
				<div className={"absolute bottom-0 right-0 z-0 "}>
					<div
						className={
							"w-0 h-0 z-0 border-t-[120px] border-t-transparent border-b-[120px] border-b-[#454545] border-l-[120px] border-l-transparent border-r-[120px] border-r-[#454545]"
						}
					></div>
				</div>
			</div>
		);
	}
}

export default function Services() {
	return (
		<div
			className={
				"flex flex-col w-full h-full scroll-reveal-services justify-center items-center mb-20 md:p-20 p-0 "
			}
			id={"services"}
		>
			<p
				className={
					"text-2xl  text-[#454545]  md:w-3/4 md:text-start text-center w-full h-10"
				}
			>
				Services
			</p>
			<p
				className={
					"text-4xl  text-[#454545]  md:w-3/4 w-full h-24 md:text-start text-center"
				}
			>
				What We Do?
			</p>
			<div
				className={
					"flex w-full flex-wrap h-full flex-row justify-center gap-14 "
				}
			>
				{services.map((service, index) => {
					return (
						<ServiceCard
							key={service.id}
							image_link={service.image_link}
							text={service.text}
							about={service.about}
						/>
					);
				})}
			</div>
		</div>
	);
}

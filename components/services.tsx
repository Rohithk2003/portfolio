import www from '../public/www.png'
import web from '../public/web-programming.png'
import Image from "next/image";
import {Component} from "react";

const services = [
    {
        "image_link": www,
        "text": "Web Design",
        "about": "Elevate your online presence with dynamic and immersive web development with stunning and functionally seamless websites that leave a lasting impact."
    }, {
        "image_link": web,
        "text": "UI Development",
        "about": "Unlock the potential of unforgettable user experiences through cutting-edge UI development"
    }
]

export class ServiceCard extends Component<{ image_link: any, key: any, text: any, about: any }> {
    render() {
        let {image_link, text, about, key} = this.props;
        return (
            <div className={"relative w-72  h-[260px]"} key={key}>
                <div
                    className={"z-[900] bg-[#222222] absolute top-0 right-0  w-80 p-10 h-[300px] hover:bg-black transition-all duration-300 rounded-xl  hover:translate-y-[-50px] hover:translate-x-[-60px]"}>
                    <div className={" grid place-items-center"}>
                        <div className={"w-16 h-16"}>
                            <Image src={image_link} alt={"service"} width={128} height={128}/>
                        </div>
                    </div>
                    <div className={"text-center text-2xl text-white font-extrabold w-full "}>{text}</div>
                    <div className={"text-[#7c7c7c] text-sm font-bold  text-start h-[90px]  mb-3"}>{about}</div>
                    <div className={"flex flex-row justify-center align-middle text-[#7c7c7c] text-sm  "}>
                        <div className={"w-32 flex justify-center align-middle text-[#ef6c50]"}>
                            <hr className={"w-full h-[2px] border-0 mt-3  bg-[#ef6c50] text-[#ef6c50]"}/>
                        </div>
                        <p className={"w-44 text-center"}><a href={"mailto:rohithk652@gmail.com"}>Discuss Now</a></p>
                        <div className={"w-32 flex justify- center align-middle   text-[#ef6c50]"}>
                            <hr className={"w-full h-[2px] border-0 mt-3  bg-[#ef6c50] text-[#ef6c50]"}/>
                        </div>
                    </div>
                </div>
                <div className={"absolute bottom-0 right-0 z-0 "}>
                    <div
                        className={"w-0 h-0 z-0 border-t-[120px] border-t-transparent border-b-[120px] border-b-[#e84a28] border-l-[120px] border-l-transparent border-r-[120px] border-r-[#e84a28]"}></div>
                </div>
            </div>
        )
    }
}

export default function Services() {
    return (
        <div className={"  flex-row w-full h-full mb-72 mt-32 "} id={"services"}>
            <p className={"text-sm underline text-center text-[#f16b4b] font-extrabold w-full h-10"}>Services</p>
            <p className={"text-4xl  text-center text-white font-extrabold w-full h-24"}>What We Do?</p>
            <div className={"flex w-full flex-wrap h-full flex-column justify-center gap-10 align-middle"}>
                {services.map((service, index) => {
                    return (
                        <ServiceCard key={index} image_link={service.image_link} text={service.text}
                                     about={service.about}/>
                    )
                })}
            </div>
        </div>
    )

}
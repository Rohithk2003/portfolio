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
            <div key={key}>
                <div
                    className={"  z-[900] bg-[#222222] absolute w-80 p-10 h-80 hover:bg-black transition-all duration-300 rounded-xl  hover:translate-y-[-20px] hover:translate-x-[-20px]"}>
                    <div className={" w-full h-16 grid place-items-center"}>
                        <Image src={image_link} alt={"service"} width={64} height={64}/>
                    </div>
                    <div className={"text-center text-2xl text-white font-extrabold w-full h-8"}>{text}</div>
                    <div className={"text-[#7c7c7c] text-sm font-bold h-32 text-start  mb-3"}>{about}</div>
                    <div className={"flex flex-row justify-center align-middle text-[#7c7c7c] text-sm h-24 "}>
                        <div className={"w-32 flex justify-center align-middle text-[#ef6c50]"}>
                            <hr className={"w-full h-[2px] border-0 mt-3  bg-[#ef6c50] text-[#ef6c50]"}/>
                        </div>
                        <p className={"w-44 text-center  h-4"}> <a href={"mailto:rohithk652@gmail.com"}>Discuss Now</a></p>
                        <div className={"w-32 flex justify- center align-middle   text-[#ef6c50]"}>
                            <hr className={"w-full h-[2px] border-0 mt-3  bg-[#ef6c50] text-[#ef6c50]"}/>
                        </div>
                    </div>
                </div>
                <div className={"relative z-0 w-80 top-[24%] left-[24%] h-80"}>
                    <div className={"w-0 h-0 z-0 border-t-[120px] border-t-transparent border-b-[120px] border-b-[#e84a28] border-l-[120px] border-l-transparent border-r-[120px] border-r-[#e84a28]"}></div>
                </div>
            </div>
        )
    }
}

export default function Services() {
    return (
        <div className={" relative flex-row w-full h-max mt-10 "} id={"services"}>
            <p className={"text-sm underline text-center text-[#f16b4b] font-extrabold w-full h-10"}>Services</p>
            <p className={"text-4xl  text-center text-white font-extrabold w-full h-24"}>What We Do?</p>
            <div className={"flex flex-row justify-center gap-10 align-middle"}>
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
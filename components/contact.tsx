import Image from "next/image";
import call from "../public/telephone.png"
import coffee from "../public/coffee.png"
import chat from "../public/conversation.png"

const touchDetails = [
    {'image': call, "heading": "Call me", "details": "+91 1234567890"},
    {'image': coffee, "heading": "Get me here", "details": "Edappally,Ernakulam 682024"},
    {'image': chat, "heading": "Chat with me", "details": "rohithk652@gmail.com"},
]
export default function ContactDetails() {
    return (
        <div
            className={"grid relative lg:grid-cols-2 w-full h-[100vh] bg-[#1f1f1f] grid-cols-1 grid-rows-2 lg:grid-rows-1"}>
            <div className={"w-full h-full flex flex-col justify-center align-middle"}>
                <div className={"w-full h-10 flex justify-center align-middle flex-row"}>
                    <p className={"text-sm underline  text-[#f16b4b] font-extrabold w-[500px] h-10"}>Get in
                        Touch</p>
                </div>
                <div className={"w-full h-30 flex justify-center align-middle flex-row"}>
                    <p className={"text-4xl text-white font-[1000] w-[500px] h-10"}>Talk Or
                        Meet With Me</p>
                </div>
                {touchDetails.map((details, index) => {
                    return (
                        <div key={index} className={"w-full h-[100px] mt-10 flex justify-center align-middle flex-row"}>
                            <div className={"w-[500px] flex flex-row"}>
                                <div className={"w-[44px] h-[44px] pt-1 mr-5"}>
                                    <Image src={details.image} alt={"none"} className={" "} width={44} height={44}/>
                                </div>
                                <div className={"flex flex-col"}>
                                    <p className={"text-xs text-[#727272] font-[1000] "}>{details.heading}</p>
                                    <p className={"text-4xl pl-1 text-white font-[1000] "}>{details.details}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className={"w-full h-full flex flex-col justify-center align-middle"}>
                <div className={"w-full h-10 flex justify-center align-middle flex-row"}>
                    <p className={"text-sm underline  text-[#f16b4b] font-extrabold w-[500px] "}>Have an idea?</p>
                </div>
                <div className={"w-full h-30 flex justify-center align-middle flex-row"}>
                    <p className={"text-4xl text-white font-[1000] w-[500px] h-10"}>Connect with me </p>
                </div>
                <div className={"w-full h-30 mt-10 flex justify-center align-middle flex-row"}>
                    <div className={"w-[500px] flex flex-col gap-20"}>
                        <div className={"w-[44px] h-[44px] pt-1 mr-5"}>
                            <i className="fa fa-person fa-2xl text-[#f16b4b] p-11 icon absolute"></i>
                            <input className={"bg-[#363636] w-[500px] rounded h-24 p-10  pl-20 "} type={"text"}
                                   placeholder={"Enter your name here"}/>
                        </div>
                        <div className={"w-[44px] h-[44px] pt-1 mr-5"}>
                            <i className="fa fa-person fa-2xl text-[#f16b4b] p-11 icon absolute"></i>
                            <input className={"bg-[#363636] w-[500px] rounded h-24 p-10  pl-20 "} type={"text"}
                                   placeholder={"Enter your email"}/>
                        </div>
                        <div className={"w-[44px] h-[44px] pt-1 mr-5"}>
                            <i className="fa fa-person fa-2xl text-[#f16b4b] p-11 icon absolute"></i>
                            <input className={"bg-[#363636] w-[500px] rounded h-28 p-10  pl-20 "} type={"text"}
                                   placeholder={"Tell me about the idea"}/>
                        </div>
                        <button className={"bg-[#f26c4f] w-32 h-16 mt-2 text-white font-bold"}>Contact Me {`<>`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
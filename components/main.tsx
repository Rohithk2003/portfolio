import Image from "next/image";
import profile from '../public/profile.jpg'

export default function Main() {
    return (
        <div
            className={"w-full h-[100vh] grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-1 grid-rows-2       bg-[#222222] "}
            id={"home"}>
            <div
                className={"w-full h-[100vh] grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-1 grid-rows-2 absolute      bg-[#222222] "}>
                <div className={"md:w-2/3  w-full bg-[#222222] flex md:justify-start justify-center col-span-2 "}>
                    <div>
                        <div
                            className={"text-white mt-10 name-label font-bold relative text-9xl top-20 left-[10%] ml-20 z-10"}>Rohith
                            Krishnan
                        </div>
                        <div
                            className={"w-[300px] h-[300px] overflow-hidden relative left-44 top-[-20px]  float-right rounded-full border-2 border-white object-cover"}>
                            <Image className={"z-50 object-contain relative top-[-80px] "} src={profile} alt={""}
                                   width={300}
                                   height={300}/></div>
                    </div>
                </div>
                <div
                    className={"md:w-1/3 w-full  mt-10 md:mt-0  relative bg-[#222222] flex  justify-center align-end flex-row md:flex-col md:justify-center"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className={"w-max h-max "}>
                        <div className={"text-4xl w-80 font-bold based-data text-white  "}>Based in India,</div>
                        <div className={"text-4xl w-96  font-bold based-data text-white "}> I'm a web-developer.</div>
                        <div className={"text-2xl w-96  mt-10 font-bold based-data text-[#8f8f8f] "}>As a web developer,
                            I
                            code pixels into reality, turning dreams into clickable wonders! 💻🚀
                        </div>
                        <div className={"text-sm w-44  mt-10 font-bold based-data text-orange-300 tracking-wider"}>P:
                            +91
                            8138924593
                        </div>
                        <div className={"text-sm w-64  mt-1 font-bold based-data text-orange-300 tracking-wider"}>E:
                            rohithk652@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
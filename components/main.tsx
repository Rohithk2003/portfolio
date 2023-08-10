import Image from "next/image";
import profile from '../public/profile.jpg'

export default function Main() {
    return (
            <div id={"home"}
                className={"w-full  h-max flex flex-wrap flex-row  bg-[#222222] "}>
                <div
                    className={"xl:w-1/2 h-96 w-3/4 bg-[#222222] p-10 flex md:justify-start justify-center col-span-2 row-span-2"}>
                    <div>
                        <div
                            className={"text-white mt-10 name-label font-bold relative text-7xl  sm:text-9xl top-20 left-[10%]  z-[0]"}>Rohith
                            Krishnan
                        </div>
                        <div
                            className={"md:w-[300px] h-[200px] w-[200px] md:h-[300px] overflow-hidden relative md:left-44 left-[50%] top-[-50%] md:top-[-40%] xl:top-[-20px]  float-right rounded-full border-2 border-white object-cover"}>
                            <Image className={"z-48 object-contain relative top-[-80px] "} src={profile} alt={""}
                                   width={300}
                                   height={300}/></div>
                    </div>
                </div>
                <div
                    className={"xl:w-1/2 w-full pl-10 md:p-20 mt-40 h-max  bg-[#222222] flex  justify-start md:justify-center align-middle flex-row "}>
                    <div className={"xl:w-max md:w-1/2 w-full h-max "}>
                        <div
                            className={"text-4xl w-max  h-10 font-bold based-data text-white mb-10 overflow-hidden name-main-page "}>Hi,I
                            am Rohith Krishnan
                        </div>
                        <div className={"text-3xl w-80 font-bold based-data text-white  "}>Based in India,</div>
                        <div className={"text-3xl w-96  font-bold based-data text-white "}> {`I'm`} a web-developer.
                        </div>
                        <div className={"text-2xl w-96  mt-10 font-bold based-data text-[#8f8f8f] "}>As a web developer,
                            I
                            code pixels into reality, turning dreams into clickable wonders! 💻🚀
                        </div>
                        <div className={"text-sm w-44  mt-10 font-bold based-data text-orange-300 tracking-wider"}>P:
                            +91
                            1234567890
                        </div>
                        <div className={"text-sm w-64  mt-1 font-bold based-data text-orange-300 tracking-wider"}>E:
                            rohithk652@gmail.com
                        </div>
                    </div>
                </div>
            </div>
    )
}
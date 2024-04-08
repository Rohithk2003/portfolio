import Image from "next/image";
// import profile from '../public/profile.jpg'
import Typed from "typed.js"
import {useRef, useEffect} from "react";

export default function Main() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hi , I am Rohith Krishnan <br> Based in India. <br> I'm a web-develop and ML enthusiast."],
            typeSpeed: 50,
            backSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    const text = "Rohith Krishnan";
    return (
        <div id={"home"}
             className={" flex flex-wrap flex-row  bg-[#222222]   h-[100vh] pb-32 "}>
            <div
                className={" xl:w-1/2 w-full bg-[#222222] p-10 flex justify-center"}>
                <div
                    className={"text-white text-center animate-bounce justify-center md:pt-0 top-32 relative animate-infinite animate-duration-[2000ms] animate-ease-in-out  font-bold  md:text-9xl text-6xl  flex  flex-wrap items-center   z-[0]"}>
                    Rohith
                    Krishnan
                </div>
                {/*<div*/}
                {/*    className={"md:w-[300px] h-[200px]  w-[200px] md:h-[300px] overflow-hidden absolute xl:bottom-10 bottom-auto xl:top-auto top-0 xl:right-auto right-[10%] xl:left-[30%] float-right rounded-full border-2 border-white object-cover"}>*/}
                {/*    <Image className={"z-48 object-contain  "} src={"/portfolio/main.png"} alt={""}*/}
                {/*           width={300}*/}
                {/*           height={300}/></div>*/}
            </div>
            <div
                className={" xl:w-1/2 w-full overflow-hidden h-full bg-[#222222] flex  justify-center align-middle items-center flex-row "}>
                <div className={"flex justify-center flex-col h-max  md:pl-32 pl-6"}>
                    <div
                        className={"md:text-4xl text-2xl animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out  min-h-36 font-bold based-data text-white "}>
                        <span ref={el}/>
                    </div>
                    <div
                        className={"text-2xl main-one-right animate-1 w-96  mt-10 font-bold based-data text-[#8f8f8f] relative "}>As
                        a web developer,
                        I
                        code pixels into reality, turning dreams into clickable wonders! 💻<span>🚀</span>
                    </div>
                    <div
                        className={"text-sm w-44  main-one-right animate-2 mt-10 font-bold based-data text-orange-300 tracking-wider"}>P:
                        +91
                        1234567890
                    </div>
                    <div
                        className={"text-sm w-64  main-one-right animate-3 mt-1 font-bold based-data text-orange-300 tracking-wider"}>E:
                        rohithk652@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

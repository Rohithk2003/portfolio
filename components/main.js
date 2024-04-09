import Image from "next/image";
// import profile from '../public/profile.jpg'
import {Inter} from "next/font/google";
import Typed from "typed.js";
import {useRef, useEffect} from "react";

const inter = Inter({
    subsets: ["latin"],
    weights: [300],
});
export default function Main() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Hi , I am Rohith Krishnan",
                " Based in India.",
                "I'm a web-developer and ML enthusiast.",
            ],
            typeSpeed: 50,
            startDelay: 1500,
            loop: true,
            backSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div
            id={"home"}
            className={`home flex flex-wrap flex-row text-white w-full text-start bg-[#000000]   h-[100vh] ${inter.className}`}
        >
            <div
                className={
                    "lg:w-2/3 w-full mt-10 flex justify-start gap-4 main-one items-center flex-col"
                }
            >
                <div className={"flex lg:justify-start justify-center lg:w-1/2 w-full"}>
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/images/profile.jpg"}
                            alt="Profile Picture"
                            width={128}
                            height={128}
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className={"text-xl text-start lg:w-1/2 w-3/4 flex justify-start"}>
                    <span ref={el}/>
                </div>
                <div className={"flex flex-col lg:w-1/2 w-3/4  text-[#454545] mt-3"}>
					<span>
						A Software Developer who develops well-architected applications.
					</span>
                    <span>
						Passionate to develop them with engineering and design principles.
					</span>
                </div>
                <div className={" lg:w-1/2 w-3/4 text-[#454545] "}>
                    Currently working on{" "}
                    <span className={"text-white"}>
						&nbsp;being a better person and a developer
					</span>
                </div>
                <div
                    className={
                        "text-lg text-white text-start lg:w-1/2 w-3/4 flex justify-start"
                    }
                >
                    Top Skills
                </div>
                <ul
                    className={
                        "flex flex-row gap-4 text-[#585858] flex-wrap lg:w-1/2 w-3/4 justify-start items-center"
                    }
                >
                    <li>Next.js</li>
                    <li>Django</li>
                    <li>PostgresSQL</li>
                    <li>Machine Learning</li>
                    <li>Git</li>
                </ul>
                <div
                    className={
                        "text-lg text-white text-start lg:w-1/2 w-3/4 flex justify-start"
                    }
                >
                    Top Languages
                </div>
                <ul
                    className={
                        "flex flex-row gap-4 text-[#585858] flex-wrap lg:w-1/2 w-3/4 justify-start items-center"
                    }
                >
                    <li>Python</li>
                    <li>C++</li>
                    <li>Java</li>
                </ul>
                <div className={" text-black flex justify-start items-center w-1/2 mt-5"}>
                    <div className={"bg-white h-11 w-44 hover:bg-gray-500 hover:text-white hover:cursor-pointer rounded-full flex justify-center items-center"}>
                        Say Hello
                    </div>
                </div>
            </div>
        </div>
    );
}

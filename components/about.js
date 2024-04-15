import {Inter} from "next/font/google";
import {useInView} from "react-intersection-observer";
import localFont from "next/font/local";
import Link from "next/link";

const sf = localFont({src: "./sf.otf"});
const ca = localFont({src: "./ca.otf"});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300"],
});
export default function About() {
    const [ref, inView, entry] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            id={"about"}
            className={`h-max   text-justify mt-28 lg:pt-36  flex flex-wrap justify-center`}
        >
            <div className="w-full h-20">
                <div className="flex flex-row gap-5 justify-start items-center md:px-56 pl-10 h-10 ">
                    <div
                        className={`about-text  text-[28px] after:md:w-[300px] after:w-[100px] after:md:left-[170px] after:left-[140px] font-bold `}> About
                        Me
                    </div>
                </div>
            </div>
            <div className={`flex flex-row flex-wrap justify-center  items-center md:px-56 pl-10 w-full h-full`}>
                <div className={`w-1/2 h-full font-mono text-[20px] text-[#767676] flex flex-col gap-2`}>
                    <span>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
                    development started back in 2012 when I decided to try editing custom Tumblr themes — turns out
                    hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </span>
                    <span>
						Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
Here are a few technologies I’ve been working with recently:
					</span>
                    <div>
                        Here are a few technologies I’ve been working with recently:
                    </div>
                    <ul className={"grid grid-cols-2"}>
                        <li>JavaScript (ES6+)</li>
                            <li> TypeScript</li>
                                <li> React</li>
                                    <li> Eleventy</li>
                                        <li> Node.js</li>
                                            <li> WordPress</li>
                    </ul>
                </div>
                <div className={`w-1/2 h-full`}></div>
            </div>
        </div>
    );
}

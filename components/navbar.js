import Link from "next/link";
import React, {useState} from "react";


const headings = [
    "Home", "About", "Services", "Skills", "Contact",
]
export default function Navbar() {
    const [HamStatus, setHamButtonStatus] = useState(false)
    const [NavItemClicked, setNavItemStatus] = useState(false)
    const [activeIdx, setActiveIdx] = useState(-1)
    const [topBarVisible, setTopBarVisibility] = useState(false)

    function handleHamButtonClick() {
        setHamButtonStatus(!HamStatus)
        setTopBarVisibility(!topBarVisible)
    }

    function handleNavItemClicking() {
        setNavItemStatus(!NavItemClicked)
    }

    return (
        <nav>
            <div className={"w-full  h-16 flex justify-between align-middle  z-[999] bg-[#222222] "}>
                <div className={"w-1/3 mt-auto order-1 md:order-0 md:text-start text-start mb-auto ml-5 "}>
                    <Link href={"/"}>
                        <h4 className={"text-2xl font-bold"}>Portfo<span className={"text-[#f26c4f]"}>lio</span>.</h4>
                    </Link>
                </div>
                <div className={"lg:flex hidden w-1/3 order-1  justify-start align-middle"}>
                    <ul className={"flex  z-50  h-full text-center justify-start p-5 flex-column  gap-16 "}>
                        {
                            headings.map((heading, index) => {
                                return (
                                    <li
                                        className={`mb-auto mt-auto text-center hover:text-[#f26c4f] transition-colors duration-300 ease-in-out ${activeIdx == index ? ("text-orange-400 border-b-2 border-amber-500") : ""}`}
                                        onClick={() => {
                                            setActiveIdx(index)
                                            handleNavItemClicking()
                                        }}
                                        key={index}>
                                        <Link href={`#${heading.toLowerCase()}`}>{heading}</Link>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                <div className={"flex lg:hidden  order-0 align-middle w-1/3 justify-start m-auto "}>
                    <a className={" grid  ml-2 grid-rows-3w"} onClick={handleHamButtonClick}>
                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-45") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-[-45deg] translate-y-[-8px]") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white  ease-in-out ${HamStatus ? ("hidden") : ""}`}></span>
                    </a>
                </div>
                <div
                    className={"w-1/3 flex  max-h-fit  order-2 lg:top-0 transition-all duration-300 ease-in-out  mr-0 lg:mr-5 justify-center  mt-auto mb-auto"}>
                    <button className={"bg-[#f26c4f] text-black w-36 h-10 rounded"}><a
                        href={"https://flowcv.com/resume/34p8i21ase"}>Download
                        CV</a></button>
                </div>

            </div>
            <div
                className={`w-full p-16 fixed transition inset-0 top-0 left-0  duration-800 ease-in-out  z-[999] justify-center items-center bg-black flex-col flex h-screen ${topBarVisible ? ('translate-x-0') : ('-translate-x-[100%]')}`}>
                <div className={"flex  order-0 align-middle w-full absolute top-10  justify-start m-auto "}>
                    <a className={" grid  ml-2 grid-rows-3w"} onClick={handleHamButtonClick}>
                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-45") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-[-45deg] translate-y-[-8px]") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white  ease-in-out ${HamStatus ? ("hidden") : ""}`}></span>
                    </a>
                </div>
                <div className={"w-1/3  "}>
                    <h4 className={"text-2xl font-bold text-center mb-2"}>Portfo<span
                        className={"text-[#f26c4f]"}>lio</span>.</h4>
                </div>
                <ul className={"flex w-full gap-2 flex-col"}>
                    {
                        headings.map((heading, index) => {
                            return (
                                // <Link key={index} onClick={() => {
                                //     setTopBarVisibility(!topBarVisible);
                                //     setHamButtonStatus(!HamStatus);
                                // }} href={`#${heading.toLowerCase()}`}>
                                <li className={"w-full hover:text-white  flex justify-center bg-left-to-right items-center rounded hover:bg-[#f26c4f] transition-all duration-300 ease-in-out border-gray-500   h-16 border-2 "}>
                                    {heading}
                                </li>
                                // </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>

    )
}
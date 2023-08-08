import Link from "next/link";
import React, {useState} from "react";


const headings = [
    "Home", "About", "Services", "Skills",  "Contact",
]
export default function Navbar() {
    const [HamStatus, setHamButtonStatus] = useState(false)
    const [NavItemClicked, setNavItemStatus] = useState(false)
    const [activeIdx, setActiveIdx] = useState(-1)

    function handleHamButtonClick() {
        setHamButtonStatus(!HamStatus)
    }

    function handleNavItemClicking(e: React.MouseEvent<HTMLLIElement>) {
        setNavItemStatus(!NavItemClicked)
    }

    return (
        <nav>
            <div className={"w-full  h-16 flex  align-middle fixed z-[999] bg-[#222222] "}>
                <div className={"w-1/3  mt-auto  mb-auto p-5"}>
                    <h4 className={"text-2xl font-bold"}>Portfo<span className={"text-[#f26c4f]"}>lio</span>.</h4>
                </div>
                <div className={"lg:flex hidden max-w-1/3  justify-start align-middle"}>
                    <ul className={"flex  z-50  h-full text-center justify-start p-5 flex-column  gap-16 "}>
                        {
                            headings.map((heading, index) => {
                                return (
                                    <li
                                        className={`mb-auto mt-auto text-center hover:text-[#f26c4f] transition-colors duration-300 ease-in-out ${activeIdx == index ? ("text-orange-400 border-b-2 border-amber-500") : ""}`}
                                        onClick={(Event) => {
                                            setActiveIdx(index)
                                            handleNavItemClicking(Event)
                                        }}
                                        key={index}>
                                        <Link href={`#${heading.toLowerCase()}`}>{heading}</Link>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                <div className={"flex lg:hidden  order-3 align-middle max-w-1/3 justify-end m-auto mr-2"}>
                    <a className={" grid place-items-center grid-rows-3w"} onClick={handleHamButtonClick}>
                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-45") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? (" rotate-[-45deg] translate-y-[-8px]") : ""}`}></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white  ease-in-out ${HamStatus ? ("hidden") : ""}`}></span>
                    </a>
                </div>
                <div
                    className={"w-1/3 flex  max-h-fit  lg:top-0 transition-all duration-300 ease-in-out  mr-0 lg:mr-5 justify-center  mt-auto mb-auto"}>
                    <button className={"bg-[#f26c4f] text-black w-36 h-10 rounded"} ><a href={"https://drive.google.com/uc?export=download&id=1YIff-gypDnI9kKcILViiUQcLuzwWdg-T "}>Download CV</a></button>
                </div>
            </div>

        </nav>

    )
}
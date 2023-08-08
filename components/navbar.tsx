import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";


const headings = [
    "Home", "About", "Projects", "Contact"
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
            <div className={"w-full  h-16 flex  align-middle  "}>
                <div className={"w-1/3 mt-auto  mb-auto p-5"}>
                    <h4>Rohithk</h4>
                </div>
                <div className={"md:flex hidden max-w-1/3  justify-start align-middle"}>
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
                <div className={"flex md:hidden  order-3 align-middle max-w-1/3 justify-end m-auto mr-2"}>
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
                    className={"w-1/3 flex  max-h-fit  md:top-0 transition-all duration-300 ease-in-out justify-end  mr-0 md:mr-5 lg:mr-0  lg:justify-center lg:align-middle align-middle mt-auto mb-auto"}>
                    <button className={"bg-[#f26c4f] text-black w-36 h-10 rounded"}>Download CV</button>
                </div>
            </div>

        </nav>

    )
}
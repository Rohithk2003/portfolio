import Link from "next/link";
import React, {useState} from "react";
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight:['300']
});

export default function Navbar() {
    const [HamStatus, setHamButtonStatus] = useState(false);
    const [NavItemClicked, setNavItemStatus] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);
    const [topBarVisible, setTopBarVisibility] = useState(false);

    function handleHamButtonClick() {
        setHamButtonStatus(!HamStatus);
        setTopBarVisibility(!topBarVisible);
    }

    function handleNavItemClicking() {
        setNavItemStatus(!NavItemClicked);
    }

    return (
        <nav>
            <div
                className={` w-full  h-16 flex justify-end align-middle  z-[999] bg-[#000000] ${inter.className}`}
            >
                <ul
                    className={
                        "flex flex-row w-1/4 text-[#595959]  justify-center gap-10 items-center"
                    }
                >
                    <li className="hover:text-white">Github</li>
                    <li className="hover:text-white">Linkedin</li>
                    <li className="hover:text-white">Projects</li>
                </ul>
                <div
                    className={
                        "md:hidden flex  order-0 align-middle w-full absolute top-10  justify-start m-auto "
                    }
                >
                    <a
                        className={" grid  ml-2 grid-rows-3w"}
                        onClick={handleHamButtonClick}
                    >
						<span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? " rotate-45" : ""}`}
                        ></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white transition-all duration-300 ease-in-out ${HamStatus ? " rotate-[-45deg] translate-y-[-8px]" : ""}`}
                        ></span>

                        <span
                            className={`w-7 h-1 mb-1 bg-white  ease-in-out ${HamStatus ? "hidden" : ""}`}
                        ></span>
                    </a>
                </div>
                <ul className={"flex md:hidden w-full gap-2 flex-col"}>

                    <Link
                        onClick={() => {
                            setTopBarVisibility(!topBarVisible);
                            setHamButtonStatus(!HamStatus);
                        }}
                     href={""}>
                        <li
                            className={
                                "w-full hover:text-white  flex justify-center bg-left-to-right items-center rounded hover:bg-[#f26c4f] transition-all duration-300 ease-in-out border-gray-500   h-16 border-2 "
                            }
                        >
                            hello
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

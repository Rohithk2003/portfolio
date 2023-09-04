
import Link from "next/link";


export default function ContactDetails() {
    return (
        <div id={"contact w-full"}
             className={" flex flex-row flex-wrap justify-between w-full h-max p-20 bg-[#222222] "}>
            <div className={"h-full flex flex-col justify-center align-middle"}>
                <div className={"w-full h-10 flex justify-center align-middle flex-row"}>
                    <p className={"text-sm underline  text-center text-[#f16b4b] font-extrabold w-44 "}>Have an idea?</p>
                </div>
                <div className={"w-full h-30 flex justify-center align-middle flex-row"}>
                    <p className={"text-4xl text-white  text-center font-[1000] w-96 h-10"}>Connect with me </p>
                </div>
                <div className={"h-64 mt-20 flex justify-center align-middle flex-row"}>
                        <Link className={"text-4xl text-white text-center  font-[1000] w-96"} href="mailto:rohithk652@gmail.com">rohithk652@gmail.com </Link>
                </div>
            </div>
        </div>
    )
}
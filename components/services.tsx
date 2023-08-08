import exp from "constants";
import www from '../public/www.png'
import web from '../public/web-programming.png'
const services=[
    {"image_link":www,"text":"Web Design"},{"image_link":web,"text":"UI Development"}
]
export function ServiceCard(){
    return(
        <div>

        </div>
    )
}
export default function Services() {
    return (
        <div className={" relative flex-row w-full h-[100vh]"} id={"services"}>
            <p className={"text-sm underline text-center text-[#f16b4b] font-extrabold w-full h-10"}>Services</p>
            <p className={"text-4xl  text-center text-white font-extrabold w-full h-96"}>What We Do?</p>
            <div className={"flex flex-col justify-center gap-10 align-middle"}>
                    <ServiceCard/>
            </div>
        </div>
    )

}
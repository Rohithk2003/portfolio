import {Component} from "react";

const services = [
    {
        "text": "Frontend", "percentage": "80"
    }, {
        "text": "C and C++", "percentage": "30"
    }, {"text": "Java GUI", "percentage": "50"}, {"text": "Python", "percentage": "70"}, {
        "text": "Django",
        "percentage": "80"
    }, {"text": "React", "percentage": "70"}
]

export class SkillsCard extends Component<{ key: any, percentage: any, text: any }> {
    render() {
        let {text, key, percentage} = this.props;
        return (
            <div key={key} className={"w-72  grid place-items-center h-full"}>
                <div className={"w-44 h-44 m-0 rounded-progress grid place-items-center"}>
                    <div
                        className="absolute flex justify-center align-middle m-0"
                    >
                        <svg
                            className="relative w-32 h-32 progress-ring"
                            >
                            <circle
                                className="progress-ring__circle "
                                stroke="#2e2e2e"
                                strokeWidth="6"
                                strokeDashoffset={`0`}
                                strokeDasharray={"326.73 326.73"}
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"/>
                            <circle
                                className="progress-ring__circle absolute z-50 "
                                stroke="#f16b4b"
                                strokeWidth="6"
                                strokeDashoffset={`${326.73 - parseInt(percentage) / 100 * 326.73}`}
                                strokeDasharray={"326.73 326.73"}
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"/>
                        </svg>
                    </div>
                    <p className={"text-white relative left-[35%] top-[0px] text-2xl font-extrabold"}>{percentage}%</p>
                </div>
                <div className={"text-center text-white mt-1"}>{text}</div>

            </div>
        )
    }
}

export default function Skills() {
    return (
        <div className={" bg-[#1f1f1f]  relative flex-row w-full h-max pb-44"} id={"skills"}>
            <p className={"text-sm underline text-center pt-16 text-[#f16b4b] font-extrabold w-full  h-24"}>Skills</p>
            <p className={"text-4xl  text-center text-white font-extrabold w-full h-24"}>Coolest Ever</p>
            <div className={"flex flex-row flex-wrap justify-center gap-10 align-middle"}>
                {services.map((service, index) => {
                    return (
                        <SkillsCard key={index} text={service.text} percentage={service.percentage}/>
                    )
                })}
            </div>
        </div>
    )

}
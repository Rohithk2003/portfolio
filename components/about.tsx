export default function About() {
    return (
        <div id={"about"}
             className={" relative top-full w-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 "}>
            <div className={"w-full p-44 pt-0"}>
                <div className={"w-full mb-2 flex flex-row"}>
                    <h4 className={"text-[#ef6c50] underline"}>About me </h4>
                    <div className={"w-44 flex justify- center align-middle   text-[#ef6c50]"}>
                        <hr className={"w-full h-[2px] border-0 mt-3 ml-5 bg-[#ef6c50] text-[#ef6c50]"}/>
                    </div>
                </div>
                <div className={"w-full  text-md text-white"}>
                    <div className={" h-full w-[500px]  font-bold text-3xl"}>
                        You {`can't`} use up creativity.
                        The more you use, the more
                        you have in your signifant mind.
                    </div>
                    <div className={"mt-6 text-sm text-[#bdbdbd] leading-6 min-w-full"}>
                        As a student with passion for programming,
                        I am committed to developing skills and
                        knowledge to build a successful
                        foundation in computer science and
                        programming concepts and I am always
                        eager to learn and grow my abilities, I am
                        driver by a desire to create practical
                        solutions to complex problems and am
                        dedicated to delivering high-quality results. I am
                        motivated by the endless possibilities of
                        programming and the potential to create
                        innovative solutions that positively impact
                        {`people's`} lives.
                    </div>
                </div>
            </div>
            <div className={"w-96 h-full"}>
                <div className={"text-5xl mt-7 font-bold text-white w-[450px] h-24"}>Any Type of Query & Discussion
                </div>
                <div className={"text-lg mt-7 text-[#bdbdbd]"}>{`Let's`} talk with me</div>
                <div className={" align-bottom h-36 justify-between flex items-end font-bold text-[#ef6f4a] text-2xl"}>
                    <p className={"underline"}>rohithk652@gmail.com</p> <p className={"!no-underline"}><a
                    href="mailto:rohithk652@gmail.com">→</a></p></div>
            </div>
        </div>
    )
}
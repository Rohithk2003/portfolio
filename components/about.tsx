export default function About() {
    return (
        <div id={"about"}
             className={"h-[100vh] absolute top-[150%] xl:top-full w-full bg-[#1f1f1f] flex flex-wrap justify-center"}>
            <div className={"w-1/2 max-h-1/2  xl:mt-20 flex flex-col justify-center "}>
                <div className={"w-full mb-2 flex flex-row"}>
                    <h4 className={"text-[#ef6c50] underline"}>About me </h4>
                    <div className={"w-44 flex justify- center align-middle   text-[#ef6c50]"}>
                        <hr className={"w-full h-[2px] border-0 mt-3 ml-5 bg-[#ef6c50] text-[#ef6c50]"}/>
                    </div>
                </div>
                <div className={"w-full   text-md text-white"}>
                    <div className={"  w-[500px] mb-4 font-bold text-4xl"}>
                        You {`can't`} use up creativity.
                        The more you use, the more
                        you have in your signifant mind.
                    </div>
                    <div className={" text-xl text-[#bdbdbd]  min-w-full"}>
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
        </div>
    )
}
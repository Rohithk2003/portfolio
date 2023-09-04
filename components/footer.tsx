export default function Footer() {
    return (
        <footer>
            <div className={"flex flex-wrap flex-row justify-between w-full h-24 align-middle items-center p-10 pt-5"}>
                <div className={"text-[#ef6c50] text-md w-1/2 "}>®2023 Rohith K. All rights reserved</div>
                <div className={"flex flex-row justify-end align-middle w-1/2 gap-10 "}>
                    <div className={"w-64"}>
                        <ul className={"flex justify-center "}>
                            <li><a href="https://twitter.com/Rohithk93208098"><i
                                className={"fa fa-twitter fa-xl text-[#ef6c50]"}></i></a></li>
                            <li><a href={"https://www.instagram.com/r0hxth._/"}><i
                                className={"fa fa-instagram fa-xl text-[#ef6c50]"}></i></a></li>
                            <li><a href={"https://www.github.com/Rohithk2003"}><i
                                className={"fa fa-github fa-xl text-[#ef6c50]"}></i></a></li>
                            <li><a href={"https://www.linkedin.com/in/rohith-krishnan-645137262/"}><i
                                className={"fa fa-linkedin fa-xl text-[#ef6c50]"}></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
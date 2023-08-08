export default function Footer() {
    return (
        <footer>
            <div className={"flex flex-wrap flex-row justify-between w-full h-12 align-middle items-center p-10 pt-5"}>
                <div className={"text-[#ef6c50] text-md max-w-1/2 "}>®2023 Rohith K. All rights reserved</div>
                <div className={"flex flex-row max-w-1/2 gap-10 "}><span className={"text-white"}>Socials</span>
                    <ul className={"flex justify-center gap-10"}>
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
        </footer>
)
}
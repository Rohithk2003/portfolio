import Navbar from "@/components/navbar";
import Script from "next/script";
import Main from "@/components/main";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";
import ContactDetails from "@/components/contact";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            {/*<About/>*/}
            {/*<Services/>*/}
            {/*<Skills/>*/}
            {/*<ContactDetails/>*/}
            <Script src="https://kit.fontawesome.com/93a493583b.js" crossOrigin="anonymous"></Script>
        </>
    )
}

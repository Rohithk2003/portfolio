import Image from 'next/image'
import {Inter} from 'next/font/google'
import Navbar from "@/components/navbar";
import Script from "next/script";
import Main from "@/components/main";
import About from "@/components/about";
import Services from "@/components/services";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <About/>
            <Services/>
            <Script src="https://kit.fontawesome.com/93a493583b.js" crossOrigin="anonymous"></Script>
        </>
    )
}

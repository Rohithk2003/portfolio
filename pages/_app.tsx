import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "animate.css";
import localFont from "next/font/local";
const sf = localFont({ src: "./sf.otf", variable: "--font-sf" });
const ca = localFont({ src: "./ca.otf", variable: "--font-ca" });
const calibre = localFont({ src: "./calibre.otf", variable: "--font-calibre" });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${sf.variable} ${ca.variable} ${calibre.variable}`}>
			<Component {...pageProps} />
		</main>
	);
}

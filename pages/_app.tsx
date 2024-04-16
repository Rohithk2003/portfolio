import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "animate.css";
import localFont from "next/font/local";
const sf = localFont({ src: "./sf.otf", variable: "--font-sf" });
const ca = localFont({ src: "./ca.otf", variable: "--font-ca" });
const calibre = localFont({ src: "./calibre.otf", variable: "--font-calibre" });
const sf_pro = localFont({
	src: "./sf_pro.otf",
	variable: "--font-sf-pro",
});
const sf_display = localFont({
	src: "./sans_display.otf",
	variable: "--font-sf-display",
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${sf.variable} ${ca.variable} ${calibre.variable} ${sf_pro.variable} ${sf_display.variable}`}
		>
			<Component {...pageProps} />
		</main>
	);
}

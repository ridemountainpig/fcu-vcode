import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "FCU Validate Code",
    description:
        "逢甲大學驗證碼辨識 API - FCU VCode is an API designed to identify and validate FCU codes accurately.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://fcu-vcode.vercel.app/" />
            <meta property="og:title" content="FCU VCode" />
            <meta
                property="og:description"
                content="Empowering FCU Students Beyond OCR"
            />
            <meta
                property="og:image"
                content="https://fcu-vcode.vercel.app/favicon.ico"
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content="https://fcu-vcode.vercel.app/"
            />
            <meta property="twitter:title" content="FCU VCode" />
            <meta
                property="twitter:description"
                content="Empowering FCU Students Beyond OCR"
            />
            <meta
                property="twitter:image"
                content="https://fcu-vcode.vercel.app/favicon.ico"
            />
            <meta
                name="google-site-verification"
                content="MsZruHXSkmggHUEIMwVqn24AappLAZUSBmLcp4XwFGo"
            />
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

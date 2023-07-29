import React from "react";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";

import "./styles.css";
import downloadImageFromURL from "../utils/downloadImage";
import send_image_to_url from "../utils/vcode";
import CountUp from "../components/CountUp";

export default async function page() {
    const validateImageURL = "https://course.fcu.edu.tw/validateCode.aspx" + "?key=" + Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const destinationPath = './public/vcodeImage/validatedImage' + randomNum + '.jpg';
    await downloadImageFromURL(validateImageURL, destinationPath);
    const vcodeNum = await send_image_to_url(destinationPath);

    return (
        <div className="overflow-hidden">
            <div className="bg-slate-400 w-screen h-screen relative">
                <div className="flex justify-center items-center w-full h-4/6">
                    <div>
                        <div
                            className="title-text-shadow text-white font-extrabold tracking-wider -mt-20"
                            style={{ fontSize: "7rem" }}
                        >
                            FCU VCode
                        </div>
                        <div className="flex justify-center pt-5 pb-10">
                            <div className="title-span-text-shadow text-2xl tracking-wider font-bold">Empowering FCU Students Beyond OCR</div>
                        </div>
                        <Image
                            src={`/vcodeImage/validatedImage${randomNum}.jpg`}
                            alt="fcu validate code image"
                            height="80"
                            width="160"
                            style={{ opacity: "0.9" }}
                            className="mx-auto mt-5 border-white border-8 rounded-xl"
                        />
                        <div className="absolute left-0 right-0 flex justify-center items-center">
                            <div>
                                <div className="title-span-text-shadow tracking-wider font-extrabold h-60" style={{ fontSize: "9rem" }}>
                                    {
                                        vcodeNum < 1000 ? <CountUp endNum={"0"} /> : ""
                                    }
                                    {
                                        vcodeNum < 100 ? <CountUp endNum={"0"} /> : ""
                                    }
                                    {
                                        vcodeNum < 10 ? <CountUp endNum={"0"} /> : ""
                                    }
                                    <CountUp endNum={vcodeNum} />
                                </div>
                                <ArrowBigDown className="mx-auto h-20 w-20 text-white animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end h-2/6 w-full">
                    <Image
                        src="/homePageDownWave.svg"
                        alt="home page wave"
                        width={0}
                        height={0}
                        className="w-full overflow-hidden"
                    />
                </div>
            </div>
            <div className="bg-slate-400 w-screen">
                <div className="flex items-start h-2/6 w-full">
                    <Image
                        src="/homePageTopWave.svg"
                        alt="home page wave"
                        width={0}
                        height={0}
                        className="w-full overflow-hidden"
                    />
                </div>
            </div>
        </div>
    );
}

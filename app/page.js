import React from "react";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";

import "./styles.css";
import CountUp from "../components/CountUp";

const getVcodeImg = async () => {
    const vcodeUrl =
        "https://fcu-vcode-api.ridemountainpig.repl.co/validateImg";
    const vcodeImgResponse = await fetch(vcodeUrl, { cache: "no-store" });
    const vcodeResult = await vcodeImgResponse.json();
    return vcodeResult;
};

export default async function page() {
    const vcodeImgResponse = await getVcodeImg();
    const vcodeImgUrl =
        "https://fcu-vcode-api.ridemountainpig.repl.co/images/" +
        vcodeImgResponse.fileName;
    const vcodeNum = vcodeImgResponse.vcode;

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
                        <div className="flex justify-center pt-5">
                            <div className="title-span-text-shadow text-2xl tracking-wider font-bold">
                                Empowering FCU Students Beyond OCR
                            </div>
                        </div>
                        <Image
                            src={vcodeImgUrl}
                            alt="fcu validate code image"
                            height="80"
                            width="160"
                            style={{ opacity: "0.9" }}
                            className="mx-auto border-white border-8 rounded-xl mt-[10%] bg-white bg-opacity-60 h-20"
                        />
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
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <ArrowBigDown className="mx-auto h-20 w-20 text-white animate-bounce" />
                </div>
            </div>
            <div className="bg-slate-400 w-screen relative">
                <div className="flex items-start h-2/6 w-full">
                    <Image
                        src="/homePageTopWave.svg"
                        alt="home page wave"
                        width={0}
                        height={0}
                        className="w-full overflow-hidden"
                    />
                </div>
                <div className="absolute top-10 left-0 right-0 flex justify-center">
                    <div>
                        <div
                            className="title-span-text-shadow tracking-wider font-extrabold"
                            style={{ fontSize: "9rem" }}
                        >
                            {vcodeNum < 1000 ? <CountUp endNum={"0"} /> : ""}
                            {vcodeNum < 100 ? <CountUp endNum={"0"} /> : ""}
                            {vcodeNum < 10 ? <CountUp endNum={"0"} /> : ""}
                            <CountUp endNum={vcodeNum} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

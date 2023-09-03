import React from "react";
import Image from "next/image";
import { ArrowBigDown, Sailboat, Bird } from "lucide-react";

import "./styles.css";
import CountUp from "../components/CountUp";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Footer from "@/components/Footer";
import VcodeImage from "@/components/VcodeImage";

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

    const pyCode = `
    import requests
    
    def vcode(file_path):
        fcu_vcode_url = 'https://fcu-vcode-api.ridemountainpig.repl.co/validate'
        with open(file_path, 'rb') as file:
            image_data = file.read()
    
        files = {'file': ('image.png', image_data, 'image/png')}
    
        response = requests.post(fcu_vcode_url, files=files)
    
        if response.status_code == 200:
            print("Request was successful!")
            print("Response:", response.text)
        else:
            print(f"Request failed with status code: {response.status_code}")
            print("Response:", response.text)
    
    if __name__ == "__main__":
        vcode(IMAGE_PATH)
    `;

    const jsCode = `
    import axios from 'axios';
    import { promises as fs } from 'fs';
    import FormData from 'form-data';

    async function vcode(file_path) {
        const fcuVcodeUrl = 'https://fcu-vcode-api.ridemountainpig.repl.co/validate';
        try {
            const image_data = await fs.readFile(file_path);

            const formData = new FormData();
            formData.append('file', image_data, 'image.png');

            const response = await axios.post(fcuVcodeUrl, formData, {
                headers: formData.getHeaders(),
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    (async () => {
        await vcode(IMAGE_PATH);
    })();
    `;

    return (
        <div className="overflow-hidden">
            <div className="bg-slate-400 w-screen h-screen relative">
                <div className="flex justify-center items-center w-full md:h-4/6 h-full">
                    <div>
                        <div className="w-full title-text-shadow text-white font-extrabold tracking-wider -mt-20 sm:text-5rem md:text-7rem text-4rem">
                            <div className="flex justify-center">FCU VCode</div>
                        </div>
                        <div className="flex justify-center pt-5">
                            <div className="title-span-text-shadow text-base sm:text-lg md:text-2xl tracking-wider font-bold">
                                Empowering FCU Students Beyond OCR
                            </div>
                        </div>
                        <VcodeImage
                            src={vcodeImgUrl}
                            alt={"fcu validate code image"}
                        ></VcodeImage>
                    </div>
                </div>
                <div className="flex items-end h-2/6 w-full invisible md:visible">
                    <Image
                        src="/homePageDownWave.svg"
                        alt="home page wave"
                        width={0}
                        height={0}
                        className="w-full overflow-hidden"
                    />
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <ArrowBigDown className="mx-auto h-14 w-14 md:h-20 md:w-20 text-white animate-bounce" />
                </div>
            </div>
            <div className="bg-slate-400 w-screen relative">
                <div className="flex items-start h-2/6 w-full invisible md:visible">
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
                        <div className="title-span-text-shadow tracking-wider font-extrabold text-6rem md:text-9rem">
                            {vcodeNum < 1000 ? <CountUp endNum={"0"} /> : ""}
                            {vcodeNum < 100 ? <CountUp endNum={"0"} /> : ""}
                            {vcodeNum < 10 ? <CountUp endNum={"0"} /> : ""}
                            <CountUp endNum={vcodeNum} />
                        </div>
                    </div>
                </div>
                <div className="mt-20 lg:mt-0 mx-5 sm:mx-16 lg:mx-40">
                    <div className="mb-2">
                        <div className="w-full flex justify-center md:justify-start">
                            <span className="font-bold text-lg md:text-xl lg:text-3xl p-4 lg:p-5 text-slate-400 bg-white font-sans rounded-xl border-solid md:border-b-5 md:border-r-5">
                                How To Use
                            </span>
                        </div>
                        <div className="title-span-text-shadow text-lg lg:text-2xl tracking-wider font-bold mt-8 text-center md:text-left">
                            Send your validate code image to vcode api, it will
                            return the validate code number, and you can use it
                            anywhere you want.
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="bg-white text-slate-400 rounded-xl font-sans tracking-wider">
                            <div className="flex text-lg lg:text-xl p-3 lg:p-5 h-full items-center font-semibold">
                                <Sailboat className="mx-3" />
                                <span>Python Code</span>
                            </div>
                            <div className="text-base pl-3 lg:pl-5 pb-5 font-medium">
                                <div className="py-1 flex h-full items-center">
                                    <div className="w-6 h-6 mx-3">
                                        <Bird />
                                    </div>
                                    run{" "}
                                    <span className="mx-1 rounded-md md:border border-slate-200 md:bg-slate-100 md:px-1.5 md:py-0.5 text-slate-400">
                                        pip install requests
                                    </span>
                                </div>
                                <div className="py-1 flex h-full items-center">
                                    <div className="w-6 h-6 mx-3">
                                        <Bird />
                                    </div>
                                    <div>
                                        change{" "}
                                        <span className="md:mx-1 rounded-md md:border border-slate-200 md:bg-slate-100 md:px-1.5 md:py-0.5 text-slate-400">
                                            IMAGE_PATH
                                        </span>{" "}
                                        in code to your validate code image
                                        path.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-2">
                            <SyntaxHighlighter
                                language="python"
                                code={pyCode}
                            ></SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="bg-white text-slate-400 rounded-xl font-sans tracking-wider">
                            <div className="flex text-lg lg:text-xl p-3 lg:p-5 h-full items-center font-semibold">
                                <Sailboat className="mx-3" />
                                <span>JavaScript Code</span>
                            </div>
                            <div className="text-base pl-3 lg:pl-5 pb-5 font-medium">
                                <div className="py-1 flex h-full items-center">
                                    <div className="w-6 h-6 mx-3">
                                        <Bird />
                                    </div>
                                    run{" "}
                                    <span className="mx-1 rounded-md md:border border-slate-200 md:bg-slate-100 md:px-1.5 md:py-0.5 text-slate-400">
                                        npm install axios fs form-data
                                    </span>
                                </div>
                                <div className="py-1 flex h-full items-center">
                                    <div className="w-6 h-6 mx-3">
                                        <Bird />
                                    </div>
                                    <div>
                                        change{" "}
                                        <span className="md:mx-1 rounded-md md:border border-slate-200 md:bg-slate-100 md:px-1.5 md:py-0.5 text-slate-400">
                                            IMAGE_PATH
                                        </span>{" "}
                                        in code to your validate code image
                                        path.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-2">
                            <SyntaxHighlighter
                                language="javascript"
                                code={jsCode}
                            ></SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

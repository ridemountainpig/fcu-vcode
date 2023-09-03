"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function VcodeImage({ src, alt }) {
    const [imageDimensions, setImageDimensions] = useState({
        width: 160,
        height: 80,
    });

    useEffect(() => {
        function updateImageSize() {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 768) {
                setImageDimensions({ width: 120, height: 60 });
            } else {
                setImageDimensions({ width: 160, height: 80 });
            }
        }

        window.addEventListener("resize", updateImageSize);

        updateImageSize();

        return () => {
            window.removeEventListener("resize", updateImageSize);
        };
    }, []);

    return (
        <Image
            src={src}
            alt={alt}
            width={imageDimensions.width}
            height={imageDimensions.height}
            style={{ opacity: "0.9" }}
            className="mx-auto border-white md:border-8 border-4 rounded-xl mt-[10%] bg-white bg-opacity-60"
        />
    );
}

export default VcodeImage;

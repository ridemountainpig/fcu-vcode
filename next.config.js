/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "course.fcu.edu.tw",
            },
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fcu-vcode-api.ridemountainpig.repl.co",
            },
        ],
    },
};

module.exports = nextConfig;

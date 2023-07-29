/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "course.fcu.edu.tw",
            },
        ],
    },
};

module.exports = nextConfig;

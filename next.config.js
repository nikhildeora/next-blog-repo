/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    // remotePatterns : [
    //   {
    //     protocol : "https",
    //     hostname : "cdn.pixabay.com",
    //     port : "",
    //     pathname : "**",
    //   }
    // ]
    domains : ["cdn.pixabay.com"]
      // hostname : "cdn.pixabay.com"
}
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // ? Enviornament Variable -----------------------------------------/

  env: {
    MONGO_URI:
      "mongodb+srv://abc:abc@blogapp.40tpibt.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=AtlasApp",
    SECRET_KEY: "a343344$%$s3$%$dwdq3#$3",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },

  // ? Enviornament Variable -----------------------------------------/
};

module.exports = nextConfig;

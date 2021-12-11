/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CONTACT_API: process.env.NEXT_PUBLIC_CONTACT_API,
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
  },
}

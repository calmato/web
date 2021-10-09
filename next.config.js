/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    CONTACT_API_URL: process.env.CONTACT_API_URL,
  },
}

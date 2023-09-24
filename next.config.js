
/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            { source: '/', destination: '/ku', permanent: true }
        ]
    }
}

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET:"Instacertify",
    NEXTAUTH_URL:"https://instacertify.kusheldigi.com/",
    next:{
      api_url:"https://instacertify.kusheldigi.com/api/v1/"
    },

    server : {
		path:"https://instaback.kusheldigi.com/",
   		api:"https://instaback.kusheldigi.com/api/",
      	jwt_secret:"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"
    }
  },
  reactStrictMode: false,
  experimental: {
      scrollRestoration: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['instaback.kusheldigi.com','cdn11.bigcommerce.com'],
  }
}

module.exports = nextConfig
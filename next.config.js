/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET:"farichildFun@09072023",
    NEXTAUTH_URL:"https://demo.mwrweb.com/",
    next:{
      api_url:"https://demo.mwrweb.com/api/v1/"
    },
    bc:{
      store_url : "https://fairchild-air-force-base-store-1.mybigcommerce.com/",
      store_url_ecommerce : "https://ecommerce-1517983.mybigcommerce.com/",
      api_url : "https://api.bigcommerce.com/stores/suzeuussqe/",
      store_hash : "suzeuussqe",
      token : "b4rd5x5aimj4zwv6arra5bdle8qoi8w",
      client_id : "pysegvp5x9ttzevnat59h6ean0hmvy3",
      client_secret : "9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b",
      channel_ecommerce : 1517983
    },
    server : {
		path:"https://demoadmin.mwrweb.com/",
   		api:"https://demoadmin.mwrweb.com/api/",
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
    domains: ['demoadmin.mwrweb.com','admin.mwrdev.com','static-00.iconduck.com', 'stagingadmin.mwrweb.com', 'cdn.pixabay.com', 'images.pexels.com', 'admin.fairchildfun.com', 'admin.mwrdev.com', 'cdn11.bigcommerce.com', 'fairchild-air-force-base-store-1.mybigcommerce.com', 'https://fairchildfun.mwrdev.com/'],
  }
}

module.exports = nextConfig
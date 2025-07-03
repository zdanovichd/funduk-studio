/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'swiperjs.com',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/kontakty',
          destination: '/contacts',
          permanent: true,
        },
        {
          source: '/otzyvy',
          destination: '/reviews',
          permanent: true,
        },
        {
          source: '/remont-kvartir/odnokomnatnaya',
          destination: '/uslugi/odnokomnatnaya',
          permanent: true,
        },
        {
          source: '/remont-kvartir/dvuhkomnatnaya',
          destination: '/uslugi/dvuhkomnatnaya',
          permanent: true,
        },
        {
          source: '/remont-kvartir/trehkomnatnaya',
          destination: '/uslugi/trehkomnatnaya',
          permanent: true,
        },
        {
          source: '/o-kompanii',
          destination: '/about',
          permanent: true,
        },
        {
          source: '/remont-kvartir/studiya',
          destination: '/uslugi/studiya',
          permanent: true,
        },
        {
          source: '/evroremont',
          destination: '/uslugi/evroremont',
          permanent: true,
        },
        {
          source: '/remont-ofisov',
          destination: '/uslugi/remont-ofisov',
          permanent: true,
        },
        {
          source: '/remont-kvartir/dizaynerskiy',
          destination: '/uslugi/dizaynerskiy',
          permanent: true,
        },
        {
          source: '/remont-restoranov',
          destination: '/uslugi/remont-restoranov',
          permanent: true,
        },
        {
          source: '/dizayn-proekt-kvartir',
          destination: '/uslugi/dizajn-pod-klyuch',
          permanent: true,
        }
      ]
    }
  };

  export default nextConfig;

//   https://placehold.co/600x400/
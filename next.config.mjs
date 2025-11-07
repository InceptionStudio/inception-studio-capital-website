/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/inceptionpact',
        destination: 'https://inceptionstudio.hs-sites-na2.com/inceptionpact',
        permanent: false,
      },
      {
        source: '/lpdeck',
        destination: 'https://inceptionstudio.hs-sites-na2.com/lpdeck',
        permanent: false,
      },
      {
        source: '/deck',
        destination: 'https://inceptionstudio.hs-sites-na2.com/deck',
        permanent: false,
      },
      {
        source: '/fund',
        destination: 'https://inception.decilehub.com/pacts',
        permanent: false,
      },
      {
        source: '/meetings/:path*',
        destination: 'https://meetings-na2.hubspot.com/:path*',
        permanent: false,
      },
      {
        source: '/pact',
        destination: 'https://inception.decilehub.com/pacts',
        permanent: false,
      },
      {
        source: '/lpdeck-chinese',
        destination: 'https://inceptionstudio.hs-sites-na2.com/lpdeck-chinese',
        permanent: false,
      },
      {
        source: '/funddeck',
        destination: 'https://inceptionstudio.hs-sites-na2.com/funddeck',
        permanent: false,
      },
      {
        source: '/founderdeck',
        destination: 'https://23586544.fs1.hubspotusercontent-na1.net/hubfs/23586544/InceptionStudioDeck.pdf',
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
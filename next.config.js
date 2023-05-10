const { withExpo } = require('@expo/next-adapter');
​
module.exports = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    // Expo/React Native packages need to be transpiled here
    'react-native',
    'react-native-web',
    'expo',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});
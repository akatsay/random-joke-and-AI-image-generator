const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "@expo/webpack-config",
    "@react-navigation/native",
    "@react-navigation/native-stack",
    "expo-status-bar",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-url-polyfill",
    'expo-next-react-navigation',
    // Expo/React Native packages need to be transpiled here
    'react-native',
    'react-native-web',
    'expo',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});
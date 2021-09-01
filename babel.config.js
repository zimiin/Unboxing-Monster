const plugins = () => {
  const defaultPlugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@src': './src'
        },
      }, 
    ],
  ];

  if (process.env.NODE_ENV === "production") {
    defaultPlugins.push("transform-remove-console");
  }

  return defaultPlugins
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: plugins(),
};

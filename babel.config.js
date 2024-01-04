module.exports = api => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json'],
        alias: {
          src: './src',
          screen: './src/Screens',
          services: './src/Services',
          hook: './src/Hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ...(api.env() !== 'development' ? ['transform-remove-console'] : []),
  ],
});

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

config.watchFolders = [
    // Add your custom folder here:
    __dirname + '/components',
  ];

module.exports = withNativeWind(config, { input: './global.css' })
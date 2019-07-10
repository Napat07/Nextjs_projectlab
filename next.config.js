// next.config.js
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const withCSS = require('@zeit/next-css')
module.exports = withPlugins([withCSS, withFonts, withImages]);
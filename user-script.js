const packageJson = require('./package.json')
module.exports = `
// ==UserScript==
// @namespace https://github.com/dotennin/baidu-pan-downloader
// @name 百度网盘下载管理器
// @description ${packageJson.description}
// @version ${packageJson.version}
// @author ${packageJson.author}
// @license ${packageJson.license}
// @compatible        chrome/83.0.4103.97 passed
// @compatible        edge/83.0.478.54 passed
// @compatible        firefox untested
// @compatible        opera untested
// @compatible        safari untested
// @include https://pan.baidu.com/disk/*
// @connect baidu.com
// @connect qdall01.baidupcs.com
// @resource customStyle https://dotennin.github.io/baidu-pan-downloader/src/style.css
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// @grant GM_getResourceText
// @grant GM_download
// @grant GM_addStyle
// @grant GM_notification
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @run-at document-idle
// ==/UserScript==
`
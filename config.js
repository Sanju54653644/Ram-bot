// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VVXZOiOBT9K1t51Rq+RMSqrlpEQPBbVNSteYgQIAqBJkHAKf/7Fnb39DzsTPXyFJJwz7n3nHv5AUiGKZqiBgx/gLzAN8hQu2RNjsAQjMowRAXoggAyCIag0UIxHt8nvQDyfLaa9CZ2HxvHSa+OfH7dP/OhUfHqiE7T3gt4dEFenhPs/yEgNNe9/uHWkQ+Z1slS6jbK4lZznZkU32l88seLqcj4o3EQohfwaCNCXGASGXmMUlTAZIqaFcTF1+hjm7e4i0X21h3X8Ta1Np5iVMQ573OjHMgTrZFHJFHnr94X6dsBP1JssT6y4yktFeVm7tyloAcRPFXVnpP2iWxxDkzxKHujT3FEUGAHiDDMmi/X3V5i176JzhV60xl/iAeuyS22+/VhbmwZVDQ9x6a/tF4pP/8a8WCS1psZZZuyPtxrU3SahVmUu5Vt6fiYzkKy24fTOzotzeuvxFfFh1eu/6fujTarx9fMsqyZsTlcCD32YHYZeSlbcgTq7LpAnJaG7nk3+Bp9d1FvvI6mbqO5VfGWHsnZ5rLlel7dS6ahRQdUXjQsmQcX+kkfsrL4E8vbpSMr6xGZC1wVWmN+txVcz4ogPze99cm0N2Za+YvA2Wn1arfZOqinrN3ZNUoP0mXFzUR17WO9zKtTWWW9EXFHWX7F65dnRlfU2AEYCo8uKFCEKSsgwxl57vX5LoDBzUV+gdizvMB0VL6zVYT9TtSN0dbdw4xMzBmXjrPMh5kW+xu29FNPWlxfQBfkReYjSlEwwZRlRTNHlMIIUTD853sXEFSzN+FauIEgdUGIC8p2pMyTDAYfsv48hb6flYS5DfH1doEKMOQ/txFjmES0rWRJYOHH+Ib0GDIKhiFMKPqZIypQAIasKNHPvtWzoC29a0j60RM80AXpUxIcgCFQhYEqKtKgJ6nSUJb/pt+qNizM828EMdAFyfOaIMp8XxAVRRgMJL7f3mwPuoDA9BkckkvW/DWHMWRZW/x34i1OgBjECQVDoDtpJdhXw1gemkY9WpZmRJoeaeAz0Q/PvGni9V4tzzNCoz+PztdYTZSBeHaouhMOx9QMncKZ9G8ham567+U/goAhYPbdKYVGkujpdHHNpsNpPme6Z8VO1ZNcnab7+xLzrhbDtEN4xVmtOpnndAZRcpwtzx2GA17IhHp+upEMS2rdKbX1uHpp0QJ0wz76FWwTVYajWjN31Wma4GDzgsDMZiWdr85UXlY0EZf1ZRz1QzIRwlVwWxp2UEur8d0h7k6Nrr2E04TI6stypQ+M6WIcTO+X6s3Nz25K3qcYfvqslbB9DTF6DoV3LX6r1Rvh1nL8o/vLt+/j5TctOtqX0zhJ4km9vNiWbIcnxC3S5rzaL/aiEx8a2Gw6hSTRoirB4/G9C/IEsjAr0vZfQ4Iie4IXWdla2CZh9gcwXaO2FkWLNuMEUqZ9tsUWp4gymOZgKCiqKAqCxMtdkDZanrsMso92Alr7rGAJHv8C86wMKWsHAAA=",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "♛ 𝕽𝕬𝕸-𝕸𝕯 ♛",
  MODE: process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/JawadTechYT/KHAN-MD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTERID: process.env.NEWSLETTERID || "120363426563532140@newsletter",
 
  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "918927384393",
  OWNER_NAME: process.env.OWNER_NAME || "👑 𝙎𝘼𝙉𝙅𝙊𝙔 𝙈𝘼𝙃𝘼𝙏𝙊 👑",
  SUDO: process.env.SUDO 
    ? process.env.SUDO.split(',').map(s => s.trim()) 
    : ["123@lid"],
  BANNED: process.env.BANNED 
    ? process.env.BANNED.split(',').map(s => s.trim()) 
    : [],
  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS 
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS 
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "😂", "😮", "😎", "🥰", "👋", "🤝", "💯", "✨", "⭐", "🎉", "🤗", "😊", "🙌", "💪", "👏", "✅", "🎈", "🎊", "🏆", "⚡", "💫", "👌", "🤙", "💖", "💕", "💗", "👑", "💎", "🌟", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡", "🎠"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS 
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim()) 
    : ["👑", "💎", "⭐", "✨", "🔥", "💯", "✅", "🎉", "🤖", "⚡", "💫", "🌟", "🏆", "👾", "🚀", "💪", "🎯", "🔱", "♾️", "⚜️"],
  LINK_WARNINGS: process.env.LINK_WARNINGS 
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim()).filter(s => s) 
    : [],
 
  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*♛ 𝕽𝕬𝕸-𝕸𝕯 ♛ 𓂀 𝚅𝙸𝙴𝚆𝙴𝙳 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𓂀 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "true",
  OWNER_REACT: process.env.OWNER_REACT || "true",
  STICKER_NAME: process.env.STICKER_NAME || "♛ 𝕽𝕬𝕸-𝕸𝕯 ♛",
  AUTO_STICKER: process.env.AUTO_STICKER || "true",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",
  
  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/9a13ua.png",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://files.catbox.moe/99095i.png",
  AUDIO_URL: process.env.AUDIO_URL || 'https://files.catbox.moe/oxhfc1.m4a',
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",
  
  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "false",
  ANTI_EDIT: process.env.ANTI_EDIT || "true",
  ANTIEDIT_PATH: process.env.ANTIEDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*『👑』𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑺 𝑴𝒖𝒔𝒊𝒄 𝑷𝒖𝒓𝒖𝒍𝒊𝒂『👑』*",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  
  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "true",
  GOODBYE: process.env.GOODBYE || "true",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "*_@user joined the group, welcome! 🎉_*",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "*_@user has left the group, we will miss them! 👋_*",

  VERSION: process.env.VERSION || "10.0 Bᴇᴛᴀ",
  TIMEZONE: process.env.TIMEZONE || "Asia/kolkata",
};

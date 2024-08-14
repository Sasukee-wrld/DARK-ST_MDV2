
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50948748102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09kb2FrWHR1VmIvVmRmV0VQbXN6SW9jdVJWY24yWTFEaityZ25jT3UxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWpEU1VYSmd3OHVndjE5Qm54T093SlNaUXZrZ0JxSmNwbldsK1J1bThSMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR3pYY1YvWVRMQmtmbnZmZkhCZE11OE5SVnJOMDYranVkc3EwWFlTZ0hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyQzZyTDN6eDF5LzhEWXVaMktkcW1oZWJvaG45WlgrY2lTVU5NbEdNM1NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9DSkdLS1hSWWVOSmQxelkrT2hLWUhFS1k1TVczZlRSVzFyUWdXOUxwMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzMmxhb1VyVExmM0ZEMHBsakZzTlN2dnFEZ3ZhTXRmSjM2UTdiY3Nmems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5VOGk2L3k2UEhKUnRwMk9Ra0I4SzdzYXdOS3JKZkI2eXZjU0sxRWoyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhsV3pJb0J5c0laRjltdnVBUkNZbi9qWUE2WG5XN1JsS2pIYTFvc2owST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjViY3dJZ2RxL2E0QzFjZ3diYlNFQ0tIR05uRUJ2UnZlK1dxWWgrRDA3OGZCcW5PYVZsU1ExajFCNHUwRFFuWlJmR3ZHZ01pVW96U2M1bHh0T3lpdEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6Im9SZXpGRzVIekF6SHJLV3lkOC9vRXVBeGJHK2lmNktTUlVycXA3eC90enc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDg3NDgxMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzM3ODg5OTFGNjg2NkU2RDYxMDQ1OTYyQjA3OEY5NUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzY2MjAxOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV0RTN1dNcGVUa1dfTnRRMktmcVNzUSIsInBob25lSWQiOiIxZTlmYWU1MS1mYjM0LTQ5ZGItYmRkYy02NGEzYTcwN2ZiMWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2lCZjVPVUtITTBNNTJzUmNFQVl1QzNSYW93PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRRMEZ1c3ZaNklqMVA3cHluV2JCeG9xTnJWMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCUVdBSkg2OSIsIm1lIjp7ImlkIjoiNTA5NDg3NDgxMDI6MzlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mTzFmSUhFTFQ5ODdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5hSXZJY1VOUExIWGpsK25xd1VEWERPYW1pZW9VcDlPYWh0ZGJWV2dQaTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpSQnphcFFmODhtbkV4QUJ3bklUZHQzNDB3Q2Z4VXhFUEYwVEY5NHpHSVlMVUlNRTdEcWJoMWREcktQNmR4SEhmUHE5ckJvbG5oSkJqeHJBaDFTU0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBYlVrNnBrRG54MENDYUQ4MVZqOFdWcEZOL0h1M3kybndJNkxUZlFIQVp5UTVBS2liUlpnOG9jT0JyMm10T3htcGtiTXUvSGp4WXlpRE1DbkNLL2dEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ4NzQ4MTAyOjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQloyaUx5SEZEVHl4MTQ1ZnA2c0ZBMXd6bXBvbnFGS2ZUbW9iWFcxVm9ENHUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NjIwMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWNGIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝👑",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

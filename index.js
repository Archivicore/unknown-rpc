const discord = require('discord.js-selfbot-v13');
const keepAlive = require("./server.js");
//const keepAlive = require("./server")

//login
require('dotenv').config();
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const client = new discord.Client({
          checkUpdate: false,
      });

const settings = require('./settings.json');
const APPID = settings.APPID;
const URl = settings.URl;
const TYPE = "STREAMING";
//detail
const DETAILS1 = settings.DETAILS1; //DETAILS 1
const DETAILS2 = settings.DETAILS2; //DETAILS 2
const DETAILS3 = settings.DETAILS3; //DETAILS 3
const DETAILS4 = settings.DETAILS4; //DETAILS 4
const DETAILS5 = settings.DETAILS5; //DETAILS 5
//name
const NAME1 = settings.NAME1; //NAME 1
const NAME2 = settings.NAME2; //NAME 2
const NAME3 = settings.NAME3; //NAME 3
const NAME4 = settings.NAME4; //NAME 4
const NAME5 = settings.NAME5; //NAME 5
//state
const STATE1 = settings.STATE1; //STATE 1
const STATE2 = settings.STATE2; //STATE 2
const STATE3 = settings.STATE3; //STATE 3
const STATE4 = settings.STATE4; //STATE 4
const STATE5 = settings.STATE5; //STATE 5
//imageAssets
const LIK1 = settings.LIK1; //KEY 1
const LIK2 = settings.LIK2; //KEY 2
const LIK3 = settings.LIK3; //KEY 3
const LIK4 = settings.LIK4; //KEY 4
const LIK5 = settings.LIK5; //KEY 5
const LIT = "[jovica.id|unknownhighlights]";
//
const SIK = settings.SIK; //KEY 1
//const SIK1 = settings.SIK1; //KEY 1
//const SIK2 = settings.SIK2; //KEY 2
//const SIK3 = settings.SIK3; //KEY 3
//const SIK4 = settings.SIK4; //KEY 4
//const SIK5 = settings.SIK5; //KEY 5
const SIT = "CreatorMoody An";

client.on("ready", () => {
   const r = [
        {application_id: APPID, name: NAME1, type: TYPE, url: URl, details: DETAILS1, state: STATE1, assets:{large_image: LIK1, large_text: LIT, small_image: SIK, small_text: SIT}}, //list 1
        {application_id: APPID, name: NAME2, type: TYPE, url: URl, details: DETAILS2, state: STATE2, assets:{large_image: LIK2, large_text: LIT, small_image: SIK, small_text: SIT}} //list 2
    ];
   let activity = 1;
   setInterval(() => {
        r[2] = new discord.RichPresence()
	           .setApplicationId(APPID)
	           .setType(TYPE)
	           .setURL(URl)
	           .setState(STATE3)
	           .setName(NAME3)
	           .setDetails(DETAILS3)
//	           .setStartTimestamp(Date.now())
	           .setAssetsLargeImage(LIK3)
	           .setAssetsLargeText(LIT)
	           .setAssetsSmallImage(SIK)
	           .setAssetsSmallText(SIT)
//	           .addButton('name', 'https://link.com/'); //list 3
        r[3] = new discord.RichPresence()
	           .setApplicationId(APPID)
	           .setType(TYPE)
	           .setURL(URl)
	           .setState(STATE4)
	           .setName(NAME4)
	           .setDetails(DETAILS4)
//	           .setStartTimestamp(Date.now())
	           .setAssetsLargeImage(LIK4)
	           .setAssetsLargeText(LIT)
	           .setAssetsSmallImage(SIK)
	           .setAssetsSmallText(SIT)
//	           .addButton('name', 'https://link.com/'); //list 4
        r[4] = new discord.RichPresence()
	           .setApplicationId(APPID)
	           .setType(TYPE)
	           .setURL(URl)
	           .setState(STATE5)
	           .setName(NAME5)
	           .setDetails(DETAILS5)
//	           .setStartTimestamp(Date.now())
	           .setAssetsLargeImage(LIK5)
	           .setAssetsLargeText(LIT)
	           .setAssetsSmallImage(SIK)
	           .setAssetsSmallText(SIT)
//	           .addButton('name', 'https://link.com/'); //list 5
        if (activity > 4) activity = 0;
        client.user.setActivity(r[activity])
        activity++;
   }, 10000)
   console.log(`${client.user.tag} is running on !`);
});
keepAlive();
client.login(TOKEN);

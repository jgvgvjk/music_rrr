const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const ytdl = require('ytdl-core');
const request = require('request');
var Canvas = require('canvas')
const prettyMs = require('pretty-ms');
const fkkRecently = new Set();
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const fs = require('fs');
const ms = require("ms");
const dateFormat = require('dateformat');


var user = {};
var warn = {};



client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

      delete warn[message.author.id];
      delete user[message.author.id];
      const embed500 = new Discord.RichEmbed()
       .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
        .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\n  MuteChat / ميوت كتابي\n")
        .setFooter("Anti - Spam")
        .setColor("#c91616")
      message.channel.send(embed500)
          const embed20 = new Discord.RichEmbed()
        .setTitle(":scales: | تمت معاقبتك")
        .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
            .setFooter("Anti - Spam")
        .setColor("#c91616")
      
       message.author.send(embed20)
    
    }
  });



client.on('message',message =>{
  var prefix = ".";
  if(message.content.startsWith(prefix + 'top')) {
message.guild.fetchInvites().then(i =>{
var invites = [];

i.forEach(inv =>{
  var [invs,i]=[{},null];
  
  if(inv.maxUses){
      invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
  }else{
      invs[inv.code] =+ inv.uses;
  }
      invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

});
var embed = new Discord.RichEmbed()
.setColor("#000000")
.setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
.setThumbnail(message.author.avatarURL)
message.channel.send({ embed: embed });

});

  }
});


client.on("message", message => { 
    var prefix = ".";
    var args = message.content.toLowerCase().split(' ').slice(1).join(' ');   
    if ( message.content.toLowerCase().startsWith( prefix + "roles" ) ){
        if( !args ) return message.reply('**:x: يرجى وضع أسم الرتبة **');
        var role = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(args)>-1).first();
        if( !role ) return message.reply( "** :x: لا توجد رتبة بهذا الأسم **" ); 
        if( !isArabic(args) ) return message.reply('**:white_check_mark: [ '+message.guild.members.filter(m=>m.roles.get(role.id)).size+' ] هو [ '+role.name+' ] عدد الذين يملكون رتبة  **'); 
        message.reply('**:white_check_mark: [ '+message.guild.members.filter(m=>m.roles.get(role.id)).size+' ] عدد الذين يملكون رتبة [ '+role.name+' ] هو  **'); 
    
    } 
});
    client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= ".";
        if(message.content.startsWith(prefix + 'server2')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)

       message.channel.send({ embed: embed });

      }
    });

    client.on('message', message => {
        if(!message.channel.guild) return;
        var prefix = ".";
    if(message.content.startsWith(prefix + 'move')) {
        var cmdrole = message.guild.roles.find("name", config.cmdrole)
           if (message.member.hasPermission("MOVE_MEMBERS")) {
                  if (message.mentions.users.size === 0) {
                         return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
                  }
                  if (message.member.voiceChannel != null) {
                         if (message.mentions.members.first().voiceChannel != null) {
                                var authorchannel = message.member.voiceChannelID;
                                var usermentioned = message.mentions.members.first().id;
                               var embed = new Discord.RichEmbed()
                                  .setTitle("Succes!")
                                  .setColor("#000000")
                                  .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
                                var embed = new Discord.RichEmbed()
                                  .setTitle(`You are Moved in ${message.guild.name}`)
                                  .setColor("#000000")
                                  .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                                                              message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                                message.guild.members.get(usermentioned).send(embed)
                         } else {
                                message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                         }
                  } else {
                         message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
                  }
           } else {
                  message.react("❌")
           }
        }
        });


         client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = ".";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', message => {
    var prefix = ".";
   if(message.content.startsWith(prefix + 'server')) {
if(!message.channel.guild) return;
const now = new Date();
dateFormat(now, '***On dddd, mmmm dS, yyyy, h:MM:ss TT***');

let region = {
"brazi": "**Brazil** :flag_br:",
"eu-central": "**Central Europe** :flag_eu:",
"singapore": "**Singapore** :flag_sg:",
"us-central": "**U.S. Central** :flag_us:",
"sydney": "**Sydney** :flag_au:",
"us-east": "**U.S. East** :flag_us:",
"us-south": "**U.S. South** :flag_us:",
"us-west": "**U.S. West** :flag_us:",
"eu-west": "**Western Europe** :flag_eu:",
"singapore": "**Singapore** :flag_sg:",
"london": "**London** :flag_gb:",
"japan": "**Japan** :flag_jp:",
"russia": "**Russia** :flag_ru:",
"hongkong": "**Hong Kong** :flag_hk:"
}
let icon;
if (message.guild.iconURL) {
icon = message.guild.iconURL
}
if (!message.guild.iconURL) {
icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/2000px-Blue_computer_icon.svg.png"
}
let owner = message.guild.owner.user
if (!owner) {
owner = "None for some reason..."
};

const millis = new Date().getTime() - message.guild.createdAt.getTime();
const days = millis / 1000 / 60 / 60 / 24;



const verificationLevels = ['**None**', '**Low**', '**Medium**', '**(╯°□°）╯︵ ┻━┻** (High)', '**┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻** (Extreme)'];
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

var embed = new Discord.RichEmbed()
.setTitle(`**${message.guild.name}** 👪`)
.setColor("#00ced1")
.setThumbnail(icon)
.addField("**أيدي السيرفر**", `***>***__${message.guild.id}__`, true)
.addField("***تاريخ انشاء السيرفر** <:date:394910274177597491>", `***>***__${dateFormat(message.guild.createdAt)}__`)
.addField("**موقع السيرفر**", `***>***__${region[message.guild.region]}__`, true)
.addField("**عدد اعضاء السيرفر** 👥", `***>***__${message.guild.members.filter(m => m.presence.status !== 'offline').size} **Online** out of ${message.guild.memberCount} **members**__`, true)
.addField("**صاحب السيرفر** ", `***>***__${owner.username}__`, true)
.addField("**عدد رومات الكتابة**", `***>***__${message.guild.channels.filter(m => m.type === 'text').size} Text Channels__`, true)
.addField("**عدد رومات الصوتية**", `***>***__${message.guild.channels.filter(m => m.type === 'voice').size} Voice Channels__`, true)
.addField("**مســتوى حمــاية الســيرفر** 📶", `***>***__${verificationLevels[message.guild.verificationLevel]}__`, true)
.addField("**عدد الرتب**", `***>***__${message.guild.roles.size} رتبة__ `, true)
message.channel.send({ embed: embed });
}
});
client.on("message", message => {
     var prefix = "+";    
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
     if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
	if( msg.toLowerCase().startsWith( prefix + 'rolere' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', message => { 
        var prefix = "ا";                     
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'لوان')) {
   if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
   message.channel.sendFile(`https://i.imgur.com/T5WN89n.png`).then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "Red"));
       message.member.removeRole(message.guild.roles.find("name", "Black"));
       message.member.removeRole(message.guild.roles.find("name", "Yellow"));
       message.member.removeRole(message.guild.roles.find("name", "Purple"));
       message.member.removeRole(message.guild.roles.find("name", "Green"));
       message.member.removeRole(message.guild.roles.find("name", "Blue"));
       msg.delete();
       message.channel.send(`**تم اعطائك اللون __الاحمر__.**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "Green"));
           message.member.removeRole(message.guild.roles.find("name", "Black"));
           message.member.removeRole(message.guild.roles.find("name", "Yellow"));
           message.member.removeRole(message.guild.roles.find("name", "Purple"));
           message.member.removeRole(message.guild.roles.find("name", "Red"));
           message.member.removeRole(message.guild.roles.find("name", "Blue"));
           msg.delete();
           message.channel.send(`**تم اعطائك اللون __الاخضر__.**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "Purple"));
               message.member.removeRole(message.guild.roles.find("name", "Black"));
               message.member.removeRole(message.guild.roles.find("name", "Yellow"));
               message.member.removeRole(message.guild.roles.find("name", "Green"));
               message.member.removeRole(message.guild.roles.find("name", "Red"));
               message.member.removeRole(message.guild.roles.find("name", "Blue"));
               msg.delete();
               message.channel.send(`**تم اعطائك اللون __البنفسجي__.**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "Yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "Black"));
                   message.member.removeRole(message.guild.roles.find("name", "Purple"));
                   message.member.removeRole(message.guild.roles.find("name", "Green"));
                   message.member.removeRole(message.guild.roles.find("name", "Red"));
                   message.member.removeRole(message.guild.roles.find("name", "Blue"));
                   msg.delete();
                   message.channel.send(`**تم اعطائك اللون __الاصفر__.**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "Black"));
                       message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "Purple"));
                       message.member.removeRole(message.guild.roles.find("name", "Green"));
                       message.member.removeRole(message.guild.roles.find("name", "Red"));
                       message.member.removeRole(message.guild.roles.find("name", "Blue"));
                       msg.delete();
                       message.channel.send(`**تم اعطائك اللون __الاسود__.**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "Purple"));
                           message.member.removeRole(message.guild.roles.find("name", "Green"));
                           message.member.removeRole(message.guild.roles.find("name", "Red"));
                           message.member.removeRole(message.guild.roles.find("name", "Blue"));
                           message.member.removeRole(message.guild.roles.find("name", "Black"));
                           msg.delete();
                           message.channel.send(`**تم ازالة جميع الالوان منك.**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "Blue"));
                               message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "Purple"));
                               message.member.removeRole(message.guild.roles.find("name", "Green"));
                               message.member.removeRole(message.guild.roles.find("name", "Red"));
                               message.member.removeRole(message.guild.roles.find("name", "Black"));
                               msg.delete();
                               message.channel.send(`**تم اعطائك اللون __الازرق__.**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });
 




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` ═════════════════════ஜ۩۞۩ஜ═════════════════════ 
  　 　 　　　                       •● W E L C O M E - T O - H P - C L A N●• 
  ═════════════════════ஜ۩۞۩ஜ═════════════════════
  : السلام عليكم ورحمة الله وبركاته.. قوانين جديدة للكلان
  : أول شي : بالنسبة للشعار تغير
  : الشعار بإسمك باللعبة 
  ! ᴴᴾ اسمك
  : الشعار بإسمك بالدسكورد مب بالسيرفر
  ! HP اسمك
  : ملاحظة
  ! إذا حطيت شعار الدسكورد باللعبة أو شعار اللعبة بالدسكورد أو شعار غير ذولا تنشال رتبتك - 
  --------------------------------------
  : ثاني شي : بالنسبة للرتب
  "إذا تطلب رتبة من أول مرّة تاخذ إنذار من دون نقاش و ع كل مرة فيها تطلب رتبة تاخذ إنذار"
  "ولتصير عضو أساسي بالكلان لازم تحط بإسمك بالدسكورد الشعار الي فوق بالرسالة، ولازم نختبرك"
  "وإذا تقول انا خويكك ومن مشتركينك ومدري ايش.. هذا الكلام عليه إنذار مثلك مثل باقي الناس"
  : ملاحظة
  إنذار أول، إنذار ثاني، إنذار ثالث؛ تتبند -
  --------------------------------------
  : (ثالث شي : السب بشكل عام، أو بشكل خاص (مزح وطقطقة مع خويك
  "ممنوع السب بغض النظر لو كان مشكلة، أو حتى مع خويك يعني مزح.. المزح بالسب ممنوع"
  "تبي تسب سبه خاص مثل م تبي بس بالشات العام ممنوع السب"
  "وإذا تسب بالشات تاخذ ميوت كتابي وإنذار"
  : ملاحظة
  إذا تقول لأحد من الإدارة تفك عنك الميوت بتبلع إنذار -
  -------------------------------------
  ..وبس هذي القوانين الجديدة .. الرجاء من كل من في السيرفر أن يتقيد بها وخاصةً الأصدقاء.
  - سيتم التعديل على بعض الرتب والرومات.. ونتمنى لكم التوفيق. 
   طاقم الإدارة ~
    ${member} `) 
}).catch(console.error)
})

 



const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = process.env.BOT_TOKEN;
client.login(discord_token);
client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
    client.user.setGame(prefix + 'مساعدة || Moha');
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

client.on('message', function(message) {
var prefix = ".";
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith(prefix + 'شغل')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setFooter('طلب بواسطة: ' + message.author.tag)
				.setDescription('**قم بإدراج رابط او اسم الأغنيه**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(client.user.username, client.user.avatarURL)
						.addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
						  ${videoInfo.title}
						  **`)
						.setColor("RANDOM")
						.setFooter('|| ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(client.user.username, client.user.avatarURL)
						.addField('||**__تم تشغيل __**', `**${videoInfo.title}
							  **`)
						.setColor("RANDOM")
                        .addField(`__من قبل__: ${message.author.username}`, `**__Moha__**`)
						.setThumbnail(videoInfo.thumbnailUrl)
							
					// .setDescription('?')
					message.channel.sendEmbed(play_info)
					message.channel.send(`__تم التشغيل__
							**${videoInfo.title}** __اسم الأغنية__
		      ${message.author.username}         __بواسطة__ `)
					// client.user.setGame(videoInfo.title,'https://www.twitch.tv/Moha');
				});
			});
		}
	}
	else if (mess.startsWith(prefix + 'تخطي')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		message.channel.send(':ok:').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		});
	}
	else if (message.content.startsWith(prefix + 'صوت')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		// console.log(args)
		if (args > 999999999) return message.channel.send('1 - 999999999 || **__لا أكثر ولا أقل__**')
		if (args < 1) return message.channel.send('1 - 999999999 || **__لا أكثر ولا أقل__**')
		dispatcher.setVolume(1 * args / 50);
		message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
	}
	else if (mess.startsWith(prefix + 'وقف')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		message.channel.send(':ok:').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith(prefix + 'كمل')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
			message.channel.send(':ok:').then(() => {
			dispatcher.resume();
		});
	}
	else if (mess.startsWith(prefix + 'اطلع')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		message.channel.send(':ok:');
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith(prefix + 'تعال')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		message.member.voiceChannel.join().then(message.channel.send(':ok:'));
	}
	else if (mess.startsWith(prefix + 'شغل')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
		if (isPlaying == false) return message.channel.send(':anger: || **__تم التوقيف__**');
		let playing_now_info = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
				  ${videoInfo.title}
				  **`)
			.setColor("RANDOM")
			.setFooter('طلب بواسطة: ' + message.author.tag)
			.setThumbnail(videoInfo.thumbnailUrl)
		//.setDescription('?')
		message.channel.sendEmbed(playing_now_info);
	}
});

function skip_song(message) {
	if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
	dispatcher.end();
}

function playMusic(id, message) {
	voiceChannel = message.member.voiceChannel;


	voiceChannel.join().then(function(connectoin) {
		let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
			filter: 'audioonly'
		});
		skipReq = 0;
		skippers = [];

		dispatcher = connectoin.playStream(stream);
		dispatcher.on('end', function() {
			skipReq = 0;
			skippers = [];
			queue.shift();
			queueNames.shift();
			if (queue.length === 0) {
				queue = [];
				queueNames = [];
				isPlaying = false;
			}
			else {
				setTimeout(function() {
					playMusic(queue[0], message);
				}, 500);
			}
		});
	});
}

function getID(str, cb) {
	if (isYoutube(str)) {
		cb(getYoutubeID(str));
	}
	else {
		search_video(str, function(id) {
			cb(id);
		});
	}
}

function add_to_queue(strID) {
	if (isYoutube(strID)) {
		queue.push(getYoutubeID(strID));
	}
	else {
		queue.push(strID);
	}
}

function search_video(query, cb) {
	request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
		var json = JSON.parse(body);
		cb(json.items[0].id.videoId);
	});
}


function isYoutube(str) {
	return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on('message', message => {
var prefix = ".";
     if (message.content === prefix +"مساعدة") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر البوت__**`,`
.    **${prefix}تعال**
	 عشان يدخل البوت الروم
	 **${prefix}شغل**
	 امر تشغيل الأغنية , !شغل الرابط او اسم الأعنية
	 **${prefix}تخطي**
	 تغير الأغنية
	 **${prefix}وقف**
	 ايقاف الأغنية
	 **${prefix}كمل**
     مواصلة الأغنية
	 **${prefix}صوت**
	 مستوى الصوت 1-999999999
	 **${prefix}اطلع**
	 خروج البوت من الروم
	 
	 
	 prefix = ${prefix}
	 ping = ${Date.now() - message.createdTimestamp}ms
	 for help = <@!2344543680726302839> 
	 By Moha	 `)

      message.channel.send({embed});
	 }
	});

client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;
if (message.content.startsWith(prefix + 'dnd')) {
  if (message.author.id !== '234454368072630283') return message.react('⚠')
client.user.setStatus('dnd');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;


if (message.content.startsWith(prefix + 'online')) {
  if (message.author.id !== '234454368072630283') return message.react('⚠')
  client.user.setStatus('online');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 428733432731009024)
return;
if (message.content.startsWith(prefix + 'idle')) {
   if (message.author.id !== '234454368072630283') return message.react('⚠')
client.user.setStatus('idle');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 428733432731009024)
return;


if (message.content.startsWith(prefix + 'offline')) {
    if (message.author.id !== '234454368072630283') return message.react('⚠')
client.user.setStatus('invisible');  
message.react("✔")
}
                        
 });
 


  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });


  client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });


 
 client.on("message", message => {
    var prefix = ".";
    const command = message.content.split(" ")[0];

    if(command == prefix+"voicekick"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
 message.reply(' has been successfullly kicked from voice.');
    
      });
     });
    }
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "HP ( Horrifying Players )")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "HP ( Horrifying Players )")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` :hearts: **تم دعوته من قبل ${Invite.inviter} :hearts: 
:hearts: رابط الدعوه --> https://discord.gg/${Invite.code} :hearts:
:hearts: عضو رقم --> ${member.guild.memberCount} :hearts: **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});
let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
     
var prefix = ".";

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'عواصم')) {
	if(!message.channel.guild) return

const type = require('./fkk/3wasm.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[message.author.id];
			userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'لغز')) {
	if(!message.channel.guild) return

const type = require('./fkk/quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[message.author.id];
			userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
	if(!message.channel.guild) return

const type = require('./fkk/fkkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتجيب**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[message.author.id];
			userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});



client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./l3b/3wasmPTS.json", JSON.stringify(points), (err) => {  
    if (err) console.error(err)
  })
});

client.on('message', message => {
    var prefix = ".";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 410835593451405312) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });
  client.on("message", async message => {
    var prefix = '.';
    if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
      moment.locale('ar-TN');
    if(command === `${prefix}id`) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`تفاصيل حساب : ${message.author.username}`)
        .setColor("#9932CC")
        .setThumbnail("https://i.imgur.com/GnR2unD.png")
        .addField("اسمك الكامل", `${message.author.username}#${message.author.discriminator}`)
        .addField("أيدي", message.author.id)
              .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``)
                        .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``)
              .setThumbnail(message.author.avatarURL)
              
  
      message.channel.sendEmbed(embed);
  
      return;
    }


	
});

 client.on('message', async message =>{
  var prefix = "ا";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES'));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
	if(command == "سكت") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  
  //end of module
  }

});
client.on('message', async message =>{
  var prefix = "ت";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES'));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if(command === `كلم`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(msg => msg.delete(6000))


  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

    client.on('message', message => {
        if (message.content.startsWith("رابط")) {
    if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.reply("**للأسف البوت يحتاج صلاحية`CREATE_INSTANT_INVITE`**") .then(msg => msg.delete(5000));;
            message.channel.createInvite({
            thing: true,
            maxUses: 1,
            maxAge: 3600,
        }).then(invite =>
          message.author.sendMessage(invite.url)
        )
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
              .setDescription(" تم أرسال الرابط برسالة خاصة ")
               .setAuthor(client.user.username, client.user.avatarURL)
                     .setAuthor(client.user.username, client.user.avatarURL)
                    .setFooter('طلب بواسطة: ' + message.author.tag)
    
          message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                  const Embed11 = new Discord.RichEmbed()
            .setColor("RANDOM")
            
        .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
          message.author.sendEmbed(Embed11)
        }
    }); 
    client.on('message', message => {
        if (message.content.startsWith(".avatar")) {
            var mentionned = message.mentions.users.first();
        var x5bzm;
          if(mentionned){
              var x5bzm = mentionned;
          } else {
              var x5bzm = message.author;
              
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
          message.channel.sendEmbed(embed);
        }
    });

    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('gmail')){
            message.delete()
        return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
        }
    });
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('snapchat')){
            message.delete()
        return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('instagram')){
            message.delete()
        return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('twitter')){
            message.delete()
        return message.reply(`** لايمكنك  نشر التويتر هنا **`)
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('facebook')){
            message.delete()
        return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
        }
    });
    

client.on("message", message => {
    var prefix = "ا";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix +"مسح")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS"))  return message.reply("**للأسف ليس لديك صلاحية `MANAGE_CHANNELS` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**للأسف البوت يحتاج صلاحية`MANAGE_CHANNELS`**");
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("امسح <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                              .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("3000");
                                message.channel.sendEmbed(embed4) .then(msg => msg.delete(3000));
                            }
                          }
});  


client.on('message', message => {
    var prefix = ".";
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**هذة الأمر للأدارة فقط**').then(m => m.delete(5000));
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "HP CLAN";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message' , message => {
  var prefix = ".";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | !bc @everyone message")
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بكتابة الرسالة | !bc @everyone message")
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
        message.guild.members.forEach(m => {
          m.send(
          "**" + "السيرفر :" + "\n" +
          `${message.guild.name}` + "\n" +
          "المرسل :" + "\n" +
          `${message.author.tag}` + "\n" +
          "الرسالة :" + "\n" +
          `${args[1]}` + "**"
          )
        })
        return;
      }

          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم")
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
          n.send(
          "**" + "السيرفر :" + "\n" +
          `${message.guild.name}` + "\n" +
          "المرسل :" + "\n" +
          `${message.author.tag}` + "\n" +
          "الرسالة :" + "\n" +
          `${args[1]}` + "**"
          )
        })
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
    }
});


client.on("message", message => {
    var prefix = ".";
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
        var prefix = ".";
    if (message.content.split(' ')[0] == 'bcall')
       message.guild.members.forEach( member => {
         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**هذة الأمر للأدارة فقط**').then(m => m.delete(5000));


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "#";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "k")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.on("message", message => {
    var prefix = ".";
   if (message.content.startsWith(prefix + "bconline")) {
                if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});

client.on('message', async message =>{
  var prefix = "+";
  if(message.content.startsWith(prefix + 'fkk')) {
if (message.author.omar) return;
if (fkkRecently.has(message.author.id)) {
  message.delete();
  let timeoute = new Discord.RichEmbed()
.setColor("#C2C2C2")
.setTitle("إنتظر 10 ثواني");
  message.channel.send(timeoute).then(msg => {msg.delete(3000)});
} else {
let names = ['ويكيبيديا','عبدالله','سيباويه','طائر اللقلاق','كثر شطه',
'القس','القسطنطينية','الديموقراطية','الرفادة','الاباخس','الاثير','اثيوبيا','السعودية','الكويت','البحرين','الامارات','عمان',
'الناطس','سيناء','الاردن','همالايا','شهريار','شهرزاد','الشاهنشاه','الخنساء','الفررزدق','الجلجال','الاكتم',
'الوخواخ','الجاحظ','الشمطاء','اليمامة','كارتيه','كوستاريكا','الاعسر','الاوقص','الاخفش','الاشيم','القاريط',
'المتحفنش','متعقرط','شعافيل','القرانيط','الجرشى','كليجة','لاتينية','استاتيكا','استراتيجية','اكسسوار','ايدرولوجيا','اسكيمو',
'ابستيمولوجيا','امبريالي','إلكتروني','اصطبل','اسرائيليات','معايا زميل']
let a = names[Math.floor(Math.random() * names.length)]
let atime = Date.now()
let curChar2;
let ans =''
let last='';
let curback = ['./img/fkk/fkk1.jpg','./img/fkk/fkk2.jpg','./img/fkk/fkk3.jpg','./img/fkk/fkk4.jpg','./img/fkk/fkk5.jpg','./img/fkk/fkk6.jpg','./img/fkk/fkk7.jpg'];
let Image = Canvas.Image,
canvas = new Canvas(1000, 171),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
fs.readFile(`${curback[Math.floor(Math.random() * curback.length)]}`,async function (err, Background) {
if (err) return console.log(err);
let ground = new Image;
ground.src = Background;
await ctx.drawImage(ground, 0, 0, 1000, 171);


                    ctx.font = '72px Arial';
                    ctx.fontSize = '72px';
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.fillText(a, 500, 86);
message.channel.send(`**: فكك الكلام الموجود بالصورة التالية في اقل من **__10 ثواني__`)
message.channel.send({files: [canvas.toBuffer()]})
  .then(function(){
      setTimeout(function(){
    message.channel.send(`**إنتهى الوقت**`);
}, 10000);
           const collector = new Discord.MessageCollector(message.channel, m => m.guild.member, { time: 10000 })
    
  collector.on('collect', message => {

         let ans = message.content;
      
    let myArray2 = [];

    for(let i= 0; i < a.length ; i++){
         
curChar2= a.charAt(i);
myArray2[i] = curChar2;    
      }
      for(let i= 0; i < a.length ; i++){
        if(a.charAt(i) === ' ') continue; 
last = last +myArray2[i] +' '

}

   
      console.log(ans)
    console.log(last)
    
    if (ans = ans + ' ' === last) {
      let btime=Date.now()
      
     message.channel.send(`__${prettyMs((btime - atime), {verbose: true})}__ **إجابة صحيحة وفي وقت قياسي ${message.author} ألف مبروك**`)
     con.query(`SELECT * FROM score WHERE UserID = '${message.author.id}'`, (err, rows) =>{
      if (err) throw err;
      let curpoints = rows[0].Points;
  
     let sql;
    sql = `UPDATE score SET Points = ${curpoints + 1} WHERE UserID = '${message.author.id}'`;
    con.query(sql)
       })
     collector.stop();
    }
      else{
       last = '' 

      }

    })
})
})
}
fkkRecently.add(message.author.id);
    setTimeout(() => {
      fkkRecently.delete(message.author.id);
    }, 10000);
      
  
}

});
client.login(process.env.BOT_TOKEN);

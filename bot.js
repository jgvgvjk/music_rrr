const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');

client.on('ready', () => {});
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};


client.on('ready', function() {
     client.user.setActivity("hp",{type: 'LISTENING'});

});
  
  client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Pong!');
    }
  });
client.on('message', message => {
                   if (message.content.startsWith("+user")) {
                    var args = message.content.split(" ").slice(1);
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
                              moment.locale('ar-TN');
                     var id = new  Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
            .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
           .setThumbnail(message.author.avatarURL)
            message.channel.send(id)
        }       });



          client.on('message', message => {
            if(!message.channel.guild) return;
  var prefix = "+";
  if(message.content.startsWith(prefix + 'bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if (message.author.id !== '428281378321203200') return; 
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "Dragon";
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






client.login(process.env.BOT_TOKEN);

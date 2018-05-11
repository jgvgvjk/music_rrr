const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
var Canvas = require('canvas')
var jimp = require('jimp')
var moment = require("moment");
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


  client.on('message', async message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'id')) {
if(!message.channel.guild) return;
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
  moment.locale('ar');
    const w = ['./id1.png','./id2.png','./id3.png','./id4.png','./id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `منذ ${days.toFixed(0)} يوم`
                          ctx.font = '27px Arial Bold';
                          ctx.fontSize = '30px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 109, 97)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `منذ ${days1.toFixed(0)} يوم`
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 388, 97); 

                        //ur name
                        ctx.font = '27px BlowBrush';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 245, 365);
                        //tag
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'اون لاين';
    } else if (h.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (h.presence.status === 'idle') {
        status = 'خمول';
    } else if (h.presence.status === 'offline') {
        status = 'اوف لاين';
    }
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 380, 450);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())
})
})
    }          
});



client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
let bg = require("./bg.json");
let wesam = require("./wesam.json");
var Canvas = require('canvas')
var jimp = require('jimp')
const fs = require('fs');
const talkedRecently = new Set();

client.on('ready', () => {
     client.user.setActivity("you",{type: 'Watching'});

}); 


client.on('message', async message =>{
  var prefix = "+";
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "profile")) {
    let timeoute = new Discord.RichEmbed()
    .setColor("#C2C2C2")
    .setTitle("إنتظر 20 ثانية");
    if (talkedRecently.has(message.author.id)) {
        
        message.channel.send(timeoute).then(msg => {msg.delete(5000)});
} else {

  let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!message.mentions.users.size < 1){
      
    con.query(`set @row_num = 0`)
    con.query(`SELECT * FROM (SELECT *, @row_num := @row_num + 1 as rank FROM profile ORDER BY xp DESC) AS T WHERE UserID = '${puser.id}'`, (err, rows)=>{
        console.log
        if(err) throw err;
        let sql;
        if(rows.length < 1) return message.reply("لم يتم تسجيله بقاعدة البيانات بعد").then(msg => {msg.delete(5000)});
            
    var ubackg = rows[0].bg;
    var uw0 = rows[0].w0;
    var uw1 = rows[0].w1;
    var uw2 = rows[0].w2;
    var uw3 = rows[0].w3;
    var uw4 = rows[0].w4;
    var uw5 = rows[0].w5;
    var uCoins = rows[0].coins;
    var curlvl = rows[0].lvl;
    var curxp = rows[0].xp;
    var curbg = bg[ubackg].bg;
    var w0 = wesam[uw0].w;
    var w1 = wesam[uw1].w;
    var w2 = wesam[uw2].w;
    var w3 = wesam[uw3].w;
    var w4 = wesam[uw4].w;
    var w5 = wesam[uw5].w;
    var nn = rows[0].note;
    var curlikes = rows[0].likes;
    var currk = rows[0].rank;
var words = []
    var ad = ''
    words = nn.split(" ");
for(let i =0 ; i < words.length ; i++){
    ad = ad + words[i] + ' ';
    if(i === 6 || i === 12 || i === 18){
        ad = ad + `\n`
    }
}

    
    let Image = Canvas.Image,
    canvas = new Canvas(400, 400),
    ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
fs.readFile(curbg,async function (err, Background) {
    if (err) return console.log(err);
    let ground = new Image;
    ground.src = Background;
    await ctx.drawImage(ground, 0, 0, 400, 400);

})

jimp.read('./img/profileme1.png',async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, buffprof) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = buffprof;
        await ctx.drawImage(prof, 0, 0, 400, 400);
    })
})
jimp.read(w0,async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w0b) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w0b;
      
       await ctx.drawImage(prof, 178, 314, 32, 32);
    })
})
jimp.read(w1,async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w1b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w1b;
        await ctx.drawImage(prof, 220, 314, 32, 32);
    })
})
jimp.read(w2,async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w2b) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w2b;
       await ctx.drawImage(prof, 261, 314, 32, 32);
    })
})
jimp.read(w3,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w3b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w3b;
        await ctx.drawImage(prof, 302, 314, 32, 32);
    })
})
jimp.read(w4,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w4b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w4b;
        await ctx.drawImage(prof, 343, 314, 32, 32);
    })
})
jimp.read(w5,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w5b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w5b;
        await ctx.drawImage(prof, 178, 355, 32, 32);
    })
})

                jimp.read(puser.user.displayAvatarURL, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                       let ava = new Image;
                        ava.src = buf;
                        ctx.drawImage(ava, 16, 73, 95, 95);

                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "right";
                        ctx.fillText(ad, 363, 69);
                        
                        //ur name
                        ctx.font = '16px Arial';
                        ctx.fontSize = '16px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(puser.user.username, 220, 155);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${uCoins}`, 258, 210);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curxp}`, 258, 236);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`# ${currk}`, 258, 262);
                        ctx.font = '32px Arial';
                        ctx.fontSize = '32px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curlvl}`, 73, 263);
                        ctx.font = '32px Arial';
                        ctx.fontSize = '32px';
                        ctx.fillStyle = "#008000";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curlikes}`, 73, 355);

                message.channel.send({files: [canvas.toBuffer()]});
                    })
                })
            })
   
            
talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 20000);
    }
else{
    con.query(`set @row_num = 0`)
    con.query(`SELECT * FROM (SELECT *, @row_num := @row_num + 1 as rank FROM profile ORDER BY xp DESC) AS T WHERE UserID = '${message.author.id}'`, (err, rows)=>{
        if(err) throw err;
      if(rows.length < 1) return message.reply("تم تسجيلك حاول بعد 20 ثانية").then(msg => {msg.delete(5000)});


    var ubackg = rows[0].bg;
    var uw0 = rows[0].w0;
    var uw1 = rows[0].w1;
    var uw2 = rows[0].w2;
    var uw3 = rows[0].w3;
    var uw4 = rows[0].w4;
    var uw5 = rows[0].w5;
    var uCoins = rows[0].coins;
    var curlvl = rows[0].lvl;
    var curxp = rows[0].xp;
    var curbg = bg[ubackg].bg;
    var w0 = wesam[uw0].w;
    var w1 = wesam[uw1].w;
    var w2 = wesam[uw2].w;
    var w3 = wesam[uw3].w;
    var w4 = wesam[uw4].w;
    var w5 = wesam[uw5].w;
    var nn = rows[0].note;
    var curlikes = rows[0].likes;
    var currk = rows[0].rank;
    var words = []
    var ad = ''
    words = nn.split(" ");
for(let i =0 ; i < words.length ; i++){
    ad = ad + words[i] + ' ';
    if(i === 6 || i === 12 || i === 18){
        ad = ad + `\n`
    }
}


    let Image = Canvas.Image,
    canvas = new Canvas(400, 400),
    ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
fs.readFile(curbg, async function (err, Background) {
    if (err) return console.log(err);
    let ground = new Image;
    ground.src = Background;
    await ctx.drawImage(ground, 0, 0, 400, 400);

})

jimp.read('./img/profileme1.png',async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, buffprof) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = buffprof;
      
       await ctx.drawImage(prof, 0, 0, 400, 400);
    })
})
jimp.read(w0,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w0b) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w0b;
      
        await ctx.drawImage(prof, 178, 314, 32, 32);
    })
})
jimp.read(w1,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w1b) {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w1b;
        await ctx.drawImage(prof, 220, 314, 32, 32);
    })
})
jimp.read(w2,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w2b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w2b;
       await ctx.drawImage(prof, 261, 314, 32, 32);
    })
})
jimp.read(w3,async function (err, ava) {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w3b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w3b;
       await ctx.drawImage(prof, 302, 314, 32, 32);
    })
})
jimp.read(w4,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w4b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w4b;
       await ctx.drawImage(prof, 343, 314, 32, 32);
    })
})
jimp.read(w5,async function (err, ava)  {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG,async function (err, w5b)  {
        if (err) return console.log(err);

        let prof = new Image;
        prof.src = w5b;
        await ctx.drawImage(prof, 178, 355, 32, 32);
    })
})

                jimp.read(message.author.displayAvatarURL, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                       let ava = new Image;
                        ava.src = buf;
                        ctx.drawImage(ava, 16, 73, 95, 95);

                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "right";
                        ctx.fillText(ad, 363, 69);
                        
                        //ur name
                        ctx.font = '16px Arial';
                        ctx.fontSize = '16px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(message.author.username, 220, 155);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${uCoins}`, 258, 210);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curxp}`, 258, 236);
                        ctx.font = '12px Arial';
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`# ${currk}`, 258, 262);
                        ctx.font = '32px Arial';
                        ctx.fontSize = '32px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curlvl}`, 73, 263);
                        ctx.font = '32px Arial';
                        ctx.fontSize = '32px';
                        ctx.fillStyle = "#008000";
                        ctx.textAlign = "center";
                        ctx.fillText(`${curlikes}`, 73, 355);
                message.channel.send({files: [canvas.toBuffer()]});
                    })
                })
            })
talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 20000);
    }
    }
    
  }
});
client.on('message', message => {
  var prefix = "+";
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "shop")) {
var ubackg = rows[0].bg;
  var curbg = bg[ubackg].bg;
  var Image = Canvas.Image,
  canvas = new Canvas(800, 800),
  ctx = canvas.getContext('2d');
      ctx.patternQuality = 'bilinear';
      ctx.filter = 'bilinear';
      ctx.antialias = 'subpixel';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
fs.readFile("./img/shopping.jpg", function (err, Background) {
  if (err) return console.log(err);
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 800, 800);
  Jimp.read(curbg, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(Jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

       let ava = new Image;
        ava.src = buf;
        ctx.drawImage(ava, 46, 39, 170, 170);
        message.channel.send({files: [canvas.toBuffer()]});
    });
  });
});
          }
});

            var Jimp = require("jimp")
            client.on('message', async message =>{
              var prefix = "+";     
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "wasted")) {
      
            let message = await message.channel.send('Generating...')
            if(message.mentions.users.size < 1) {
                Jimp.read(message.author.avatarURL).then(function (photo) {
                    photo.resize(512, 512).grayscale().gaussian(2)
                    Jimp.read('./wasted.png').then(function (lenna) {
                        photo.composite(lenna,0,0)
                        photo.getBuffer(Jimp.MIME_PNG, function (err, image) { 
                            message.delete();
                            message.channel.send({files:[{attachment:image,name:"file.png"}]}) 
                        })
                    })
                })
            } else if (message.mentions.users.size > 1) {
                message.channel.sendEmbed(new Discord.RichEmbed()
                    .addField('Error!', `Please mention a single user!`)
                    .setColor(0xff5454)
                );
                return;
            } else {
                let mention = message.guild.member(message.mentions.users.first());
                Jimp.read(mention.user.avatarURL).then(function (photo) {
                    photo.resize(512, 512).grayscale().gaussian(2)
                    Jimp.read('./wasted.png').then(function (lenna) {
                        photo.composite(lenna,0,0)
                        photo.getBuffer(Jimp.MIME_PNG, function (err, image) { 
                            message.delete();
                            message.channel.send({files:[{attachment:image,name:"file.png"}]}) 
                        })
                    })
                })
            }
        };
      });
client.login(process.env.BOT_TOKEN);

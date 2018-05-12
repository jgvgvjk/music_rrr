const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
var Canvas = require('canvas')
var jimp = require('jimp')
var moment = require("moment");
const fs = require('fs');
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const os = require("os");





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '!';
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

client.on('message', async message =>{
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith(prefix + 'play')) {
	 function play(connection, message) {
        var server = v.servers[message.guild.id];
    
        server.dispatcher = connection.playStream(v.YTDL(server.queue[0], { audioonly: true }));
        server.queue.shift();
        server.dispatcher.on("end", function() {
            if (server.queue[0]) {
                v.YTDL.getInfo(server.queue[0], function(err, info) {
                    message.channel.send("Now playing: `" + info.title + " (" + info.length_seconds + " seconds)" + " by " + info.author.name + " with " + info.view_count + " Views `").catch(err => {
                        message.channel.send("Error: " + err)
                    })
                });
                play(connection, message)
                server.dispatcher.setVolume(server.volume)
            } else { 
            connection.disconnect();
            message.channel.send("Stopped music and left voice channel.")
            }
        });
    }

    if (message.channel.type == "dm") {
        message.channel.send("You have to execute this command on a server!")
        return; }
    if (v.os.platform == "linux") {
        message.channel.send("The music feature is due to extreme lags disabled when running on my Raspberry Pi. :confused:")
        return; }
    if (!args.slice(0).join(" ")) {
        message.channel.send("Please provide a valid link.");
        return; }
    if (!message.member.voiceChannel) {
        message.channel.send("Please join a voice channel first.");
        return; }
    if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
        message.channel.send("The bot is not in your voice channel!") 
        return; }
    if (message.member.voiceChannel.full) {
        message.channel.send("Your voice channel is full!");
        return; }
    if (!message.member.voiceChannel.joinable) {
        message.channel.send("Missing permission to join your voice channel!");
        return; }
    if (!message.member.voiceChannel.speakable) {
        message.channel.send("Halp! I can't speak!");
        return; }        
    if(!v.servers[message.guild.id]) v.servers[message.guild.id] = {
        queue: [] }
    

    //search
    try {
        if (!message.content.includes("https://www.yout")) {

            var searchword = args.slice(0).join(" ")
            message.channel.send("Searching for " + searchword + "...");
            
            var kind = "video"
            var searchword = args.slice(0).join(" ")
            var maxResults = "1"
            var safeSearch = "none"
            var key = "AIzaSyBYOgEG_8iYu3XP6DgDqSH_ErCE93egTQQ"

            const { body } = await v.superagent
            .get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchword + '&type=' + kind + '&maxResults=' + maxResults + '&safeSearch=' + safeSearch + '&key=' + key)

            if(body.pageInfo.totalResults < 1) {
                message.channel.send(":x: No results found.")
                return;
            }

            var youtubeurlid = body.items[0].id.videoId
        
            var urltoplay = "https://www.youtube.com/watch?v=" + youtubeurlid

        } else {
            var urltoplay = args.slice(0).join(" ")
            
        }
    } catch(err) {
        console.log("musicplay YouTube API Error: " + err)
        message.channel.send("YouTube API Error: " + err)
    }

    var server = v.servers[message.guild.id];

    server.queue.push(urltoplay);
    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message)
        });        

    v.YTDL.getInfo(urltoplay, function(err, info) {
        message.channel.send("Added to queue: `" + info.title + " (" + info.length_seconds + " seconds)" + " by " + info.author.name + " with " + info.view_count + " Views `").catch(err => {
            message.channel.send("Error: " + err)
        })
    });
}

	else if (mess.startsWith(prefix + 'pause')) {
if (message.channel.type == "dm") {
	message.channel.send(v.randomstring(v.dmerror))
	return;
}
if (!message.guild.voiceConnection) {
	message.channel.send("The bot is not connected to a voice channel.")
	return;
}
if (!message.member.voiceChannel) {
	message.channel.send("Please join a voice channel first.");
	return; }
if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
	message.channel.send("The bot is not in your voice channel!") 
	return; }
	
var server = v.servers[message.guild.id];
if (server.dispatcher) server.dispatcher.pause()

message.channel.send("Music paused.")

}
else if (message.content.startsWith(prefix + 'resume')) {
if (message.channel.type == "dm") {
	message.channel.send(v.randomstring(v.dmerror))
	return;
}
if (!message.guild.voiceConnection) {
	message.channel.send("The bot is not connected to a voice channel.")
	return;
}
if (!message.member.voiceChannel) {
	message.channel.send("Please join a voice channel first.");
	return; }
if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
	message.channel.send("The bot is not in your voice channel!") 
	return; }

var server = v.servers[message.guild.id];
if (server.dispatcher) server.dispatcher.resume()

message.channel.send("Music resumed.")

}

else if (message.content.startsWith(prefix + 'skip')) {
if (message.channel.type == "dm") {
	message.channel.send(v.randomstring(v.dmerror))
	return;
}
if (!message.guild.voiceConnection) {
	message.channel.send("The bot is not connected to a voice channel.")
	return;
}
if (!message.member.voiceChannel) {
	message.channel.send("Please join a voice channel first.");
	return; }
if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
	message.channel.send("The bot is not in your voice channel!") 
	return; }

var server = v.servers[message.guild.id];
if (server.dispatcher) server.dispatcher.end();

}
else if (message.content.startsWith(prefix + 'vol')) {

if (message.channel.type == "dm") {
	message.channel.send(v.randomstring(v.dmerror))
	return;
}
if (!message.guild.voiceConnection) {
	message.channel.send("The bot is not connected to a voice channel.")
	return;
}
if (!message.member.voiceChannel) {
	message.channel.send("Please join a voice channel first.");
	return; }
if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
	message.channel.send("The bot is not in your voice channel!") 
	return; }

var volume = args[0]

if (volume === undefined) {
	message.channel.send("Please provide a number. 1 is default.")
	return;
}

var server = v.servers[message.guild.id];
server.dispatcher.setVolume(volume)
server.volume = volume
message.channel.send("Set volume to " + volume)

}

else if (message.content.startsWith(prefix + 'stop')) {
if (message.channel.type == "dm") {
	message.channel.send(v.randomstring(v.dmerror))
	return;
}
if (!message.member.voiceChannel) {
	message.channel.send("Please join a voice channel first.");
	return; }
if (message.guild.voiceConnection && message.member.voiceChannel) if (message.member.voiceChannel.id != message.guild.voiceConnection.channel.id) {
	message.channel.send("The bot is not in your voice channel!") 
	return; }

var server = v.servers[message.guild.id];

if (!message.member.voiceChannel) message.channel.send("Nothing to stop here. :o")
if (!message.guild.voiceConnection) message.channel.send("The Bot is not playing anything...");

if (message.member.voiceChannel) {
	if (message.guild.voiceConnection) {
		if (message.guild.voiceConnection.channel.id === message.member.voiceChannel.id) {
//                    message.channel.send("Stopped music and left voice channel."); //Function "play" already sends a message
			message.guild.voiceConnection.disconnect();
		} else {
			message.channel.send("The Bot is not in your voice channel!");
			return;
		}
	}
}

}
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

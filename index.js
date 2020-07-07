require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const embed = new MessageEmbed();
const instaURL = "https://instagram.com/pro__googler/"
const blogURL    = "https://veluvijay.hashnode.dev/";
const githubURL   = "https://github.com/veluvj";
const telegramURL = "https://t.me/progoogler";
const twitterURL = "https://twitter.com/veluvjdevendran";

const token = process.env.TOKEN;

client.on("ready", ()=>{

    console.log(`Logged in as ${client.user.tag}`)
})



client.on('guildMemberAdd', memeber =>{


    const channel = memeber.guild.channels.cache.find(ch => ch.name === 'member-log');
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}`);
});

client.on("message", msg =>{


    

    
   switch(msg.content){

    case "ping":
    msg.reply("Pong!");
    break;

    case "Ping":
    msg.reply("Pong!");
    return;

    case "hi":
     embed.setTitle('Welcome to Pro__googler  server')
     embed.setColor("#f4c20d")
     embed.setDescription('Hello, this is a sample server with bot!');
    msg.channel.send(embed);

    break;

    case "Hi":
    embed.setTitle('Welcome to Pro__googler  server')
    embed.setColor("#f4c20d")
    embed.setDescription('Hello, this is a sample server with bot!');
    msg.channel.send(embed);

    break;

    case "what is my avatar":
    msg.reply(message.author.displayAvatarURL());
    break;

    case "!instagram":
    msg.channel.send(instaURL);
    break;

    case "!blog":
    msg.channel.send(blogURL);
    break;

    case "!telegram":
    msg.channel.send(telegramURL);
    break;

    case "!github":
    msg.channel.send(githubURL);
    break;

    case "!twitter":
    msg.channel.send(twitterURL);
    break;



    // case "ping":
    // msg.reply("Pong!");
    // break;

    // case "ping":
    // msg.reply("Pong!");
    // break;

       
   

   }

})

client.login(token)
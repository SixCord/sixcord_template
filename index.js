const express = require('express');
const parse = require('node-html-parser').parse;
const fs = require('fs');
const app = express();
const port = 8080;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log("Website running!");
    client.user.setPresence({ status: 'invisible' })
    .then(console.log("Bot-Web presence set to invis to not interact with the current running bot."))
})

app.use(express.static('src'));

app.get('/', async function(req, res) {
    fs.readFile(__dirname + '/src/pages/index.html', 'utf-8', (err,html) => {
        if(err) {
            res.send("Oh oh! Something went wrong. Please reload the page!")
        }
        else {
            const root = parse(html);
            const botUserCount = client.users.cache.filter(members => members).size;
            const botServerCount = client.guilds.cache.filter(users => users).size;
            const botChannelCount = client.channels.cache.filter(channels => channels).size;


            const newServerCount = `<p class="card-title" style="font-size: 50px !important;line-height: 15px !important;letter-spacing: -0.06em !important;font-weight: bold !important;">${botServerCount}</h1>`;
            const serverCount = root.querySelector('.servers')
            serverCount.appendChild(newServerCount)
            serverCount.appendChild('<p style="font-weight: bold !important;font-size: 20px !important;">servers</p>')

            const newUserCount = `<p class="card-title" style="font-size: 50px !important;line-height: 15px !important;letter-spacing: -0.06em !important;font-weight: bold !important;">${botUserCount}</h1>`
            const userCount = root.querySelector('.users');
            userCount.appendChild(newUserCount);
            userCount.appendChild('<p style="font-weight: bold !important;font-size: 20px !important;">users</p>')

            const newChannelCount = `<p class="card-title" style="font-size: 50px !important;line-height: 15px !important;letter-spacing: -0.06em !important;font-weight: bold !important;">${botChannelCount}</h1>`
            const channelCount = root.querySelector('.channels');
            channelCount.appendChild(newChannelCount);
            channelCount.appendChild('<p style="font-weight: bold !important;font-size: 20px !important;">channels</p>')


            res.write(root.toString())
            res.end();
        }
    });
});


app.get('/premium', function(req, res) {
    res.redirect('/')
});
app.get('/support', function(req, res) {
    res.sendFile(__dirname + '/src/pages/support.html')
});
app.get('/invite', function(req, res) {
    res.sendFile(__dirname + '/src/pages/invite.html')
});
app.get('/status', function(req, res) {
    res.redirect('/')
});
app.get('/privacy', function(req, res) {
    res.sendFile(__dirname + '/src/pages/privacy.html')
});
app.get('/discord', function(req, res) {
    res.sendFile(__dirname + '/src/pages/support.html')
});





app.listen(port, function (error) {
    if(error) {
        console.log("Oh oh! Looks like something went wrong:")
        console.log(error)
    }
    else {
        console.log(`Website successfully started on port: ${port}`)
    }
})

client.login(process.env.TOKEN)

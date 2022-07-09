const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const serverset = require("./serverset.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(dosyalar => {
        let props = require(`./komutlar/${dosyalar}`);
        console.log(`Yüklenen Komut: ./komutlar/${dosyalar}`)
        client.commands.set(props.config.name, props);
        props.config.aliases.forEach(alias => {
            client.aliases.set(alias, props.config.name);
        });
    });
})
client.on("ready", async () => {
    client.user.setPresence({ activity: { type: "LISTENING", name: serverset.status }, status: 'dnd' })
    let jvoice = client.channels.cache.get(serverset.ses);
    if (jvoice) jvoice.join().catch(err => console.error("Ses kanalına bağlanılamadı!"));
  });
client.login(serverset.token)

const Discord = require("discord.js")
const serverset = require("../serverset.json");

module.exports.run = async(client, message) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    const emoji = (isim) => client.emojis.cache.find((emoji) => emoji.isim === isim);
    let EMBED = new Discord.MessageEmbed().setFooter(serverset.footer)
    let ekip1 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip1)).size
    let ekip1ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip1)).filter(ses => ses.voice.channel).size
    let ekip1aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip1) && aktif.user.presence.status !== "offline").size
    let ekip1nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip1) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size

    message.channel.send(EMBED.setDescription(`
    ${emoji("yildiz")} Ekip-1
    • Toplam üye : **${ekip1}**
    • Toplam taglı üye : **${ekip1}**
    • Çevrimiçi üye : **${ekip1aktif}**
    • Sesteki toplam üye : **${ekip1ses}**
    • Seste olmayan üyeler : **${ekip1nonses}**`))
    
};
exports.config = {
    name: "ekip1",
    usage: `ekip1`,
    guildOnly: true,
    aliases: ["ekip1"],
    cooldown: 3000
};
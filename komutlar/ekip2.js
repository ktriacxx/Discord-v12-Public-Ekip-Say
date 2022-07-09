const Discord = require("discord.js")
const serverset = require("../serverset.json");

module.exports.run = async(client, message) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    const emoji = (isim) => client.emojis.cache.find((emoji) => emoji.isim === isim);
    let EMBED = new Discord.MessageEmbed().setFooter(serverset.footer)
    let ekip2 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip2)).size
    let ekip2ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip2)).filter(ses => ses.voice.channel).size
    let ekip2aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip2) && aktif.user.presence.status !== "offline").size
    let ekip2nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip2) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size

    message.channel.send(EMBED.setDescription(`
    ${emoji("yildiz")} Ekip-2
    • Toplam üye : **${ekip2}**
    • Toplam taglı üye : **${ekip2}**
    • Çevrimiçi üye : **${ekip2aktif}**
    • Sesteki toplam üye : **${ekip2ses}**
    • Seste olmayan üyeler : **${ekip2nonses}**`))
    
};
exports.config = {
    name: "ekip2",
    usage: `ekip2`,
    guildOnly: true,
    aliases: ["ekip2"],
    cooldown: 3000
};
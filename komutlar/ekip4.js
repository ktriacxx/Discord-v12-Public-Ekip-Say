const Discord = require("discord.js")
const serverset = require("../serverset.json");

module.exports.run = async(client, message) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    const emoji = (isim) => client.emojis.cache.find((emoji) => emoji.isim === isim);
    let EMBED = new Discord.MessageEmbed().setFooter(serverset.footer)
    let ekip4 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip4)).size
    let ekip4ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip4)).filter(ses => ses.voice.channel).size
    let ekip4aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip4) && aktif.user.presence.status !== "offline").size
    let ekip4nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip4) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size

    message.channel.send(EMBED.setDescription(`
    ${emoji("yildiz")} Ekip-4
    • Toplam üye : **${ekip4}**
    • Toplam taglı üye : **${ekip4}**
    • Çevrimiçi üye : **${ekip4aktif}**
    • Sesteki toplam üye : **${ekip4ses}**
    • Seste olmayan üyeler : **${ekip4nonses}**`))
    
};
exports.config = {
    name: "ekip4",
    usage: `ekip4`,
    guildOnly: true,
    aliases: ["ekip4"],
    cooldown: 3000
};
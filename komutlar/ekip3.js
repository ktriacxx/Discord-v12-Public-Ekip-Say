const Discord = require("discord.js")
const serverset = require("../serverset.json");

module.exports.run = async(client, message) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    const emoji = (isim) => client.emojis.cache.find((emoji) => emoji.isim === isim);
    let EMBED = new Discord.MessageEmbed().setFooter(serverset.footer)
    let ekip3 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip3)).size
    let ekip3ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip3)).filter(ses => ses.voice.channel).size
    let ekip3aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip3) && aktif.user.presence.status !== "offline").size
    let ekip3nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip3) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size

    message.channel.send(EMBED.setDescription(`
    ${emoji("yildiz")} Ekip-3
    • Toplam üye : **${ekip3}**
    • Toplam taglı üye : **${ekip3}**
    • Çevrimiçi üye : **${ekip3aktif}**
    • Sesteki toplam üye : **${ekip3ses}**
    • Seste olmayan üyeler : **${ekip3nonses}**`))
    
};
exports.config = {
    name: "ekip3",
    usage: `ekip3`,
    aliases: ["ekip3"]
};

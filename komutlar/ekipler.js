const Discord = require("discord.js")
const serverset = require("../serverset.json");

module.exports.run = async(client, message) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    const emoji = (isim) => client.emojis.cache.find((emoji) => emoji.isim === isim);
    let EMBED = new Discord.MessageEmbed().setFooter(serverset.footer)
    // ekip sayısını kendiniz arttırabilirsiniz.
    let ekip1 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip1)).size
    let ekip2 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip2)).size
    let ekip3 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip3)).size
    let ekip4 = message.guild.members.cache.filter(uye => uye.roles.cache.has(serverset.ekip4)).size
    //ses
    let ekip1ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip1)).filter(ses => ses.voice.channel).size
    let ekip2ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip2)).filter(ses => ses.voice.channel).size
    let ekip3ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip3)).filter(ses => ses.voice.channel).size
    let ekip4ses = message.guild.members.cache.filter(ses => ses.roles.cache.has(serverset.ekip4)).filter(ses => ses.voice.channel).size
    //aktif
    let ekip1aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip1) && aktif.user.presence.status !== "offline").size
    let ekip2aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip2) && aktif.user.presence.status !== "offline").size
    let ekip3aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip3) && aktif.user.presence.status !== "offline").size
    let ekip4aktif = message.guild.members.cache.filter(aktif => aktif.roles.cache.has(serverset.ekip4) && aktif.user.presence.status !== "offline").size
    //seste olmayan
    let ekip1nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip1) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size
    let ekip2nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip2) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size
    let ekip3nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip3) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size
    let ekip4nonses = message.guild.members.cache.filter(nonses => nonses.roles.cache.has(serverset.ekip4) && !nonses.voice.channel && nonses.user.presence.status !== "offline").size
    
    message.channel.send(EMBED
    .addField(`${emoji("yildiz")} Ekip-1`,`
    • Toplam üye : **${ekip1}**
    • Toplam taglı üye : **${ekip1}**
    • Çevrimiçi üye : **${ekip1aktif}**
    • Sesteki toplam üye : **${ekip1ses}**
    • Seste olmayan üyeler : **${ekip1nonses}**
    `)
    .addField(`${emoji("yildiz")} Ekip-2`,`
    • Toplam üye : **${ekip2}**
    • Toplam taglı üye : **${ekip2}**
    • Çevrimiçi üye : **${ekip2aktif}**
    • Sesteki toplam üye : **${ekip2ses}**
    • Seste olmayan üyeler : **${ekip2nonses}**
    `)
    .addField(`${emoji("yildiz")} Ekip-3`,`
    • Toplam üye : **${ekip3}**
    • Toplam taglı üye : **${ekip3}**
    • Çevrimiçi üye : **${ekip3aktif}**
    • Sesteki toplam üye : **${ekip3ses}**
    • Seste olmayan üyeler : **${ekip3nonses}**
    `)
    .addField(`${emoji("yildiz")} Ekip-4`,`
    • Toplam üye : **${ekip4}**
    • Toplam taglı üye : **${ekip4}**
    • Çevrimiçi üye : **${ekip4aktif}**
    • Sesteki toplam üye : **${ekip4ses}**
    • Seste olmayan üyeler : **${ekip4nonses}**
    `))
};
exports.config = {
    name: "ekipcontrol",
    usage: `ekip`,
    aliases: ["crewler"]
};

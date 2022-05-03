let handler = async (m, { conn, isGroup, isAdmin, isBotAdmin }) => {
   if (!m.isGroup) return m.reply("Perintah ini hanya bisa digunakan di group!")
   if (!isAdmin) return m.reply("Perintah ini hanya dapat dilakukan oleh admin!")
   if (!isBotAdmin) return m.reply("Jadikan bot sebagai admin untuk menggunakan perintah ini!")
   if (m.quoted) {
    if (m.quoted.mentionedJid) {
      for (let userWarn of m.quoted.mentionedJid) {
      delete global.db.data.warns[m.chat].users[userWarn]
      conn.reply(m.chat, "Admin " + "@" + m.sender.split("@")[0] + "telah menghapus peringatan untuk " + "@" + userWarn.split`@`[0])
    }
  }
} else if (m.mentionedJid) {
    if (m.mentionedJid.length < 1) throw "Tag usernya!"
    for (let userWarn of m.mentionedJid) {
      delete global.db.data.warns[m.chat].users[userWarn]
      conn.reply(m.chat, `Admin ` + "@" + m.sender.split("@")[0] + ` telah menghapus peringatan untuk ` + "@" + userWarn.split`@`[0] + ` !`)                  
    }
  } else throw "Tag usernya!"
}
handler.help = ['deletewarn @mention']
handler.tags = ['group']
handler.command = /^(deletewarn|delwarn)?$/i

module.exports = handler

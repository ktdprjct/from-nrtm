// from rthelolchex

let handler = async(m, { conn, isGroup, isAdmin, isBotAdmin, usedprefix, args, participants }) =>{
  if (!m.isGroup) return m.reply("Perintah ini hanya bisa digunakan di group!")
  if (!isAdmin) return m.reply("Perintah ini hanya dapat dilakukan oleh admin!")
  if (!isBotAdmin) return m.reply("Jadikan bot sebagai admin untuk menggunakan perintah ini!")
  if (m.mentionedJid.length < 1) return m.reply("Tag user yang ingin di beri warning!")
  participants.forEach(user => {
    if (user.jid == m.mentionedJid[0] && user.isAdmin) return m.reply("Sadar bang, yang lu warn admin!")
  })
  let reasonText = args.splice(1).join` `
  if (reasonText.length == 0) reasonText = "Nothing."
  for (let userWarn of m.mentionedJid) {
    let warnUsers = global.db.data.warns[m.chat].users[userWarn]
    if (typeof warnUsers !== "object") global.db.data.warns[m.chat].users[userWarn] = {
      count: 0,
      reason: []
    }
    global.db.data.warns[m.chat].users[userWarn].reason.push(reasonText)
    global.db.data.warns[m.chat].users[userWarn].count += 1
    if (global.db.data.warns[m.chat].users[userWarn].count == 5) {
      m.reply(`Baiklah, ` + "@" + userWarn.split`@`[0] + ` telah melebihi batas peringatan, anda akan dikick!.\n\nAlasan : \n` + global.db.data.warns[m.chat].users[userWarn].reason )
      delete global.db.data.warns[m.chat].users[userWarn]
      await conn.groupRemove(m.chat, [userWarn])
    }
    conn.sendButton(m.chat, "Pengguna " + "@" + userWarn.split`@`[0] + " memiliki " + global.db.data.warns[m.chat].users[userWarn].count +"/5 peringatan. hati-hati!\nAlasan : " + reasonText , wm, `Hapus peringatan (admin only)`, "${usedprefix}deletewarn", m)
  }
}
handler.help = ['warn @mention']
handler.tags = ['group']
handler.command = /^warn(user)?$/i

module.exports = handler
let handler = async (m, { conn, isGroup }) => {
  if (!m.isGroup) throw "Perintah ini hanya bisa digunakan di group!"
  let warnLists = []
  for (let users in global.db.data.warns[m.chat].users) {
    let warnCount = global.db.data.warns[m.chat].users[users].count
    let warnReason = global.db.data.warns[m.chat].users[users].reason
    let str = `=> @${users.split("@")[0]}\n=> Warn count : ${warnCount}\n=> Reason : \n${warnReason.map((v, i) => `=> ${i + 1}. ${v}`).join("\n")}`
    warnLists.push(str)
  }
  if (warnLists.length < 1) throw "Tidak ada pengguna yang terkena peringatan di group ini!"
  m.reply(`${monospace("==> [ W A R N  L I S T ] <==")}\n\n${warnLists.join("\n\n")}\n\n` + wm)
}
handler.help = ['listwarn']
handler.tags = ['group']
handler.command = /^list(warn|warning)?$/i

module.exports = handler

const monospace = (string) => {
  return '```' + string + '```'
}
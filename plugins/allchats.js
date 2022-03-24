let handler = async (m, { conn }) => {
  let groupChats = []
  let privateChats = []
  conn.chats.all().forEach(chats => {
    if (chats.jid.endsWith("@g.us")) {
      let str = `=> Group Name : ${chats.name}\n=> Group jid : ${chats.jid}\n`
      groupChats.push(str)
    }
    if (chats.jid.endsWith("@s.whatsapp.net")) {
      let str = `=> Contact Name : ${chats.name}\n=> Contact jid : ${chats.jid}\n`
      privateChats.push(str)
    }
  })
  let allchatHeader = monospace("==> [ A L L  C H A T S ] <==")
  m.reply(`${allchatHeader}\nGroup chats total : ${groupChats.length}\nPrivate chats total : ${privateChats.length}\nTotal chats : ${groupChats.length + privateChats.length}\n\n=> Group Chats <=\n${groupChats.join("\n")}\n\n=> Private Chats <=\n${privateChats.join("\n")}`)

}
handler.help = ['allchats']
handler.tags = ['owner']
handler.command = /^(allchats)$/i

handler.owner = true

module.exports = handler

function monospace (str) {
      return "```" + str + "```"
    }
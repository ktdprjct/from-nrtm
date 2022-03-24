let fs = require('fs')
let handler = async (m, { conn, text, participants}) => {
  const hideTag = async function(jid, text) {
      let anu = await conn.groupMetadata(m.chat)
      let members = anu.participants
      let ane = []
      for (let i of members) {
        ane.push(i.jid)
      }
      conn.sendMessage(m.chat, {
        text: text, jpegThumbnail: fs.readFileSync('./logonya2.png')}, 'extendedTextMessage', {
        contextInfo: {
          "mentionedJid": ane
        }})
    }
    try{
    hideteks = text ? text: 'Nothing'
    quotedText = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
    hideTag(m.chat, `${quotedText}`)
  }catch {
    hideTag(m.chat, `HIDE TAG\n\nFrom : @${m.sender.split(`@`)[0]}\nText : ${hideteks}`)
  }
}
handler.help = ['hidetag <teks>']
handler.tags = ['group']

handler.command = /^hidetag$/i

handler.owner = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true

module.exports = handler
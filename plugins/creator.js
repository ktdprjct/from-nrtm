const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn }) => {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62895342581896', 'Ktdprjct', m)
  vcard2 =
  'BEGIN:VCARD\n' +
  'VERSION:3.0\n' +
  'N:Sy;Bot;;;\n' +
  `FN:Ktdprjct\n` +
  `item1.TEL;waid=62895342581896:62895342581896\n` +
  `item1.X-ABLabel:Creator\n` +
  `item2.EMAIL;type=INTERNET:ktdproject01@gmail.com\n` +
  `item2.X-ABLabel:Email\n` +
  `item3.URL:https://chat.whatsapp.com/L91Hwo4hUh323SwlFvCemw\n` +
  `item3.X-ABLabel:Official group\n` +
  `item4.ADR:;;Indonesia;;;;\n` +
  `item4.X-ABLabel:Region\n` +
  `item5.X-ABLabel:Ktdprjct\n` +
  'END:VCARD'.trim()
  conn.sendMessage(m.chat, {
    displayName: `Creator ktdprjct`, vcard: vcard2
  }, MessageType.contact,
    {
      quoted: m,
    })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
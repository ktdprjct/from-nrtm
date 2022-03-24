const { MessageType } = require("@adiwajshing/baileys")

let handler = async(m, { conn, text, command }) => {
  if (text.length > 300) throw "Teks terlalu banyak"
  //let pushname = await conn.getName(m.sender)
  let str = (command == "report") ? "[ REPORT FEATURE ]" : "[ REQUEST FEATURE ]" + "\n\n" +
  "Dari pengguna : " + "wa.me/" + m.sender.split`@`[0] + "\n" +
  "Teks : " + text
  conn.sendMessage(global.owner[0] + "@s.whatsapp.net", str, MessageType.text, { quoted: m }, { contextInfo: { mentionedJid: [m.sender] }})
  m.reply((command == "report" ? "Report" : "Permintaan") + " Anda sudah dikirim ke owner, jika laporan atau permintaan palsu / main-main, proses tidak akan ditanggapi.")
}

handler.help = ["request", "report"].map(v => v + "(teks laporan)")
handler.tags = ["info"]
handler.command = /^(request|report|req)$/i

module.exports = handler
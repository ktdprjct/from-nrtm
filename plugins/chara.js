var hx = require('hxz-api')
let handler = async(m, { conn, text }) => {
 if (!text) throw 'Cari apa?'
 let chara = await hx.chara(text)
 m.reply('_sedang diproses..._')
 conn.sendFile(m.chat, pickRandom(chara), '', `Random chara : ${text}`, m)
}
handler.help = ['chara']
handler.tags = ['anime']
handler.command = /^chara$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
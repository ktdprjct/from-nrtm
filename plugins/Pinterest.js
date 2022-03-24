const hx = require('hxz-api')
let handler = async(m, { conn, text })=>{
  if(!text) return m.reply('_mau cari apa?_')
  let pinter = await hx.pinterest(text)
  m.reply('_Sedang diproses_')
  conn.sendFile(m.chat, pickRandom(pinter), '', `random. pencarian dari : ${text}`, m)   
}
handler.help = ['pinterest']
handler.tags = ['internet']
handler.command = /^pinterest$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
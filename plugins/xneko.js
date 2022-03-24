let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  if (m.isGroup) return m.reply(`jangan di grup`)
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['xneko 18+']
handler.tags = ['anime']
handler.command = /^xneko$/i

module.exports = handler
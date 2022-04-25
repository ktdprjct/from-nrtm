const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} alanwalker lily`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 600)
  if (!vid) throw 'Konten Tidak ditemukan/konten lebih dari 10 menit'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    }catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let ply = `━━━━━°❀❬ *PLAY* ❭❀°━━━━━
*Title:* ${title}
*Audio:* ${filesizeF}
*Video:* ${yt2.filesizeF}
*Duration:* ${vid.timestamp}
*Source:* ${vid.url}
*Server y2mate:* ${usedServer}`
  conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), ply,`ktdprjct`, `Audio 🎶`, `${usedPrefix}ytmp3 ${vid.url}`, `Video 📽️`, `${usedPrefix}ytmp4 ${vid.url}`, m)                                    
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler


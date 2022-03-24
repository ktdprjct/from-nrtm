let handler = async(m ,{ conn }) => {
  let name = conn.getName(m.sender)
  let caption =`
╭─「 Donasi 」
│ ➪ hai kak ${name}
│ ➪ mau donasi?
│ ➪ bisa scan qr di atas
│ ➪ atau lewat nomer di bawah
│ ➪ Dana : 62895342581896
╰────
  `
  conn.reply(m.chat, caption, m)
}
handler.help = ['donate']
handler.tags = ['']
handler.command = /^donate/i

module.exports = handler
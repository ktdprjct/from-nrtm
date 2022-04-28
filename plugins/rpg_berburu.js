let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedprefix }) => {
    let __timers = (new Date - global.db.data.users[m.sender].as)
    let _timers = (120000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: 'kandang'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Memancing*\n`,
    footerText: wm, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.db.data.users[m.sender].as > 120000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 10)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`
let randomaku6 = `${Math.floor(Math.random() * 10)}`
let randomaku7 = `${Math.floor(Math.random() * 10)}`
let randomaku8 = `${Math.floor(Math.random() * 10)}`
let randomaku9 = `${Math.floor(Math.random() * 10)}`
let randomaku10 = `${Math.floor(Math.random() * 10)}`
let randomaku11 = `${Math.floor(Math.random() * 10)}`
let randomaku12 = `${Math.floor(Math.random() * 10)}`
.trim()

let ktdprjct1 = (randomaku1 * 1)
let ktdprjct2 = (randomaku2 * 1)
let ktdprjct3 = (randomaku3 * 1)
let ktdprjct4 = (randomaku4 * 1)
let ktdprjct5 = (randomaku5 * 1)
let ktdprjct6 = (randomaku6 * 1)
let ktdprjct7 = (randomaku7 * 1)
let ktdprjct8 = (randomaku8 * 1)
let ktdprjct9 = (randomaku9 * 1)
let ktdprjct10 = (randomaku10 * 1)
let ktdprjct11 = (randomaku11 * 1)
let ktdprjct12 = (randomaku12 * 1)

ktd1 = `${ktdprjct1}`
ktd2 = `${ktdprjct2}`
ktd3 = `${ktdprjct3}`
ktd4 = `${ktdprjct4}`
ktd5 = `${ktdprjct5}`
ktd6 = `${ktdprjct6}`
ktd7 = `${ktdprjct7}`
ktd8 = `${ktdprjct8}`
ktd9 = `${ktdprjct9}`
ktd10 = `${ktdprjct10}`
ktd11 = `${ktdprjct11}`
ktd12 = `${ktdprjct12}`

hsl = `
*《 Hasil Berburu Kali Ini 》*

 *🐂 = [ ${ktd1} ]*			*🐃 = [ ${ktd7} ]*
 *🐅 = [ ${ktd2} ]*			 *🐮 = [ ${ktd8} ]*
 *🐘 = [ ${ktd3} ]*			 *🐒 = [ ${ktd9} ]*
 *🐐 = [ ${ktd4} ]*			 *🐗 = [ ${ktd10} ]*
 *🐼 = [ ${ktd5} ]*			 *🐖 = [ ${ktd11} ]*
 *🐊= [ ${ktd6} ]*			*🐓 = [${ktd12} ]*
`

global.db.data.users[m.sender].banteng += ktdprjct1
global.db.data.users[m.sender].harimau += ktdprjct2
global.db.data.users[m.sender].gajah += ktdprjct3
global.db.data.users[m.sender].kambing += ktdprjct4
global.db.data.users[m.sender].panda+= ktdprjct5
global.db.data.users[m.sender].buaya += ktdprjct6
global.db.data.users[m.sender].kerbau += ktdprjct7
global.db.data.users[m.sender].sapi += ktdprjct8
global.db.data.users[m.sender].monyet += ktdprjct9
global.db.data.users[m.sender].babihutan += ktdprjct10
global.db.data.users[m.sender].babi += ktdprjct11
global.db.data.users[m.sender].ayam += ktdprjct12

setTimeout(() => {
  conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/0ad816a09fa00dd2f134c.jpg', hsl, wm, `kandang`, `${usedprefix}kandang`, m)
}, 8000)
 setTimeout(() => {
   conn.reply(m.chat, '*DUAR*', m)
 }, 5000)
 setTimeout(() => {
   conn.reply(m.chat, `PIW PIW PIW`, m)
 }, 3000)
 setTimeout(() => {
   conn.reply(m.chat, `_Sedang Berburu..._`, m)
 }, 0)
  user.as = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)$/i
handler.register = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
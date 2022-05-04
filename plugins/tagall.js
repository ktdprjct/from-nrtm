//let { getGroupMembers } = require('../lib/functions')
let { MessageType, Presence } = require('@adiwajshing/baileys')

let handler = async(m, { conn, isGroup, isAdmin, participants, groupMetadata }) => {

  await conn.updatePresence(m.chat, Presence.composing)
  
 let grup = await groupMetadata.participants
 let member = await getGroupMembers(grup)

    conn.reply(m.chat, `┏━━°❀❬ *LIST MEMBER* ❭❀°━━┓\n┃\n${member.map(v => '┃• @' + v.replace(/@.+/, '')).join('\n')}\n┗━━━━━━━━━━━━━━`, null, { contextInfo: { mentionedJid: member } })               
}
handler.help = ['listmember','tagall','tagmember']
handler.tags = ['group']
handler.command = /^(listmember|tagall|tagmember)$/i
handler.group = true
handler.admin = true

module.exports = handler

async function getGroupMembers(participants) {
  members = []
  participants.forEach(user => {
    if (!user.isAdmin) members.push(user.jid)
  })
return members
}
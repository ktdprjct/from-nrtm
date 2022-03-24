let axios = require('axios')
let handler = async (m, { conn }) => {
  let loli = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
   //m.reply('_sedang diproses..._')
  let lolies = loli[Math.floor(Math.random() * (loli.length))]
  let loliess = await getBuffer(lolies)
  conn.sendFile(m.chat, loliess, '', 'Ini lolinya kak...', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli/i

module.exports = handler

getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

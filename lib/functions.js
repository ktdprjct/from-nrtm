const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')
const cfonts = require('cfonts')
const Crypto = require('crypto')
const { fromBuffer } = require('file-type')
const FormData = require('form-data')

exports.getBuffer = getBuffer = async (url, options) => {
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

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getGroupMembers = (participants) => {
  members = []
  for (let i of participants) {
    if (!i.isAdmin) members.push(i.jid)
  }
  return members
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

module.exports = { getBuffer, getGroupAdmins, getRandom }
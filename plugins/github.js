let fetch = require('node-fetch')
let handler = async(m,{ conn, text}) =>{
  let res = await fetch(global.API('https://api.github.com', '/search/repositories', {text}))
  let json = await res.json()
  if (res.status !== 200) throw json
  let str = json.item.map((repo, index) => {
  return`${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
  }).join('\n\n')
}

handler.help = ['github'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^github?$/i

module.exports = handler
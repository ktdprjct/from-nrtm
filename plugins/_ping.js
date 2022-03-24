module.exports = {
    async all(m, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return
        if (typeof m.text !== "string") return
        switch (m.text.toLowerCase()) {
          case "ping":
            m.reply("pong.")
            break
          default:
          break
        }
    }
}
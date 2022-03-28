module.exports = {
    async all(m, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return
        if (typeof m.text !== "string") return
        switch (m.text.toLowerCase()) {
          case "p": case "pe":
            m.reply("p = blockir jika owner lihat")
            break
            
          case "hai bot": case "hai": case "bot": case "hallo": case "hallo bot":
          case "hi bot": case "hi":
            m.reply("hai kak, ada yang bisa bot bantu?\nketik .menu untuk melihat menu")              
            break
            
          case "assalamualaikum": case "assalamu'alaikum": case "assalamu’alaikum warahmatullahi wabarakatuh": case "assalamualaikum warahmatullahi wabarakatuh":              
          case "assalamualaikum bot": case "assalamu'alaikum bot": case "assalamu’alaikum wr wb": case "assalamualaikum wr wb":
            m.reply("وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ")
            break
            
          case "thnk bot": case "thank you bot": case "thankyou bot": case "thank you": case "tq bot":
          case "thnk": case "thanks": case "makasih": case "mksh": case "makasih bot": case "tq":
          case "mksh bot": case "terima kasih": case "terimakasih bot": case "ty bot": case "ty":
            m.reply("sama sama, semoga harimu menyenangkan :)")
            break
            
          case "pagi": case "pagi bot": case "selamat pagi": case "selamat pagi bot":
            m.reply("selamat pagi kak :), ada yang bisa bot bantu?\nketik .menu untuk melihat menu")
            break
            
          case "siang": case "siang bot": case "selamat siang": case "selamat siang bot":
            m.reply("selamat siang kak :), ada yang bisa bot bantu?\nketik .menu untuk melihat menu")
            break
            
          case "sore": case "sore bot": case "selamat sore": case "selamat sore bot":
            m.reply("selamat sore kak :), ada yang bisa bot bantu?\nketik .menu untuk melihat menu")
            break
            
          case "malam": case "malam bot": case "selamat malam": case "selamat malam bot":
            m.reply("selamat malam kak :), ada yang bisa bot bantu?\nketik .menu untuk melihat menu")
            break
          
          default:
          break
        }
    }
}
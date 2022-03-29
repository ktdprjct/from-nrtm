const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Bronze 1': 0,
  'Bronze 2': 1,
  'Bronze 3': 2,
  'Bronze 4': 3,
  'Bronze 5': 4,
  'Silver 1': 5,
  'Silver 2': 7,
  'Silver 3': 9,
  'Silver 4': 11,
  'Silver 5': 13,
  'Gold 1': 15,
  'Gold 2': 18,
  'Gold 3': 21,
  'Gold 4': 24,
  'Gold 5': 27,
  'Platinum 1': 30,
  'Platinum 2': 35,
  'Platinum 3': 40,
  'Platinum 4': 45,
  'Platinum 5': 50,
  'Diamond 1': 60,
  'Diamond 2': 70,
  'Diamond 3': 80,
  'Diamond 4': 90,
  'Diamond 5': 100,
  'Master ✩': 120,
  'Master ✩✩': 140,
  'Master ✩✩✩': 160,
  'Master ✯': 180,
  'Master ✯✯': 210,
  'Master ✯✯✯': 240,
  'GrandMaster ✩': 300,
  'GrandMaster ✩✩': 350,
  'GrandMaster ✩✩✩': 400,
  'GrandMaster ✯': 500,
  'GrandMaster ✯✯': 600,
  'GrandMaster ✯✯✯': 700,
  'Legends 忍¹': 800,
  'Legends 忍²': 900,
  'Legends 忍³': 1000,
  'Legends 忍⁴': 1100,
  'GrandLegends 忍¹': 1200,
  'GrandLegends 忍²': 1400,
  'GrandLegends 忍³': 1600,
  'GrandLegends 忍⁴': 1800,
  'Pro 숒': 2000,
  'Pro × GrandLegends 숒': 2500
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}

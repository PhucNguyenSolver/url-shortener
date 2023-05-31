class Storage {
  constructor() {
    // TODO: persist database
    this.items = {}
  }

  async set(key, value) {
    this.items[key] = value
  }

  async tryGet(key) {
    if (key in this.items) return this.items[key]
    return null
  }
  
  async exist(key) {
    if (key in this.items) return true
    return false
  }
}

const storage = new Storage()

module.exports = {
  storage: storage,
}
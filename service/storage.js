class Storage {
  constructor() {
    // TODO: persist database
    this.items = {}
  }

  async set(key, value) {
    if (key in this.items) throw "Non-unique key: " + key
    this.items[key] = value
  }

  async tryGet(key) {
    if (key in this.items) return this.items[key]
    return null
  }
}

const storage = new Storage()

module.exports = {
  storage: storage,
}
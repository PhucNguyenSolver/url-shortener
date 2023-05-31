const schema = require("./config")

class Persist {
  constructor() {
    const db = require("monk")(schema.uri)
    this.urls = db.get(schema.collection)
  }

  async set(key, value) {
    this.urls.insert({ slug: key, url: value })
    // this.items[key] = value
  }

  async tryGet(key) {
    let any = await this.urls.findOne({ slug: key })
    if (any == null) return null
    else return any.url
    // if (key in this.items) return this.items[key]
    // return null
  }

  async exist(key) {
    return (await this.urls.findOne({ slug: key })) != null
    // if (key in this.items) return true
    // return false
  }
}

module.exports = Persist

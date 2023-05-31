function getConnectionString() {
  const password = "ahihidongoc"
  const conn_string = `nguyenhuuphuc:${password}@initialcluster.ib8vkmc.mongodb.net/url-shortener?retryWrites=true&w=majority`
  const uri = `mongodb+srv://${conn_string}`
  return uri
}

const schema = {
  uri: getConnectionString(),
  collection: "urls",
}

module.exports = schema

require("dotenv").config()

function getConnectionString() {
  let { DB_USER, DB_PASS } = process.env
  const conn_string = `${DB_USER}:${DB_PASS}@initialcluster.ib8vkmc.mongodb.net/url-shortener?retryWrites=true&w=majority`
  const uri = `mongodb+srv://${conn_string}`
  console.log(uri)
  return uri
}

const schema = {
  uri: getConnectionString(),
  collection: "urls",
}

module.exports = schema

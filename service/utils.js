let crypto = require("crypto");

function randomHex(length = 10) {
  let id = crypto.randomBytes(30).toString('hex');
  // "bb5dc8842ca31d4603d6aa11448d1654"
  return id.slice(0, length)
}

module.exports = {
  randomHex: randomHex
}
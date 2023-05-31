// const Urls = require("./urls")

const { storage } = require("./storage")
const { randomHex } = require("./utils")

function generateRandomSlug() {
  return randomHex(9)
}

async function generateValidSlug() {
  let retry = 5
  while (retry > 0) {
    retry -= 1
    let slug = generateRandomSlug()
    if (await storage.exist(slug)) continue
    else return slug
  }
  throw "Max retries exceeded"
}

async function shorten(url, slug) {
  if (!url) return { error: "Url should not be empty" }
  if (slug && (await storage.exist(slug))) return { error: "Slug already in used" }
  if (!slug) slug = await generateValidSlug()
  await storage.set(slug, url)
  return { data: { slug, url: await storage.tryGet(slug) } }
}

async function tryGetUrl(slug) {
  return await storage.tryGet(slug)
}

module.exports = {
  shorten: shorten,
  tryGetUrl: tryGetUrl,
}

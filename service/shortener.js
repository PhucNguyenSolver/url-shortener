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
    if ((await checkSlugUsed(slug)) == false) return slug
  }
  throw "Max retries exceeded"
}

function makeSlugUrl(slug) {
  return `http://localhost:3000/${slug}`
}

async function checkSlugUsed(slug) {
  // TODO: impl
  return (await storage.tryGet(slug)) != null
}

async function saveSlugWithUrl(slug, url) {
  try {
    // TODO: impl
    await storage.set(slug, url)
  } catch (e) {
    console.error(e)
    throw "Cannot save slug"
  }
}

async function shorten(url, slug) {
  if (!url) return { error: "Url should not be empty" }
  if (slug && (await checkSlugUsed(slug))) return { error: "Slug already in used" }
  if (!slug) slug = await generateValidSlug()
  await saveSlugWithUrl(slug, url)
  slug = makeSlugUrl(slug)
  return { data: { slug, url } }
}

async function tryGetUrl(slug) {
  return await storage.tryGet(slug)
}

module.exports = {
  shorten: shorten,
  tryGetUrl: tryGetUrl,
}

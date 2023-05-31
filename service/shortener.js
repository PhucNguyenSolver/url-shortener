// const Urls = require("./urls")

const { storage } = require("./storage")
const { randomHex } = require("./utils")

function generateRandomSlug() {
  return randomHex(9)
}

function generateValidSlug() {
  let retry = 5
  while (retry > 0) {
    retry -= 1
    let slug = generateRandomSlug()
    if (checkSlugUsed(slug) == false) return slug
  }
  throw "Max retries exceeded"
}

function makeSlugUrl(slug) {
  return `http://localhost:3000/${slug}`
}

function checkSlugUsed(slug) {
  // TODO: impl
  return storage.tryGet(slug) != null
}

function saveSlugWithUrl(slug, url) {
  try {
    // TODO: impl
    storage.set(slug, url)
  } catch (e) {
    console.error(e)
    throw "Cannot save slug"
  }
}

function shorten(url, slug) {
  if (!url) return { error: "Url should not be empty" }
  if (slug && checkSlugUsed(slug)) return { error: "Slug already in used" }
  if (!slug) slug = generateValidSlug()
  saveSlugWithUrl(slug, url)
  slug = makeSlugUrl(slug)
  return { data: { slug, url } }
}

function tryGetUrl(slug) {
  return storage.tryGet(slug)
}

module.exports = {
  shorten: shorten,
  tryGetUrl: tryGetUrl,
}

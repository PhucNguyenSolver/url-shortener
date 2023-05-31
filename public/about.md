# AC

POST shortener?url=:url&slug=:slug
- User input initial-url
- User optionally input slug
- User hit "shorten"
- Page check if slug is not specified, then generate random slug
- Page check if slug is already used, then "slug in used"
- Otherwise, page save the slug + the initial-url, and return the shortened-url

GET shortener/:slug
- Page check if slug is not in DB, then return 404
- Otherwise, page redirect user to initial-url according with the slug

# Can be improve
- check URL max length & invalid character
- handle incorrect mongo password 
- copy shortened url to clipboard
- fix makeSlugUrl return correct host:port 
- generate url-friendly encoding slug
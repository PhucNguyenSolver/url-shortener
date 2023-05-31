const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static("public"))


let {shorten, tryGetUrl} = require("./service/shortener")



app.get("/*", async (req, res) => {
  let slug = req.params[0]
  let url = await tryGetUrl(slug)
  if (url != null) res.redirect(url)
  else res.status(404).send("Unknown URL /" + slug)
})

app.post("/", async (req, res) => {
  const { url, slug } = req.body
  let result = await shorten(url, slug)
  res.json(result)
})

app.listen(port, () => {
  console.log("App listening on port", port)
})


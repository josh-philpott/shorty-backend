import Shorty from "../models/shorty"
import shortid from "shortid"

export function shorten(req, res) {
  //Check that the request has url in the body
  if (!req.body.url) {
    res.status(403).end()
    return
  }

  const shorty = new Shorty()

  let long_url = req.body.url
  long_url = long_url.toLowerCase()
  if (long_url.startsWith("http://") || long_url.startsWith("https://")) {
    shorty.url = long_url
  } else {
    shorty.url = "http://" + long_url
  }

  shorty.key = shortid.generate()

  shorty.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ shorty: saved })
  })
}

export function getShortys(req, res) {
  Shorty.find()
    .sort("-dateAdded")
    .exec((err, shortys) => {
      if (err) {
        res.status(500).send(err)
      }
      res.json({ shortys })
    })
}

export function redirectToLongURL(req, res) {
  let shortId = req.params.encoded_id

  Shorty.findOne({ key: shortId }, function(err, doc) {
    if (doc) {
      res.redirect(doc.url)
    } else {
      res.status(500).send(err)
    }
  })
}

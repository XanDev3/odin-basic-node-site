const path = require('path')
const fs = require('fs')
// const url = require('url')
const http = require('http')

const folderPath = path.resolve('pages')
console.log(folderPath)


const indexPath = path.join(folderPath, 'index.html')
const aboutPath = path.join(folderPath, 'about.html')
const contactPath = path.join(folderPath, 'contact-me.html')
const notFoundPath = path.join(folderPath, '404.html')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      fs.readFile(indexPath, (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      })
    }
    case '/about': {
      fs.readFile(aboutPath, (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      })
    }
    case '/contact-me': {
      fs.readFile(contactPath, (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      })
    }
    default: {
      fs.readFile(notFoundPath, (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      })
    }
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

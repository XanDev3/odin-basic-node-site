const path = require('path')
const fs = require('fs')
// const url = require('url')
const http = require('http')

const folderPath = '/home/alex/odin-repos/odin-basic-node-site/pages'

const indexPath = path.join(folderPath, 'index.html')
const aboutPath = path.join(folderPath, 'about.html')
const contactPath = path.join(folderPath, 'contact-me.html')
const notFoundPath = path.join(folderPath, '404.html')

console.log(path.resolve('index.html'))
console.log(aboutPath)
console.log(folderPath)

const server = http.createServer((req, res) => {
  switch (req.url){
    case '/' : {
        res.end()
    }
    case '/about' : {

    }
    case '/contact-me' : {

    }
    default : {

    }
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

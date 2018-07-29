//instal npm i cors/express/

const express = require('express')
const app = express()
const port = 4000
const data = require('./document.json')
//const data2 = require('./document1233455.json')
var cors = require('cors')

app.use(cors())
app.get('/data', (request, response) => {
    response.send(data)
})

/*app.get('/data2', (request, response) => {
    response.send(data)
})*/
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})


/*{
для запуска веб сервера - node server.js

для одновременного запуска concurrently

  "name": "lesson5",
  "version": "1.0.0",
  "description": "lesson5 - chat on WebSocket",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:client": "cd client && npm run itvdn",
    "start:server": "cd server && node app.js",
    "start": "concurrently \"npm run start:server\" \"npm run start:client\""
  },
  "author": "",
  "license": "ISC"
}*/


/*
fetch('http://localhost:4000/data', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
*/
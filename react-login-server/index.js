const express = require('express')
const app = express()
const port = 3001
const bodyParser = require("body-parser");

let openArticleId = 3

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.post('/postId', (request, response) => {
    console.log('Data saved')
    openArticleId = request.body.id
    console.log(openArticleId)
    response.json({ status : 'Open article id saved' })
})


app.get('/getId', (request, response) => {
    console.log('Opened arcticle id requested')
    response.json({ openArticleId : openArticleId })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

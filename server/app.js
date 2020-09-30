const express = require("express")
const supertest = require("supertest")
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({
        message:"Hello World!"
    })
})

const server = app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`)
})

// to test with supertest
module.exports = {
    app,
    server
}
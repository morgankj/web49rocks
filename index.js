// to inject the config vars inside the .env
require('dotenv').config()
const path = require('path')


const cohort1 = process.argv[2]
const user = process.env.USER
const shell = process.env.SHELL

if (cohort1 === 'web-49') {
  console.log(`${cohort1} is the best forever!`)
} else {
  console.log(`booooh cohort ${cohort1}`)
}

console.log(`the user is ${user}`)
console.log(`the shell is ${shell}`)

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build'))) // .static takes absolute path to 'build' folder

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

const port = process.env.PORT || 9000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
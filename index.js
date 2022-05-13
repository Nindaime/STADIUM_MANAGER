const express = require('express')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

require('dotenv').config()
app.get('/', (req, res) => {
  res.send('HEllo')
})

app.post('/verify', (req, res) => {
  const { email, vCode } = req.body
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  })
  let details = {
    from: process.env.USER,
    to: email,
    subject: 'VERIFICATION MAIL',
    text: `your code is ${vCode}`,
  }
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log('it has an error', err)
    } else {
      console.log('done')
    }
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

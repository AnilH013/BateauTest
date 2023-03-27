const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

app.use(bodyParser.json())

const users = [
  {
    id: 1,
    email: 'user1@example.com',
    password: 'password1',
  },
  {
    id: 2,
    email: 'admin',
    password: 'admin',
  },
]

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Email ou mot de passe invalide' })
  }
  const access_token = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET
  )
  res.json({ access_token })
})

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000')
})

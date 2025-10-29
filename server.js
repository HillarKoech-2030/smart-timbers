const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: 'smarttimber',
  resave: false,
  saveUninitialized: true
}));

const users = [];

app.post('/register', (req, res) => {
  const { firstName, lastName, location, password, email } = req.body;
  if (!firstName || !lastName || !location || !password || !email) {
    return res.send('All fields required');
  }
  users.push({ email, password });
  req.session.user = email;
  res.redirect('/order.html');
});

app.post('/login', (req, res) => {
 const { email, password } = req.body;
const user = users.find(u => u.email === email && u.password === password);
 if (!user) return res.send('Invalid login');
  req.session.user = user.email;
  res.redirect('/order.html');
});

app.get('/order.html', (req, res) => {
  if (!req.session.user) return res.redirect('/index.html');
  res.sendFile(path.join(__dirname, 'public', 'order.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


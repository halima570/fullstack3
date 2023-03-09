const express = require('express');
const moment = require('moment');
const port=3000;

const app = express();
app.use(express.static('public'));
const workingHoursMiddleware = (req, res, next) => {
  const now = moment();
  const dayOfWeek = now.day();
  const hourOfDay = now.hour();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res.status(404).send('Sorry, we are closed now.');
  }
};

app.use(workingHoursMiddleware);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home page</title>
        <link rel="stylesheet" href="/ccfile.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact us</a>
        </nav>
        <h1>Welcome to our home page</h1>
        <p>We are a company that specializes in providing quality services to our clients.</p>
      </body>
    </html>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Our Services</title>
        <link rel="stylesheet" href="/ccfile.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact us</a>
        </nav>
        <h1>Our Services</h1>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Contact us</title>
        <link rel="stylesheet" href="/ccfile.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact us</a>
        </nav>
        <h1>Contact us</h1>
        <p>Feel free to contact us if you have any questions or comments.</p>
<form>
<label>Name:</label>
<input type="text" name="name">
<label>Email:</label>
<input type="email" name="email">
<label>Message:</label>
<textarea name="message"></textarea>
<button type="submit">Send</button>
</form>
</body>
</html>
`);})

app.listen(port, () => {
    console.log(`Example app listening on port ${3000}`)
  })


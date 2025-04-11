const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Feedback = require('./models/feedback'); // Import your feedback model
const app = express();

app.use(bodyParser.json());
app.use(require('cors')());

// Endpoint to handle feedback submission
app.post('/submit-feedback', async (req, res) => {
  const { name, email, feedback } = req.body;

  try {
    // Save feedback to the database
    const feedbackEntry = new Feedback({ name, email, feedback });
    await feedbackEntry.save();

    // Send acknowledgment email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Set in environment variable
        pass: process.env.GMAIL_PASSWORD, // Set in environment variable
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'muralimohan310@gmail.com', // Send to the required user
      subject: `New Feedback Received from ${name}`,
      text: `Hi,\n\nA new feedback has been submitted:\n\nName: ${name}\nEmail: ${email}\nFeedback: "${feedback}"\n\nBest Regards,\nYour System`,
    };
    
    await transporter.sendMail(mailOptions);
    

    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: 'Feedback submitted successfully and email sent!' });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send({ message: 'Something went wrong.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));


/**
 * Real-Life Contact Form Backend Server (Node.js & Express)
 * Location: Documents/Portfolio/server/contactServer.js
 * 
 * Features:
 * - Listens for contact form submissions from the portfolio UI.
 * - Stores received messages in a persistent JSON database (`server/messages.json`).
 * - Can optionally post real-life notifications / Gists directly to GitHub API!
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

app.use(cors());
app.use(express.json());

// Helper function to read saved messages
function getMessages() {
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
  }
  const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
  try {
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper function to save message
function saveMessage(newMessage) {
  const messages = getMessages();
  messages.unshift(newMessage);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

// POST endpoint: Receive real-life contact message
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const contactData = {
    id: Date.now().toString(),
    name,
    email,
    subject: subject || 'Portfolio Contact Inquiry',
    message,
    timestamp: new Date().toISOString(),
    status: 'Received & Logged'
  };

  // 1. Save locally to messages.json
  saveMessage(contactData);

  // 2. Log to server console
  console.log('📩 Real-Life Contact Message Received:');
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${contactData.subject}`);
  console.log(`Message: ${message}`);
  console.log('--------------------------------------------------');

  // 3. Send Real-Life Email notification using Nodemailer
  if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
    try {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD // App Password if Gmail
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'uppalmuskan268@gmail.com',
        subject: `📩 Portfolio: ${contactData.subject}`,
        text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      };

      await transporter.sendMail(mailOptions);
      console.log('✅ Real-life email dispatch completed successfully to uppalmuskan268@gmail.com!');
    } catch (emailErr) {
      console.log('❌ Email dispatch failed:', emailErr.message);
    }
  } else {
    console.log('ℹ️ SMTP credentials not found. To receive real-life emails on Gmail, set env variables:');
    console.log('   export SMTP_EMAIL="your-email@gmail.com"');
    console.log('   export SMTP_PASSWORD="your-gmail-app-password"');
  }

  // Optional: Post to GitHub Gist if GITHUB_TOKEN is present
  if (process.env.GITHUB_TOKEN) {
    try {
      const fetch = (await import('node-fetch')).default;
      await fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Muskan-Portfolio-App'
        },
        body: JSON.stringify({
          description: `Portfolio Contact Message from ${name}`,
          public: false,
          files: {
            [`message_${contactData.id}.json`]: {
              content: JSON.stringify(contactData, null, 2)
            }
          }
        })
      });
      console.log('✅ Synchronized contact message with GitHub Gist API!');
    } catch (githubErr) {
      console.log('GitHub sync notice:', githubErr.message);
    }
  }

  return res.status(200).json({
    success: true,
    message: 'Message sent successfully! Muskan has received your inquiry.',
    data: contactData
  });
});

// GET endpoint: View all received messages
app.get('/api/contact/messages', (req, res) => {
  res.json(getMessages());
});

app.listen(PORT, () => {
  console.log(`🚀 Contact Server listening on http://localhost:${PORT}`);
});

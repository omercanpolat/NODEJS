// worker.js

"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const Queue = require("bull");
const nodemailer = require("nodemailer");

// Redis bağlantı ayarları
const REDIS_URL = process.env.REDIS_URL;
const queue = new Queue("mailQueue", REDIS_URL);

// E-posta gönderme işlemi için transporter oluşturun
const transporter = nodemailer.createTransport({
  service: "Gmail", // E-posta hizmet sağlayıcınızı seçin
  auth: {
    user: "your_email@gmail.com", // E-posta adresiniz
    pass: "your_password", // E-posta şifreniz
  },
});

// E-posta gönderme işlemi
queue.process(async (job) => {
  const { to, subject, text } = job.data;

  const mailOptions = {
    from: "your_email@gmail.com", // Gönderen e-posta adresi
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-posta gönderildi: ${to}`);
  } catch (error) {
    console.error(`E-posta gönderme hatası: ${error.message}`);
  }
});

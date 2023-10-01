// app.js


"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const bodyParser = require("body-parser");
const { queue } = require("./worker"); // worker.js dosyasını içe aktarın

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// E-posta gönderme API endpoint'i
app.post("/api/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await queue.add({ to, subject, text });
    res.json({ message: "E-posta gönderme işlemi kuyruğa eklendi." });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "E-posta gönderme işlemi başlatılırken bir hata oluştu.",
      });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 8000;
const router = express.Router();

// app.all("/", (req, res) => {
//   res.send("Hoşgeldin");
// });

//? C-1/a

// router.get(/\a[b|c][c|d]/, (req, res) => {
//   res.send("Deneme");
// });

//? C-1/b

// router.get(/\a[0-9]\/c{2,3}/, (req, res) => {
//   res.send("Deneme");
// });

// router.get(/\a\d\/c{2,3}/, (req, res) => {
//   res.send("Deneme");
// });
//? C-1/c
// router.get(/\/*Hello$/, (req, res) => {
//   res.send("Deneme");
// });

//? C-1/d
// router.get(/^\/Hello$/, (req, res) => {
//   res.send("Deneme");
// });

//? C-2
// app.use(express.json());

// const students = [
//   {
//     id: 1,
//     name: "Alex",
//   },
//   {
//     id: 2,
//     name: "Steve",
//   },
// ];

// router.get("/", (req, res) => {
//   res.json(students);
// });
// router.get("/:name", (req, res) => {
//   const sonuc = students.filter((student) => student.id == req.params.id);
//   //   const sonuc = students.filter((student) => student.name == req.params.name);
//   console.log(req.params);
//   res.json(sonuc);
// });

//? C-3

// const middleware = (req, res, next) => {
//   console.log("Middleware Çalıştı");
//   next();
// };
// app.use(middleware);

//! Farklı Kullanım

// app.use((req, res, next) => {
//   console.log("Middleware Çalıştı");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

//? C-4

// app.use((req, res, next) => {
//   throw new Error("Something went wrong!");
// });

// app.get("/", (req, res) => {
//   res.send("Fonksiyon Çalıştı");
// });

// // errorHandler
// app.use((err, req, res, next) => {
//   const statusCode = 500;
//   res.status(statusCode).send("Hatasız Kod Olmaz");
//   console.log(err.message);
// });

// app.use(errorHandler); Gerek Kalmadı.

//? C-5

// const homeRoute = require("./router/home");
// app.use("/home", homeRoute);
//! Farklı Kullanım
app.use("/home", require("./router/home"));
app.use("/login", require("./router/login"));

app.use(router);
app.listen(PORT, () =>
  console.log("Running \n Çalışıyor: http://127.0.0.1:" + PORT)
);

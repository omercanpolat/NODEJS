// index.js
const app = require("./app");
const worker = require("./worker");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Worker'ı başlat
worker.queue.process();

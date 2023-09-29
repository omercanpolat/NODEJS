// producer.js
const kafka = require("kafka-node");
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }); // Kafka bağlantısı
const producer = new Producer(client);

producer.on("ready", () => {
  console.log("Kafka producer is ready");

  const payloads = [
    {
      topic: "user-activity-topic", // Kafka konusu
      messages: "User activity data", // Gönderilecek mesaj
    },
  ];

  producer.send(payloads, (error, data) => {
    if (error) {
      console.error("Kafka producer error:", error);
    } else {
      console.log("Kafka producer sent data:", data);
    }
    process.exit();
  });
});

producer.on("error", (error) => {
  console.error("Kafka producer error:", error);
});

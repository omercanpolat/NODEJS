// consumer.js
const kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/user-activity", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }); // Kafka bağlantısı

const consumer = new Consumer(client, [{ topic: "user-activity-topic" }], {
  autoCommit: false,
});

consumer.on("message", async (message) => {
  console.log("Received message:", message.value);

  // Mesajı MongoDB'ye kaydetme işlemi (User Activity verisi olarak düşünün)
  try {
    const UserActivity = mongoose.model(
      "UserActivity",
      new mongoose.Schema({
        data: String,
        timestamp: { type: Date, default: Date.now },
      })
    );

    const userActivity = new UserActivity({ data: message.value });
    await userActivity.save();
    console.log("User activity data saved to MongoDB");
  } catch (error) {
    console.error("Error saving user activity data:", error);
  }
});

consumer.on("error", (error) => {
  console.error("Kafka consumer error:", error);
});

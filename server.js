require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { generateReply } = require("./services/aiService");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate-reply", async (req, res) => {
  try {
    const { emailText } = req.body;

    if (!emailText) {
      return res.status(400).json({ error: "No email text provided" });
    }

    const reply = await generateReply(emailText);

    res.json({ reply });
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: "Failed to generate reply" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
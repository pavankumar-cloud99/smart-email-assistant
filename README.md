# 📧 Smart Email AI

Smart Email AI is a Chrome Extension that helps users generate AI-powered email replies directly inside Gmail with different tones like Formal, Friendly, and Professional.

---

## 🚀 Features

- ✨ AI Reply button inside Gmail
- 🎯 Tone selection (Formal, Friendly, Professional)
- 🔐 Secure replies (no sensitive data like OTP, links, account numbers)
- ⚡ Fast response using Groq API
- 🧠 Smart email understanding

---

## 🏗️ Project Structure
email-ai-project/
│
├── email-ai-extension/ # Chrome Extension
│ ├── manifest.json
│ ├── content.js
│ └── background.js
│
├── email-ai-server/ # Backend Server
│ ├── services/
│ │ └── aiService.js
│ ├── .env
│ ├── server.js
│ └── package.json

---

## 🧠 How It Works

1. User clicks "AI Reply" in Gmail  
2. Extension captures email content  
3. Sends request to backend server  
4. Server calls Groq AI API  
5. AI generates reply based on tone  
6. Reply is inserted into Gmail reply box  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

---

### 3️⃣ Load Chrome Extension

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select `email-ai-extension` folder

---

## 🔐 Security

- Filters sensitive data (OTP, links, account numbers)
- Ensures safe and professional AI replies

---

## 🛠️ Technologies Used

- JavaScript
- Node.js
- Express.js
- Chrome Extension APIs
- Groq AI API

---

## 📌 Future Improvements

- 📂 Smart Email Folder Organization
- 🧠 Auto email classification
- 🎨 Better UI (Gmail-style chips)
- 📊 Analytics dashboard

---

## 🙌 Author

Your Name

---

## ⭐ If you like this project, give it a star!
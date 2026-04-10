# 🚫 BetGuard AI – Real-Time Betting Detection & Blocking System

## 📌 Overview

**BetGuard AI** is a full-stack AI-powered web application and Chrome extension designed to detect, analyze, and prevent exposure to betting and gambling-related content in real time.

With the rise of online betting platforms, many users—especially students and young professionals—are increasingly exposed to addictive and potentially harmful content. BetGuard AI addresses this issue by combining **machine learning**, **web monitoring**, and **user analytics** into a single integrated system.

This project demonstrates a complete production-level architecture involving:

* AI-based text classification
* Full-stack web development
* Browser extension integration
* Real-time data processing
* User behavior analytics

---

## 🎯 Problem Statement

Online betting platforms are:

* Easily accessible
* Highly addictive
* Financially dangerous

Most users:

* Are unaware of risks
* Spend excessive time on such platforms
* Lack tools to monitor and control usage

👉 There is a need for an intelligent system that:

* Detects betting content
* Blocks access in real-time
* Tracks user behavior
* Provides actionable insights

---

## 💡 Solution

BetGuard AI provides:

✅ Real-time detection of betting-related content
✅ Automatic blocking via Chrome extension
✅ AI-based classification using NLP
✅ User authentication & secure API access
✅ Analytics dashboard for tracking behavior
✅ Historical data storage and visualization

---

## 🏗️ System Architecture

```
React Frontend 
        ↓
Django REST API 
        ↓
Machine Learning Model (NLP)
        ↓
PostgreSQL Database
        ↓
Chrome Extension (Real-time detection)
```

---

## 🧰 Tech Stack

### 🔹 Frontend

* React.js (Vite)
* Tailwind CSS
* Recharts (for analytics)
* Axios

### 🔹 Backend

* Django
* Django REST Framework
* JWT Authentication

### 🔹 Database

* This project uses SQLite for development and recommends PostgreSQL for production.

### 🔹 Machine Learning

* Scikit-learn
* TF-IDF Vectorization
* Naive Bayes Classifier

### 🔹 Extension

* Chrome Extension (Manifest v3)
* JavaScript

---

## 🤖 Machine Learning Model

The system uses a Natural Language Processing (NLP) model to classify text into:

* **Betting Content (1)**
* **Safe Content (0)**

### Features:

* TF-IDF vectorization with n-grams
* Multinomial Naive Bayes classifier
* Confidence scoring

### Example:

| Input Text              | Output     |
| ----------------------- | ---------- |
| "win money betting app" | Betting ⚠️ |
| "let's study together"  | Safe ✅     |

---

## 🔐 Authentication System

* JWT-based authentication
* Secure login & registration
* Token-based API access
* Used by:

  * Web app
  * Chrome extension

---

## 🔌 Chrome Extension

### Features:

* Scans webpage content in real-time
* Sends data to backend API
* Blocks page if risky content detected
* Shows warning UI

### Workflow:

1. Extract page text
2. Send to `/predict` API
3. Receive prediction
4. If betting → block page

---

## 📊 Dashboard Features

### 1. Analytics Overview

* Total checks
* Risky content count
* Safe content count

### 2. Graph Visualization

* Bar charts for safe vs risky

### 3. Blocked History

* URL of blocked site
* Confidence score
* Timestamp

---

## 🗄️ Data Storage

Whenever a site is blocked:

* URL is saved
* Prediction confidence is stored
* User ID is linked
* Timestamp is recorded

This data is used to:

* Track user behavior
* Generate analytics
* Provide insights

---

## 🧪 Example Outputs

### 🔹 Detection API Response

```json
{
  "prediction": "Betting ⚠️",
  "confidence": 0.92
}
```

---

### 🔹 Analytics API

```json
{
  "total_checks": 10,
  "risky": 6,
  "safe": 4
}
```

---

### 🔹 Blocked History

```json
[
  {
    "url": "https://example-betting-site.com",
    "confidence": 0.91,
    "time": "2026-04-09T10:30:00"
  }
]
```

---

## 🧪 How It Works (Step-by-Step)

1. User logs into web app
2. Token is generated
3. Chrome extension uses token
4. User visits a website
5. Extension extracts text
6. Text sent to backend API
7. ML model predicts risk
8. If risky:

   * Page is blocked
   * Data is saved
9. Dashboard updates in real-time

---

## 🔥 Key Features

* Real-time AI detection
* Browser-level protection
* Data-driven insights
* Full-stack architecture
* Secure authentication
* Scalable design

---

## 📈 Future Enhancements

* Larger dataset (Kaggle integration)
* Deep learning models (BERT)
* Multilingual detection
* Mobile app integration
* Advanced analytics (heatmaps)
* User risk scoring system

---

## 🧠 Learnings

This project demonstrates:

* Full-stack development skills
* Machine learning integration
* Real-time system design
* API development
* Browser extension development
* Deployment and DevOps basics

---

## 🏆 Use Cases

* Student safety tools
* Parental control systems
* Workplace monitoring
* Digital wellness platforms

---

## 📸 Screenshots (Add in GitHub)

* Login Page
* Dashboard
* Detection Page
* Blocked Page UI
* Chrome Extension Popup

---

## 📦 Installation (Local Setup)

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 👨‍💻 Author

**Sarla Bharath Chandra**

* B.Tech CSE Student
* Full Stack Developer
* Machine Learning Enthusiast

---

## 📜 License

This project is open-source and available for learning and research purposes.

---

## ⭐ Final Note

BetGuard AI is not just a project—it's a **real-world solution** combining AI and full-stack engineering to solve a meaningful problem.

---

🚀 *Built with passion to create safer digital experiences*
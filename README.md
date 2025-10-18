<h1 align="center">🕵️‍♂️ CTF AIO Tool</h1>
<p align="center">
  <b>Your all-in-one Capture The Flag toolkit for teams</b><br>
  Collaborate, track, analyze, and solve — all in one platform.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-in%20development-yellow?style=flat-square">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square">
  <img src="https://img.shields.io/badge/docker-ready-blue?style=flat-square">
  <img src="https://img.shields.io/badge/database-MongoDB-green?style=flat-square">
</p>

---

## 🚀 Overview

**CTF AIO Tool** is a web-based platform designed to streamline your Capture The Flag experience.  
It brings together collaboration, tracking, and analysis tools in a single self-hosted environment, ideal for CTF teams who want efficiency and structure.

---

## 🧩 Features

### 🧠 Collaboration
- **Team Pastebin:** Simple shared clipboard (like `cl1p.net`) for quick note exchange.
- **Challenge Tracker:** Track problems, their categories, difficulty, and points — with file-link integration and writeup tracking.
- **File Sharing:** Secure internal file sharing with automatic SHA checksum and **VirusTotal API integration**.

### 🔐 User & Progress Tracking
- Lightweight **local user system** (no passwords, local-only sessions).
- Monitor challenge progress and writeup completion per team member.

### 📝 Writeups & Extraction
- Unified **writeup format** for all challenges.
- Export finished projects with **structured directories and filenames**.
- Locally hosted writeups per tool/category for easy reference.

### 🧰 Embedded Cybersecurity Utilities
- Integrated tools for quick problem-solving:
  - **CyberChef**
  - **Cipher Identifier**
  - **AperiSolve**
  - And more (pluggable tools planned).

### 🐳 Deployment
- Fully **Dockerized** for painless deployment.
- Backed by **MongoDB** (NoSQL) for flexible data handling.

---

## 🏗️ Tech Stack

| Component        | Technology Used |
|------------------|-----------------|
| Frontend         | React + TailwindCSS |
| Backend          | Node.js (Express) |
| Database         | MongoDB |
| Deployment       | Docker |
| Security Tools   | Python integrations (CyberChef, etc.) |

---

## 🧪 Planned Features (Roadmap)

- [ ] Admin dashboard for user and challenge management  
- [ ] API endpoints for CTFd integration  
- [ ] Realtime chat + activity feed  
- [ ] In-app markdown editor for writeups  
- [ ] File analyzer (magic bytes, metadata extraction, etc.)  
- [ ] Built-in hash lookup and decoding tools  
- [ ] Local-only “offline mode”  

---

## ⚙️ Getting Started

# 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-org>/ctf-aio-tool.git
cd ctf-aio-tool
```

# 2️⃣ Launch with Docker
docker-compose up -d

# 3️⃣ Visit the app
http://localhost:3000

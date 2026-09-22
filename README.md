# 🏆 Maxr3 GDPS Demon List

Welcome to the official **Maxr3 GDPS Demon List**! This repository contains the source code, web interface, and level data used to track, rank, and showcase the hardest Demon completions on the **Maxr3 GDPS** Geometry Dash private server.

---

## 📷 Previews

| Web Interface Preview | Mobile / App View |
| :---: | :---: |
| ![Website Preview](./assets/Website%20preview.jpg) | ![App Preview](./assets/In%20The%20App%20Preview.jpg) |

---

## 📌 Features

- **Dynamic Ranking:** Ranks levels based on community submissions and verified completions.
- **Level ID & Password Tracking:** Displays in-game Level IDs and copy passwords (`Free To Copy` / `No Copy`).
- **Embedded Proof Videos:** Direct YouTube video playback for official verifications and player records.
- **Submission System:** Integrated record submission flow with human verification (`hCaptcha`).
- **Lightweight Deployment:** Built to run seamlessly on Cloudflare Workers and Cloudflare Pages.

---

## 🐉 Featured Levels

### 1. Dorabaebasic10 Buff
- **Level ID:** `113`
- **Author & Verifier:** Maxr3
- **Qualifying Percentage:** 100%
- **Password:** Free To Copy
- **Verification Video:** [Watch on YouTube](https://youtu.be/Ea8gJinK6C4?si=73gKwNojhzYIozY8)

---

## 📂 Project Structure

```text
├── assets/
│   ├── In The App Preview.jpg
│   └── Website preview.jpg
├── data/
│   ├── _editors.json
│   ├── _list.json
│   ├── Dorabaebasic10 Buff.json
│   └── Kratos.json
├── index.html
├── README.md
└── worker.js

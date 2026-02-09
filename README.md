# SyncDraw 🎨

SyncDraw is a real-time collaborative drawing application that allows multiple users to draw simultaneously on a shared canvas. The project is built with modern web technologies focusing on performance, scalability, and clean architecture.

The application provides a smooth drawing experience with real-time synchronization, modern UI, theme support, and animated cursor effects.

---

## 🚀 Features

### 🎨 Drawing Features

* Real-time collaborative drawing
* Smooth canvas rendering
* Live cursor movement synchronization
* Multiple users drawing simultaneously
* Optimized canvas updates

### 🌐 Real-Time Communication

* Socket.IO based communication
* Instant drawing synchronization
* Low-latency updates
* Event-based architecture

### 🎨 UI & UX

* Modern responsive UI
* Atomic component structure
* Smooth theme transition (Light/Dark)
* Animated colorful cursor trail
* Auto focus on login input
* Custom branding colors

### ⚡ Performance

* RequestAnimationFrame rendering
* Optimized re-renders
* Lightweight state management
* Fast Vite development environment

---

## 🧱 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML Canvas API

### Backend

* Node.js
* Express.js
* Socket.IO

### Tools

* npm
* ESLint
* Git

---

## 📁 Project Structure

```
syncdraw/
│
├── syncdraw-client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   └── organisms/
│   │   │
│   │   ├── canvas/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── theme/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── syncdraw-server/
│   ├── socket/
│   ├── controllers/
│   ├── routes/
│   └── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd syncdraw
```

---

### Install Client

```bash
cd syncdraw-client
npm i
```

Run client:

```bash
npm run dev
```

---

### Install Server

```bash
cd syncdraw-server
npm i
```

Run server:

```bash
npm run dev
```

---

## 👨‍💻 Author

**Anurag Dalsaniya**

---

## 📄 License

This project is open for learning and development purposes.

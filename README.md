# ⚛️ React Native & Mobile Interview Prep Hub

> A comprehensive, interactive, and developer-focused preparation platform for mastering **React Native**, **Mobile Architecture**, **State Management**, and **Senior Engineering Leadership** interviews.

**Created & Curated by [Yash Adroja](https://github.com/YAshAdroja)**
[![GitHub Stars](https://img.shields.io/github/stars/YAshAdroja/rn-interview?style=social)](https://github.com/YAshAdroja/rn-interview)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?logo=github)](https://yashadroja.github.io/rn-interview/)

---

## 🌟 Overview

The **React Native Interview Prep Hub** is designed to help developers of all experience levels (Junior, Mid, Senior, Lead, and Architect) systematically prepare for technical interviews.

Unlike typical Q&A lists, every question in this platform includes:
1. **Core Technical Answer**: Explaining the *why* and the underlying engine mechanics (e.g., JSI, C++ TurboModules, Fabric renderer, reconciliation).
2. **Real-World Production Scenario**: Concrete examples drawn from production mobile systems (e.g., healthcare workflows, audio streaming, offline synchronization, memory leak profiling).
3. **Interviewer Follow-Up Questions**: The exact follow-up questions real interviewers ask to test depth of knowledge.

---

## 🚀 Key Features

- **📱 130+ Curated Senior-Level Questions**: Organized across 12 specialized categories.
- **🎯 Interactive Practice Mode (Flashcards)**: Toggle answers hidden by default so you can test your recall and explain solutions out loud before revealing.
- **⭐ Starred / Bookmarks System**: Save tricky questions with a single click (or press `B`) to review before your interview. State is persisted in `localStorage`.
- **🔎 Instant Fuzzy Search & Topic Filtering**: Quickly find questions by keyword, category, or difficulty level (`Easy`, `Medium`, `Hard`).
- **☾ Sleek Dark & Light Themes**: Auto-detects system preferences and allows instant switching with smooth transitions and glassmorphic styling.
- **⌨️ Keyboard-First Navigation**:
  - `→` or `L`: Next Question
  - `←` or `H`: Previous Question
  - `Space`: Toggle Answer (in Practice Mode)
  - `B`: Star / Bookmark Question
  - `R`: Random Question
  - `M`: Toggle Question Index Drawer
  - `/`: Focus Search Bar
  - `T`: Toggle Theme (Dark / Light)
  - `?`: Open Keyboard Shortcuts Overlay
  - `Esc`: Close any Modal or Drawer
- **⚡ Zero Build Dependencies**: Built with pure semantic HTML5, modern CSS custom properties, and vanilla JavaScript. Runs anywhere without `npm install` or compilation steps.
- **📶 100% Offline Capable**: Works directly in any browser with zero network access required.

---

## 📚 Covered Categories & Topics

| Category | Topics Covered |
| :--- | :--- |
| **React Native Architecture** | Old vs New Architecture, JSI, Fabric, TurboModules, Codegen, Yoga, Hermes Engine, React Fiber, Bridge serialization, Fast Refresh. |
| **React Core & Hooks** | State vs Props, Key prop pitfalls, `React.memo`, `useMemo` vs `useCallback`, `useContext`, `useEffect` lifecycle, Stale closures, Batching, Error Boundaries. |
| **State & Storage** | Redux Toolkit vs Zustand, AsyncStorage vs MMKV, Realm database, Synchronous storage trade-offs, Local database schema migrations. |
| **APIs & Offline-First** | Offline sync architecture, Handling partial API failures, `Promise.all` vs `Promise.allSettled`, Race conditions (`AbortController`), Debouncing & Throttling, Token refresh flows, Optimistic UI updates. |
| **Performance & Debugging** | `FlatList` virtualization & optimization (`getItemLayout`, `windowSize`), Flipper & React DevTools, Memory leak detection, Security best practices, Handling crash analytics (Sentry/Crashlytics). |
| **Navigation & Platform** | React Navigation (Stacks, Tabs, Drawers), Deep Linking (URL Schemes, Universal Links, App Links), Push Notifications (FCM, background handling). |
| **Testing & CI/CD** | Unit vs Integration vs E2E, Jest, React Native Testing Library, Detox & Appium, Fastlane, Release management, Debugging native Gradle & CocoaPods build errors. |
| **Senior Leadership & STAR** | Technical disagreements, Mentoring junior engineers, Communicating with non-technical stakeholders, Managing tight deadlines, Technical debt vs delivery speed. |
| **Advanced Senior Topics** | Native Modules, Audio recording & chunk upload flows, `AppState` lifecycle, Authentication vs Authorization, Mobile System Design, Accessibility, Dynamic forms, PDF rendering. |
| **JavaScript Fundamentals** | `let` / `const` / `var`, Closures, Promises & `async/await`, Event Loop & Microtasks, Strict equality, Shallow vs Deep cloning. |
| **AI in Mobile Apps** | Generative AI, LLMs, Mobile RAG architecture, AI Agents, Secure prompt engineering, Handling private API keys safely. |
| **Common Behavioral** | "Tell me about yourself", Handling production outages, Complex challenges, Project estimation. |

---

## 📂 Project Architecture

```
RN-Interview/
├── index.html              # Main HTML entry point (SEO, accessibility, layout)
├── css/
│   └── style.css           # Modern design system (light/dark themes, glowing borders, animations)
├── js/
│   ├── questions.js        # 131 Comprehensive interview questions and scenarios
│   └── app.js              # Application state, study mode, bookmarks, keyboard controls
├── .github/
│   └── workflows/
│       └── pages.yml       # Optional automated GitHub Pages deployment workflow
├── .gitignore              # Standard git ignore file
└── README.md               # Developer documentation & guide
```

---

## 💻 Local Development Setup

No build step or Node environment is strictly required! You can get started immediately using any of the following methods:

### Option 1: Direct Browser Launch
Simply double-click `index.html` or open it directly in Google Chrome, Safari, Firefox, or Edge:
```bash
open index.html   # On macOS
# or
xdg-open index.html  # On Linux
```

### Option 2: Using Python HTTP Server
```bash
cd /path/to/RN-Interview
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Option 3: Using Node / npx
```bash
npx serve .
# or
npx live-server .
```

---

## 🛠️ Adding New Questions (Developer Guide)

All questions are maintained in `js/questions.js`. To add a new question, append an object adhering to the schema below:

```javascript
{
  c: "React Native Architecture",   // Category name
  d: "Hard",                         // Difficulty: "Easy" | "Medium" | "Hard"
  q: "What is your question title?", // Question
  a: "Comprehensive technical answer explaining the mechanisms...", // Core Answer
  e: "Real-world production scenario or healthcare/app example...", // Practical Example
  f: "What follow-up question would the interviewer ask next?"       // Follow-Up
}
```

The application automatically reads the dataset, calculates category counts, updates subcategory filters, and re-renders the navigation drawer dynamically.

---

## 🌐 Deploying to GitHub & Going Live (GitHub Pages)

Follow these simple steps to push this project to your GitHub account and publish it live for free:

### Step 1: Initialize Git and Commit
```bash
cd /path/to/RN-Interview

# Initialize git repository
git init -b main

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: complete React Native Interview Prep Hub with modern UI, study mode, and docs"
```

### Step 2: Create a Repository on GitHub
1. Open [GitHub](https://github.com/new).
2. Enter a repository name (e.g. `react-native-interview-prep` or `RN-Interview`).
3. Choose **Public**.
4. Leave "Add a README" **unchecked** (we already have a complete one).
5. Click **Create repository**.

### Step 3: Link Remote and Push
Copy the commands shown on GitHub:
```bash
# Add your GitHub repository remote
git remote add origin https://github.com/YAshAdroja/rn-interview.git

# Push to main branch
git push -u origin main
```

### Step 4: Enable Free GitHub Pages Hosting
1. Go to [https://github.com/YAshAdroja/rn-interview](https://github.com/YAshAdroja/rn-interview).
2. Click **Settings** (gear icon) → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: Select `main` and `/ (root)` folder.
4. Click **Save**.
5. Your project will be live at:
   ```
   https://yashadroja.github.io/rn-interview/
   ```

---

## 🤝 Contributing

Contributions, question suggestions, and improvements are very welcome!
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewQuestions`).
3. Commit your Changes (`git commit -m 'Add new questions for React Native New Architecture'`).
4. Push to the Branch (`git push origin feature/NewQuestions`).
5. Open a Pull Request.

---

## 👨‍💻 Author

**Created with ❤️ by Yash Adroja**
- Dedicated to empowering the mobile and React Native developer community to ace senior technical interviews.

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it for personal and educational purposes.

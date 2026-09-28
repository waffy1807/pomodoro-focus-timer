# 🍅 Pomodoro Focus Timer

A beautiful, feature-rich Pomodoro timer with **98 dynamic backgrounds** across 7 categories that automatically change to keep your workspace fresh and inspiring.

![Pomodoro Timer](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 Core Functionality
- **Three Timer Modes**: Focus (25min), Short Break (5min), Long Break (15min)
- **Custom Durations**: Fully customizable timer lengths
- **Smart Session Tracking**: Automatically tracks completed focus sessions
- **Auto-Switching**: Seamlessly transitions between focus and break modes
- **Session Counter**: Visual indicator showing progress toward long break (every 4 sessions)

### 🎨 Dynamic Background System
- **98 Beautiful Backgrounds**: 7 categories × 14 images each
- **Auto-Rotation**: Configurable intervals (1-60 minutes)
- **Manual Navigation**: Previous/Next controls
- **Category Filtering**: Choose which background categories to display
- **Smooth Transitions**: Elegant fade effects between images
- **Image Preloading**: No flickering, seamless experience

### 🎭 Adaptive Color Themes
- **Dynamic UI Colors**: Timer, buttons, and accents automatically adjust to match each background
- **Smart Overlays**: Ensures text readability on any background
- **Smooth Transitions**: 0.7s color transitions for a polished feel

### 📊 Statistics & Tracking
- **Today's Focus Time**: Total minutes/hours focused today
- **Session Count**: Number of completed focus sessions
- **Last Session Info**: Duration of most recent session
- **Persistent Data**: All stats saved to localStorage

### 🔔 Notifications
- **Sound Alerts**: Gentle notification sound when timer completes
- **Browser Notifications**: Desktop notifications (with permission)
- **Auto Mode Switch**: Automatically starts break after focus session

## 🖼️ Background Categories

| Category | Emoji | Description |
|----------|-------|-------------|
| **Nature** | 🌿 | Meadows, forests, valleys, rivers, waterfalls |
| **Cityscape** | 🏙️ | New York, skylines, bridges, urban scenes |
| **Clouds** | ☁️ | Sky patterns, fluffy clouds, dreamy scenes |
| **Ocean** | 🌊 | Waves, beaches, tropical waters, coastal views |
| **Mountains** | 🏔️ | Peaks, alpine scenes, snowy mountains |
| **Forest** | 🌲 | Deep woods, pine forests, jungle trails |
| **Sunset** | 🌅 | Orange, red, pink, golden hour scenes |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/pomodoro-focus-timer.git
cd pomodoro-focus-timer
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📖 Usage Guide

### Starting a Focus Session
1. Select **Focus** mode (default)
2. Click the **Start** button
3. Work until the timer completes
4. Take a break automatically

### Managing Breaks
- **Short Break**: After 1-3 focus sessions
- **Long Break**: After every 4 focus sessions
- Session dots show progress toward long break

### Changing Backgrounds
- **Manual**: Use ← → arrow buttons below the timer
- **Auto**: Enable auto-rotation in background settings
- **Settings**: Click the image icon (top right)

### Customizing Timer
1. Click the **gear icon** (top right)
2. Adjust Focus, Short Break, and Long Break durations
3. Click **Save**

### Background Settings
1. Click the **image icon** (top right)
2. Toggle auto-rotation on/off
3. Set rotation interval (1-60 minutes)
4. Select specific categories to include
5. Click **Save**

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Lorem Picsum** - Reliable image service
- **Custom Hooks** - Clean, reusable logic

## 📁 Project Structure

```
pomodoro-focus-timer/
├── src/
│   ├── components/
│   │   ├── BackgroundControls.tsx  # Background navigation UI
│   │   ├── Controls.tsx            # Timer controls (start/pause/reset)
│   │   ├── ModeSelector.tsx        # Focus/Short/Long break selector
│   │   ├── Settings.tsx            # Timer settings modal
│   │   ├── Statistics.tsx          # Today's stats display
│   │   └── TimerDisplay.tsx        # Circular timer with progress ring
│   ├── data/
│   │   └── backgrounds.ts          # 98 background images + themes
│   ├── hooks/
│   │   ├── useBackgroundRotation.ts # Background rotation logic
│   │   ├── useLocalStorage.ts      # localStorage persistence
│   │   └── useTimer.ts             # Timer countdown logic
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## 🎨 Features in Detail

### Dynamic Color Themes
Each of the 98 backgrounds has a custom color palette that automatically adjusts:
- Timer ring color
- Timer text color
- Button backgrounds and text
- Mode selector active state
- Accent colors
- Overlay tint for readability

### Smart Session Management
- Tracks focus sessions per day
- Automatically switches to break mode after focus
- Every 4th session triggers a long break
- Session count resets daily

### Background Rotation
- **Sequential**: Cycles through all images in selected categories
- **Preloading**: Next image loads in background for smooth transitions
- **Persistent**: Remember your position across sessions
- **Category Filtering**: Include only your favorite categories

## 🔧 Configuration

### Default Timer Durations
```typescript
{
  focus: 25,      // minutes
  shortBreak: 5,  // minutes
  longBreak: 15   // minutes
}
```

### Default Background Settings
```typescript
{
  intervalMinutes: 5,        // Auto-rotate every 5 minutes
  selectedCategories: [],    // Empty = all categories
  enabled: true              // Auto-rotation enabled
}
```

## 📱 Responsive Design

- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly controls

## 🌐 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Add more background categories

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- **Lorem Picsum** for reliable, high-quality images
- **Unsplash** for inspiration
- **Tailwind CSS** for the amazing utility-first framework
- **React** and **Vite** teams for the incredible tools

## 📞 Support

If you encounter any issues or have questions:
1. Check existing GitHub Issues
2. Create a new issue with details
3. Include screenshots if applicable

## 🎯 Roadmap

- [ ] Add more background categories
- [ ] Custom background upload
- [ ] Dark/Light mode toggle
- [ ] Export statistics
- [ ] Keyboard shortcuts
- [ ] PWA support
- [ ] Sound customization
- [ ] Task list integration

---

**Made with ❤️ for productivity enthusiasts**

⭐ Star this repo if you find it useful!


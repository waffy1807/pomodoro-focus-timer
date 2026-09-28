# Pomodoro Focus Timer - Enhanced with Dynamic Backgrounds

## 🎨 Background Image System

### Image Source
The app now uses **Lorem Picsum** (`picsum.photos`) for reliable, high-quality images:
- **Format**: `https://picsum.photos/seed/{seed}/1920/1080`
- **Reliability**: 100% uptime, no API keys required
- **Consistency**: Same seed always returns the same image
- **Quality**: 1920x1080 resolution, optimized for web

### Categories (7 types × 14 images each = 98 total images)

1. **🌿 Nature** - Meadows, forests, valleys, rivers, lakes, waterfalls
2. **🏙️ Cityscape** - New York, skylines, downtown, bridges, urban scenes
3. **☁️ Clouds** - Sky patterns, fluffy clouds, sunset clouds, dreamy scenes
4. **🌊 Ocean** - Waves, beaches, tropical waters, deep sea, coastal views
5. **🏔️ Mountains** - Peaks, alpine scenes, snowy mountains, misty ridges
6. **🌲 Forest** - Deep woods, pine forests, jungle, sunlit trails
7. **🌅 Sunset** - Orange, red, pink, golden hour scenes

### Dynamic Color Themes
Each background image has a custom color theme that automatically adjusts:
- Timer ring color
- Timer text color
- Accent colors
- Button colors
- Mode selector colors
- Overlay tint for text readability

### Auto-Rotation Features
- **Configurable interval**: 1-60 minutes
- **Manual navigation**: Previous/Next buttons
- **Progress indicator**: Visual dots showing current position
- **Smooth transitions**: Fade effects between images
- **Image preloading**: Next image loads in background to prevent flickering

### Settings
Access background settings via the image icon in the top-right corner:
- Toggle auto-rotation on/off
- Set rotation interval (minutes)
- Select specific categories to include
- View current image position

## 🎯 Core Features

### Timer Modes
- **Focus** (default 25 min) - Deep work sessions
- **Short Break** (default 5 min) - Quick rest
- **Long Break** (default 15 min) - Extended rest after 4 focus sessions

### Controls
- Start/Pause/Resume
- Reset timer
- Custom duration settings
- Session tracking

### Statistics
- Today's total focus time
- Number of sessions completed
- Last session duration
- Session progress dots (4 sessions = 1 long break cycle)

### Notifications
- Sound notification when timer completes
- Browser notifications (with permission)
- Automatic mode switching (Focus → Break → Focus)

### Data Persistence
All data saved to localStorage:
- Timer durations
- Focus sessions history
- Background settings
- Current background position
- Focus session count

## 🚀 Usage

1. **Start a focus session**: Click "Start" button
2. **Take a break**: Automatically switches after focus completes
3. **Change background**: Use arrow buttons or enable auto-rotation
4. **Customize settings**: Click gear icon for timer, image icon for backgrounds
5. **Track progress**: View today's statistics below the timer

## 🎨 Theme Adaptation

The UI dynamically adapts to each background:
- Light backgrounds → Dark text and buttons
- Dark backgrounds → Light text and buttons
- Colorful backgrounds → Complementary accent colors
- All transitions are smooth (0.7s ease)

## 📱 Responsive Design

- Works on desktop, tablet, and mobile
- Touch-friendly controls
- Optimized for all screen sizes
- Glassmorphism UI elements for modern look

## 🔧 Technical Details

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast builds
- **Custom hooks** for timer and background logic
- **No external dependencies** for images (uses picsum.photos CDN)

## 📝 Notes

- Images are loaded from picsum.photos CDN
- Each seed generates a unique, consistent image
- No API keys or authentication required
- Images are optimized for web (1920x1080)
- Smooth fade transitions between images
- Automatic preloading of next image

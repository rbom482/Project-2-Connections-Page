# 🎺 MarchingBandConnect

A social media platform designed specifically for marching band members to connect, share experiences, and stay updated with band activities.

## 📖 About

MarchingBandConnect is a web-based social platform that brings together marching band members in a dedicated space to:
- Share posts, memories, and experiences
- Manage friendships and connections within the band community
- Stay updated with important announcements and events
- Chat and communicate with fellow band members
- View real-time weather information for outdoor rehearsals and performances

## 🎨 Design Theme

The project uses a warm, music-inspired color palette from [ColorHunt](https://colorhunt.co/palette/f4e7e1ff9b45d5451b521c0d):
- **Primary Orange (#FF9B45)** - Main header and accent color
- **Secondary Orange (#D5451B)** - Buttons and highlights
- **Light Background (#F4E7E1)** - Page background
- **Dark Brown (#521C0D)** - Text and contrasts

## 🚀 Features

### Current Features
- **📱 Responsive Design** - Works on desktop, tablet, and mobile devices
- **🏠 Home Page** - Welcome page with weather widget and project introduction
- **📢 Announcements** - Important band updates and event information
- **📝 Posts** - Create and share posts with text and image uploads
- **👥 Friends Management** - Send/receive friend requests, view suggestions, manage connections
- **💬 Chat** - Communication platform for band members
- **👤 Profile** - Personal profile management
- **🌤️ Weather Widget** - Real-time weather display with geolocation support

### Technical Features
- **Bootstrap 5.3.8** for responsive UI components
- **CSS Custom Properties** for consistent theming
- **Vanilla JavaScript** for interactive functionality
- **Open-Meteo API** integration for weather data
- **File Upload Support** for images and documents
- **Local Storage** for client-side data persistence

## 📁 Project Structure

```
Project-2-Connections-Page/
│
├── ConnectionsPage/
│   ├── assets/                 # Image assets
│   │   ├── BandPic.png        # Main logo
│   │   ├── trumpet.png        # Instrument images
│   │   ├── baritone.png       
│   │   ├── drummajor.png      
│   │   └── [other band images]
│   │
│   ├── index.html             # Home/landing page
│   ├── announcements.html     # Band announcements
│   ├── posts.html             # Social posts feed
│   ├── friends.html           # Friend management
│   ├── chat.html              # Chat interface
│   ├── profile.html           # User profile
│   └── index.css              # Main stylesheet
│
└── README.md                  # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.3.8** - UI framework and responsive design
- **Open-Meteo API** - Weather data integration
- **Git** - Version control

## 🎯 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code recommended)
- Git (for version control)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rbom482/Project-2-Connections-Page.git
   cd Project-2-Connections-Page
   ```

2. **Open the project:**
   - Navigate to the `ConnectionsPage` directory
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # If you have Python installed:
     python -m http.server 8000
     
     # If you have Node.js installed:
     npx http-server
     ```

3. **Access the application:**
   - Direct file: Open `ConnectionsPage/index.html` in browser
   - Local server: Navigate to `http://localhost:8000/ConnectionsPage/`

## 📱 Pages Overview

| Page | Purpose | Key Features |
|------|---------|--------------|
| **Home (index.html)** | Landing page and welcome | Weather widget, project intro |
| **Announcements** | Band news and events | Event cards, important updates |
| **Posts** | Social feed | Create posts, upload images, like system |
| **Friends** | Connection management | Friend requests, suggestions, connections list |
| **Chat** | Communication | Messaging interface (placeholder) |
| **Profile** | User profile | Profile management (placeholder) |

## 🌟 Upcoming Features

- [ ] User authentication system
- [ ] Backend database integration
- [ ] Real-time chat functionality
- [ ] Push notifications for announcements
- [ ] Event calendar integration
- [ ] Practice schedule management
- [ ] Music file sharing capabilities
- [ ] Performance video galleries

## 🤝 Contributing

This is a student project, but suggestions and feedback are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

### Recent Updates
- ✅ Applied consistent color theme across all pages
- ✅ Implemented weather widget with geolocation
- ✅ Created interactive posts system
- ✅ Fixed navigation consistency
- ✅ Standardized file naming conventions

### Known Issues
- Chat and Profile pages are currently placeholder content
- Posts are stored locally (not persistent across sessions)
- Friend management is frontend-only (no backend persistence)

## 📄 License

This project is created for educational purposes. Feel free to use and modify for learning.

## 👤 Author

**Rebecca** (rbom482)
- GitHub: [@rbom482](https://github.com/rbom482)
- Project: [MarchingBandConnect](https://github.com/rbom482/Project-2-Connections-Page)

## 🎵 Acknowledgments

- Thanks to the marching band community for inspiration
- [ColorHunt](https://colorhunt.co/) for the beautiful color palette
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Open-Meteo](https://open-meteo.com/) for weather API services

---

*Built with 🎺 for the marching band community*
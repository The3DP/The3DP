# Bible App - Static Website

A simple, fast, and accessible Bible reading platform built with HTML, CSS, and JavaScript.

## Features

- 📖 Bible verse search and display
- 🔖 Favorite verses bookmarking
- 🌙 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ No backend required - runs entirely in the browser
- 🔍 Fast search functionality
- 💾 Local storage for saved data

## Getting Started

### Prerequisites

- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/The3DP/Bible-App.git
cd Bible-App
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
Bible-App/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling
├── js/
│   ├── app.js          # Main application logic
│   ├── bible-data.js   # Bible verses database
│   └── utils.js        # Utility functions
├── data/
│   └── kjv.json        # Bible data (KJV)
└── README.md           # This file
```

## Bible Data Sources

Currently using:
- **King James Version (KJV)** - Public domain

## Usage

1. **Search**: Type book name, chapter, or keywords in the search bar
2. **Browse**: Navigate through books and chapters
3. **Save**: Click the heart icon to save favorite verses
4. **Theme**: Toggle between dark and light modes

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Multiple Bible translations
- [ ] Verse of the day widget
- [ ] Reading plans
- [ ] Note-taking feature
- [ ] Social sharing
- [ ] Offline mode with service workers
- [ ] User accounts and sync (future)

## License

MIT License - see LICENSE file for details

## Contact

Questions or suggestions? Open an issue or reach out!

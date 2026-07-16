// Utility functions for the Bible App

/**
 * Format verse reference as "Book Chapter:Verse"
 */
function formatVerseReference(bookName, chapter, verse) {
    return `${bookName} ${chapter}:${verse}`;
}

/**
 * Parse search query to extract book, chapter, verse
 * Examples: "John 3:16", "Romans 8", "love"
 */
function parseSearchQuery(query) {
    const query_lower = query.toLowerCase().trim();
    
    // Try to match pattern: "Book Chapter:Verse" or "Book Chapter"
    const match = query_lower.match(/(\w+(?:\s+\d)?)[\s:]*(\d+)?:?(\d+)?/);
    
    if (match) {
        return {
            book: match[1],
            chapter: match[2] || null,
            verse: match[3] || null,
            isReference: true
        };
    }
    
    // Otherwise treat as keyword search
    return {
        keyword: query_lower,
        isReference: false
    };
}

/**
 * Find book by name or abbreviation
 */
function findBook(bookQuery) {
    const query_lower = bookQuery.toLowerCase();
    return BIBLE_DATA.books.find(book => 
        book.name.toLowerCase().includes(query_lower) ||
        book.abbr.toLowerCase() === query_lower
    );
}

/**
 * Check if theme is dark mode
 */
function isDarkMode() {
    return document.body.classList.contains('dark-mode');
}

/**
 * Toggle dark/light theme
 */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode() ? 'dark' : 'light');
    updateThemeButton();
}

/**
 * Update theme button emoji
 */
function updateThemeButton() {
    const btn = document.getElementById('theme-toggle');
    btn.textContent = isDarkMode() ? '☀️' : '🌙';
}

/**
 * Load saved theme from localStorage
 */
function loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton();
}

/**
 * Save favorites to localStorage
 */
function saveFavorite(reference) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(reference)) {
        favorites.push(reference);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

/**
 * Remove favorite from localStorage
 */
function removeFavorite(reference) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = favorites.filter(f => f !== reference);
    localStorage.setItem('favorites', JSON.stringify(updated));
}

/**
 * Get all favorites from localStorage
 */
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

/**
 * Check if verse is favorited
 */
function isFavorited(reference) {
    return getFavorites().includes(reference);
}

/**
 * Create a verse element
 */
function createVerseElement(reference, text) {
    const div = document.createElement('div');
    div.className = 'verse-item';
    div.dataset.reference = reference;
    
    const refEl = document.createElement('div');
    refEl.className = 'verse-reference';
    refEl.textContent = reference;
    
    const textEl = document.createElement('div');
    textEl.className = 'verse-text';
    textEl.textContent = text;
    
    const actionsEl = document.createElement('div');
    actionsEl.className = 'verse-actions';
    
    const favBtn = document.createElement('button');
    favBtn.className = 'favorite-btn';
    favBtn.textContent = isFavorited(reference) ? '❤️' : '🤍';
    favBtn.onclick = (e) => {
        e.preventDefault();
        toggleFavorite(reference, text, favBtn);
    };
    
    actionsEl.appendChild(favBtn);
    
    div.appendChild(refEl);
    div.appendChild(textEl);
    div.appendChild(actionsEl);
    
    return div;
}

/**
 * Toggle favorite status
 */
function toggleFavorite(reference, text, btn) {
    if (isFavorited(reference)) {
        removeFavorite(reference);
        btn.textContent = '🤍';
        btn.classList.remove('active');
    } else {
        saveFavorite(reference);
        btn.textContent = '❤️';
        btn.classList.add('active');
    }
    updateFavoritesList();
}

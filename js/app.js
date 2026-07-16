// Main application logic

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    initializeUI();
    setupEventListeners();
    updateFavoritesList();
});

/**
 * Initialize UI elements
 */
function initializeUI() {
    // Populate book select dropdown
    const bookSelect = document.getElementById('book-select');
    BIBLE_DATA.books.forEach(book => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = book.name;
        bookSelect.appendChild(option);
    });
    
    // Set initial chapters for first book
    updateChapterSelect(0);
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Search button
    document.getElementById('search-btn').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // Load button
    document.getElementById('load-btn').addEventListener('click', loadChapter);
    
    // Book select change
    document.getElementById('book-select').addEventListener('change', (e) => {
        const bookIndex = BIBLE_DATA.books.findIndex(b => b.name === e.target.value);
        updateChapterSelect(bookIndex);
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Clear favorites
    document.getElementById('clear-favorites').addEventListener('click', clearAllFavorites);
}

/**
 * Update chapter select dropdown based on selected book
 */
function updateChapterSelect(bookIndex) {
    const book = BIBLE_DATA.books[bookIndex];
    const chapterSelect = document.getElementById('chapter-select');
    chapterSelect.innerHTML = '';
    
    for (let i = 1; i <= book.chapters; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Chapter ${i}`;
        chapterSelect.appendChild(option);
    }
}

/**
 * Perform search
 */
function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        displayMessage('Please enter a search term.');
        return;
    }
    
    const container = document.getElementById('verses-container');
    container.innerHTML = '';
    
    const parsed = parseSearchQuery(query);
    
    if (parsed.isReference) {
        // Try to find and load reference
        const book = findBook(parsed.book);
        if (book) {
            searchByReference(book, parsed.chapter, parsed.verse, container);
        } else {
            displayMessage('Book not found. Try searching by book name or keywords.');
        }
    } else {
        // Keyword search
        searchByKeyword(parsed.keyword, container);
    }
}

/**
 * Search by book/chapter/verse reference
 */
function searchByReference(book, chapter, verse, container) {
    // Convert book name to key format for verse lookup
    const key = book.name.replace(/\s+/g, '_') + '_' + (chapter || 1);
    
    if (BIBLE_DATA.verses[key]) {
        if (verse && BIBLE_DATA.verses[key][verse]) {
            // Specific verse
            const text = BIBLE_DATA.verses[key][verse];
            const ref = formatVerseReference(book.name, chapter, verse);
            container.appendChild(createVerseElement(ref, text));
        } else if (!verse) {
            // All verses in chapter
            Object.entries(BIBLE_DATA.verses[key]).forEach(([v, text]) => {
                const ref = formatVerseReference(book.name, chapter, v);
                container.appendChild(createVerseElement(ref, text));
            });
        } else {
            displayMessage('Verse not found in database.', container);
        }
    } else {
        displayMessage('Chapter not found in database. Database currently has sample verses only.', container);
    }
}

/**
 * Search by keyword
 */
function searchByKeyword(keyword, container) {
    const results = [];
    
    // Search through all verses
    Object.entries(BIBLE_DATA.verses).forEach(([key, chapters]) => {
        Object.entries(chapters).forEach(([verse, text]) => {
            if (text.toLowerCase().includes(keyword)) {
                const [book, chapter] = key.split('_');
                const bookName = BIBLE_DATA.books.find(b => b.name.replace(/\s+/g, '_') === book)?.name;
                const ref = formatVerseReference(bookName, chapter, verse);
                results.push({ ref, text });
            }
        });
    });
    
    if (results.length > 0) {
        results.forEach(result => {
            container.appendChild(createVerseElement(result.ref, result.text));
        });
    } else {
        displayMessage(`No verses found containing "${keyword}". Database currently has sample verses only.`, container);
    }
}

/**
 * Load chapter
 */
function loadChapter() {
    const book = document.getElementById('book-select').value;
    const chapter = document.getElementById('chapter-select').value;
    const query = `${book} ${chapter}`;
    document.getElementById('search-input').value = query;
    performSearch();
}

/**
 * Display message in container
 */
function displayMessage(message, container = null) {
    if (!container) {
        container = document.getElementById('verses-container');
    }
    container.innerHTML = `<div class="welcome-message"><p>${message}</p></div>`;
}

/**
 * Update favorites list in sidebar
 */
function updateFavoritesList() {
    const list = document.getElementById('favorites-list');
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        list.innerHTML = '<p class="empty-state">No favorites yet. Save verses to see them here!</p>';
        return;
    }
    
    list.innerHTML = '';
    favorites.forEach(fav => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.textContent = fav;
        item.onclick = () => {
            document.getElementById('search-input').value = fav;
            performSearch();
        };
        list.appendChild(item);
    });
}

/**
 * Clear all favorites
 */
function clearAllFavorites() {
    if (confirm('Are you sure you want to clear all favorites?')) {
        localStorage.setItem('favorites', JSON.stringify([]));
        updateFavoritesList();
    }
}

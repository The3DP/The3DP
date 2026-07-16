// Bible data structure
// Supports KJV (King James Version) and NKJV (New King James Version)

const BIBLE_BOOKS = [
    // Old Testament
    { name: 'Genesis', abbr: 'Gen', chapters: 50 },
    { name: 'Exodus', abbr: 'Exo', chapters: 40 },
    { name: 'Leviticus', abbr: 'Lev', chapters: 27 },
    { name: 'Numbers', abbr: 'Num', chapters: 36 },
    { name: 'Deuteronomy', abbr: 'Deu', chapters: 34 },
    { name: 'Joshua', abbr: 'Jos', chapters: 24 },
    { name: 'Judges', abbr: 'Jdg', chapters: 21 },
    { name: 'Ruth', abbr: 'Rut', chapters: 4 },
    { name: '1 Samuel', abbr: '1Sa', chapters: 31 },
    { name: '2 Samuel', abbr: '2Sa', chapters: 24 },
    { name: '1 Kings', abbr: '1Ki', chapters: 22 },
    { name: '2 Kings', abbr: '2Ki', chapters: 25 },
    { name: '1 Chronicles', abbr: '1Ch', chapters: 29 },
    { name: '2 Chronicles', abbr: '2Ch', chapters: 36 },
    { name: 'Ezra', abbr: 'Ezr', chapters: 10 },
    { name: 'Nehemiah', abbr: 'Neh', chapters: 13 },
    { name: 'Esther', abbr: 'Est', chapters: 10 },
    { name: 'Job', abbr: 'Job', chapters: 42 },
    { name: 'Psalms', abbr: 'Psa', chapters: 150 },
    { name: 'Proverbs', abbr: 'Pro', chapters: 31 },
    { name: 'Ecclesiastes', abbr: 'Ecc', chapters: 12 },
    { name: 'Isaiah', abbr: 'Isa', chapters: 66 },
    { name: 'Jeremiah', abbr: 'Jer', chapters: 52 },
    { name: 'Lamentations', abbr: 'Lam', chapters: 5 },
    { name: 'Ezekiel', abbr: 'Eze', chapters: 48 },
    { name: 'Daniel', abbr: 'Dan', chapters: 12 },
    { name: 'Hosea', abbr: 'Hos', chapters: 14 },
    { name: 'Joel', abbr: 'Joe', chapters: 3 },
    { name: 'Amos', abbr: 'Amo', chapters: 9 },
    { name: 'Obadiah', abbr: 'Oba', chapters: 1 },
    { name: 'Jonah', abbr: 'Jon', chapters: 4 },
    { name: 'Micah', abbr: 'Mic', chapters: 7 },
    { name: 'Nahum', abbr: 'Nah', chapters: 3 },
    { name: 'Habakkuk', abbr: 'Hab', chapters: 3 },
    { name: 'Zephaniah', abbr: 'Zep', chapters: 3 },
    { name: 'Haggai', abbr: 'Hag', chapters: 2 },
    { name: 'Zechariah', abbr: 'Zec', chapters: 14 },
    { name: 'Malachi', abbr: 'Mal', chapters: 4 },
    // New Testament
    { name: 'Matthew', abbr: 'Mat', chapters: 28 },
    { name: 'Mark', abbr: 'Mar', chapters: 16 },
    { name: 'Luke', abbr: 'Luk', chapters: 24 },
    { name: 'John', abbr: 'Joh', chapters: 21 },
    { name: 'Acts', abbr: 'Act', chapters: 28 },
    { name: 'Romans', abbr: 'Rom', chapters: 16 },
    { name: '1 Corinthians', abbr: '1Co', chapters: 16 },
    { name: '2 Corinthians', abbr: '2Co', chapters: 13 },
    { name: 'Galatians', abbr: 'Gal', chapters: 6 },
    { name: 'Ephesians', abbr: 'Eph', chapters: 6 },
    { name: 'Philippians', abbr: 'Phi', chapters: 4 },
    { name: 'Colossians', abbr: 'Col', chapters: 4 },
    { name: '1 Thessalonians', abbr: '1Th', chapters: 5 },
    { name: '2 Thessalonians', abbr: '2Th', chapters: 3 },
    { name: '1 Timothy', abbr: '1Ti', chapters: 6 },
    { name: '2 Timothy', abbr: '2Ti', chapters: 4 },
    { name: 'Titus', abbr: 'Tit', chapters: 3 },
    { name: 'Philemon', abbr: 'Phm', chapters: 1 },
    { name: 'Hebrews', abbr: 'Heb', chapters: 13 },
    { name: 'James', abbr: 'Jas', chapters: 5 },
    { name: '1 Peter', abbr: '1Pe', chapters: 5 },
    { name: '2 Peter', abbr: '2Pe', chapters: 3 },
    { name: '1 John', abbr: '1Jo', chapters: 5 },
    { name: '2 John', abbr: '2Jo', chapters: 1 },
    { name: '3 John', abbr: '3Jo', chapters: 1 },
    { name: 'Jude', abbr: 'Jud', chapters: 1 },
    { name: 'Revelation', abbr: 'Rev', chapters: 22 }
];

// Bible verses organized by version -> book_chapter -> verse_number
const BIBLE_VERSES = {
    kjv: {
        'John_3': {
            16: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
            17: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved."
        },
        'Romans_8': {
            28: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
            38: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,"
        },
        'Psalms_23': {
            1: "The LORD is my shepherd; I shall not want.",
            4: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me."
        },
        'John_1': {
            1: "In the beginning was the Word, and the Word was with God, and the Word was God."
        },
        'Proverbs_3': {
            5: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
            6: "In all thy ways acknowledge him, and he shall direct thy paths."
        }
    },
    nkjv: {
        'John_3': {
            16: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
            17: "For God did not send His Son into the world to condemn the world, but that the world through Him might be saved."
        },
        'Romans_8': {
            28: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
            38: "For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come,"
        },
        'Psalms_23': {
            1: "The LORD is my shepherd; I shall not want.",
            4: "Yea, though I walk through the valley of the shadow of death, I will fear no evil; For You are with me; Your rod and Your staff, they comfort me."
        },
        'John_1': {
            1: "In the beginning was the Word, and the Word was with God, and the Word was God."
        },
        'Proverbs_3': {
            5: "Trust in the LORD with all your heart, And lean not on your own understanding;",
            6: "In all your ways acknowledge Him, And He shall direct your paths."
        }
    }
};

// Get current version
let currentVersion = 'kjv';

function setVersion(version) {
    if (version === 'kjv' || version === 'nkjv') {
        currentVersion = version;
        localStorage.setItem('bibleVersion', version);
    }
}

function getVersion() {
    return currentVersion;
}

function loadSavedVersion() {
    const saved = localStorage.getItem('bibleVersion');
    if (saved && (saved === 'kjv' || saved === 'nkjv')) {
        currentVersion = saved;
    }
}

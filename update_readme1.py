import random

def load_verses():
    with open("verses.txt", "r", encoding="utf-8") as f:
        return [line.strip().split("|") for line in f if "|" in line]

def pick_random_verse():
    verses = load_verses()
    return random.choice(verses)

def update_readme(verse, reference):
    with open("README.md", "r", encoding="utf-8") as f:
        lines = f.readlines()
    # Find the Bible Verse section
    start = None
    for i, line in enumerate(lines):
        if "## 📖 Bible Verse of the Week" in line:
            start = i
            break
    # Replace the verse in the next line (assumes fixed structure)
    if start is not None:
        lines[start + 1] = f'> **"{verse}"**  \n> — *{reference} NKJV*\n\n'
        with open("README.md", "w", encoding="utf-8") as f:
            f.writelines(lines)

if __name__ == "__main__":
    verse, reference = pick_random_verse()
    update_readme(reference, verse)

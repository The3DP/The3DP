import datetime
import pytz

README_PATH = "README.md"

def get_traffic_light_state():
    cst = pytz.timezone('US/Central')
    now = datetime.datetime.now(cst)
    if 10 <= now.hour < 11:
        return "GREEN"
    elif 11 <= now.hour < 12:
        return "YELLOW"
    else:
        return "RED"

def badge_url(state):
    colors = {
        "GREEN": "brightgreen",
        "YELLOW": "yellow",
        "RED": "red"
    }
    return f"https://img.shields.io/badge/Traffic_Light-{state}-{colors[state]}"

def update_readme():
    state = get_traffic_light_state()
    badge = badge_url(state)
    with open(README_PATH, "r") as f:
        lines = f.readlines()

    # Find and replace the badge line between the markers.
    with open(README_PATH, "w") as f:
        for line in lines:
            if line.strip().startswith("![Traffic Light]("):
                f.write(f"![Traffic Light]({badge})\n")
            else:
                f.write(line)

if __name__ == "__main__":
    update_readme()

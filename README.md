## Hi there 👋
  My name is Daren,
   I am not sure who
    your name is though
      but you can always
       just tell me by contacting
       ------------------------- my email (d73928430@gmail.com) 
       # My top Repositories:
       ## InstaPrint
          InstaPrint Pro
          ---------------
          Any questions? Just go to the CAF
          (Code assigment forum)
          Note: Code assigment forum is a repository 
          that you can search for in by going
          to my GitHub profile.
                                          
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game - Custom Version</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="game-container">
        <canvas id="gameCanvas"></canvas>
        <div class="game-info">
            <h2>Snake Game</h2>
            <p>Score: <span id="score">0</span></p>
            <p>Press 'Arrow Keys' to start the game.</p>
        </div>
    </div>
    <script src="game.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3e50;
    color: white;
    text-align: center;
}

.game-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#gameCanvas {
    border: 3px solid #fff;
    background-color: #34495e;
    display: block;
}

.game-info {
    margin-top: 20px;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 18px;
}

#score {
    color: #e74c3c;
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let apple;
let score;

(function setup() {
    canvas.width = 600;
    canvas.height = 400;

    snake = new Snake();
    apple = new Apple();
    score = 0;

    window.addEventListener("keydown", e => {
        const direction = e.key.replace("Arrow", "").toLowerCase();
        snake.changeDirection(direction);
    });

    window.requestAnimationFrame(gameLoop);
})();

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    snake.update();
    snake.draw();

    apple.draw();

    if (snake.eatApple(apple)) {
        score++;
        document.getElementById("score").textContent = score;
        apple.randomPosition();
    }

    if (snake.collidesWithWall() || snake.collidesWithSelf()) {
        resetGame();
    }

    window.requestAnimationFrame(gameLoop);
}

function resetGame() {
    score = 0;
    document.getElementById("score").textContent = score;
    snake = new Snake();
    apple.randomPosition();
}

function Snake() {
    this.body = [{ x: 10, y: 10 }];
    this.direction = "right";
    this.length = 1;

    this.update = function() {
        const head = { ...this.body[0] };

        if (this.direction === "right") head.x++;
        if (this.direction === "left") head.x--;
        if (this.direction === "up") head.y--;
        if (this.direction === "down") head.y++;

        this.body.unshift(head);

        if (this.body.length > this.length) {
            this.body.pop();
        }
    };

    this.draw = function() {
        this.body.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? "#e74c3c" : "#16a085";
            ctx.fillRect(segment.x * scale, segment.y * scale, scale, scale);
        });
    };

    this.changeDirection = function(direction) {
        if (direction === "up" && this.direction !== "down") this.direction = "up";
        if (direction === "down" && this.direction !== "up") this.direction = "down";
        if (direction === "left" && this.direction !== "right") this.direction = "left";
        if (direction === "right" && this.direction !== "left") this.direction = "right";
    };

    this.eatApple = function(apple) {
        const head = this.body[0];
        return head.x === apple.position.x && head.y === apple.position.y;
    };

    this.collidesWithWall = function() {
        const head = this.body[0];
        return head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows;
    };

    this.collidesWithSelf = function() {
        const head = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) return true;
        }
        return false;
    };
}

function Apple() {
    this.position = { x: 0, y: 0 };

    this.randomPosition = function() {
        this.position = {
            x: Math.floor(Math.random() * columns),
            y: Math.floor(Math.random() * rows),
        };
    };

    this.draw = function() {
        ctx.fillStyle = "#f39c12";
        ctx.fillRect(this.position.x * scale, this.position.y * scale, scale, scale);
    };
}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blue Fire Cross</title>
  <style>
    body {
      margin: 0;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .cross-container {
      position: relative;
      width: 100px;
      height: 150px;
    }

    .vertical, .horizontal {
      background: #1e90ff;
      box-shadow: 0 0 20px #00f, 0 0 40px #0ff, 0 0 60px #1e90ff;
      position: absolute;
      border-radius: 10px;
      animation: flicker 1.2s infinite ease-in-out;
    }

    .vertical {
      width: 20px;
      height: 150px;
      left: 40px;
      top: 0;
    }

    .horizontal {
      width: 100px;
      height: 20px;
      top: 60px;
      left: 0;
    }

    @keyframes flicker {
      0%, 100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05) rotate(1deg);
      }
    }

    .flame {
      position: absolute;
      bottom: -20px;
      left: 50%;
      width: 10px;
      height: 10px;
      background: cyan;
      border-radius: 50%;
      box-shadow: 0 0 20px #00f, 0 0 40px #0ff;
      animation: flameMove 1s infinite ease-in;
    }

    @keyframes flameMove {
      0% {
        transform: translateX(-50%) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%) translateY(-60px) scale(0.5);
        opacity: 0;
      }
    }

    .cross-container::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 4px;
      height: 60px;
      background: transparent;
      box-shadow:
        0 0 20px #00f,
        0 -10px 20px #0ff,
        0 -20px 30px #1e90ff;
      animation: flicker 1s infinite ease-in-out;
      transform: translateX(-50%);
    }
  </style>
</head>
<body>
  <div class="cross-container">
    <div class="vertical"></div>
    <div class="horizontal"></div>
    <div class="flame"></div>
  </div>
</body>
</html>

## Hi there 👋
  My name is Daren,
   I am not sure who
    your name is though
      but you can always
       just tell me by contacting
     my email (d73928430@gmail.com) 
  **
           ---------------
          Any questions? Just go to the CAF
          (Code assigment forum)
          Note: Code assigment forum is a repository 
          that you can search for in by going
          to my GitHub profile.
##
For every 500 contributions I make, I create a new repository.
The most current repository is InstaPrint Pro.


All repositories include a VersION file so you can see upcoming updates.
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
News: 
(Note: come here every week to see real-time edits in progress)
^^^
##
Additions to VersION file:
content will show this week.
##
Descriptions for REPO's (repositories)
are expecting newcoming changes as well.
##
Apology: If you are in constant reliability of my REPO's,
changes may expect a bumpy ride since many ethical difficulties 
have been encountered. 
Thank you so much for your patience. -The3DP
##
>More about VersION
##
VersION is the largest addition to the user convinience
department when using my Repositories. 
It is a easy reading, helpful info giving, and
justifying platform. All of my Repositories are currently underway 
and will (eventually) fully support the VerSION file.
##
How to use: In order to interact with the VersION, Click on 
the VersION file in my repository(ies). 
NOTE: Different VersION files may vary.
Key Tips (if needed).
**********************
One - = 10% for Updates.
One - = 20% for stats affirmed.
##
>RTS
##
RTS stands for Recommended Testing Sites, and will appear on
most of my HTML repositories. This tells you mostly any 
online sites you can visit to test and run my code. Just plug and play (copy and paste).
##
Remember: Please contact me if you 
need something or need help with something.
Contact d73928430@gmail.com. Happy Coding!

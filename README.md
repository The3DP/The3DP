# Visitors since Aug 13, 2025

![Views](https://visitor-badge.laobi.icu/badge?page_id=your-github-username.The3DP&style=flat-square&color=FF00FF&labelColor=00FFFF&logo=eye)


![Profile views since Aug 13, 2025](https://github-readme-stats.vercel.app/api?username=The3DP&count_private=true&show_icons=true&hide_border=true&title_color=808080&text_color=39ff14&label="profile+veiws+since+aug+13,+2025")

To visit my latest project, click [here](https://github.com/The3DP/Mation-2). Thank You!

Hi there! Please leave a reaction to my repositories!
I work very hard on them. Also, please check out my tinkercad account:
https://www.tinkercad.com/users/1dkSz833WZ2
As well as my unknown Thingiverse account:
https://www.thingiverse.com/bit77/designs
My AnkerMake account is:
https://makeitreal.eufymake.com/user/ba8cdc25bf8273bb4bccf32b4408248b5de5d445/
Also, please check out my Dad's website:
https://markandtraci.com/

![IMG_1059](https://github.com/user-attachments/assets/211e53df-9748-4b27-96b2-738abd604854)

Above is a photo of my Raspberry Pi 4B, equipped with an ICE fan.

![IMG_1060](https://github.com/user-attachments/assets/0b09b025-08a3-43f5-b774-dd4f59d58e07)

When Idle, the Pi consumes 2 to 3 watts.

![IMG_1061](https://github.com/user-attachments/assets/79410976-e8d5-4835-8f57-875ec61b2351)

There are brightness options of course, but I keep the lights on high. 
The lights are so bright, they spread colorful lines against the wall.

I love Raspberry Pi's, and currently own 3. Each are used daily in countless ways.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Raspberry Pi Plug-in Animation</title>
  <style>
    body {
      background-color: #1e1e1e;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .scene {
      position: relative;
      width: 600px;
      height: 300px;
    }

    .raspberry-pi {
      position: absolute;
      bottom: 50px;
      left: 100px;
      width: 200px;
      height: 120px;
      background-color: #3d8b3d;
      border-radius: 10px;
      box-shadow: inset 0 0 10px #2e5e2e;
    }

    .usb-port {
      position: absolute;
      top: 80px;
      right: -10px;
      width: 10px;
      height: 20px;
      background-color: #555;
      border-radius: 2px;
    }

    .cable {
      position: absolute;
      width: 100px;
      height: 10px;
      background-color: #333;
      top: 100px;
      left: 500px;
      border-radius: 5px;
      transition: all 2s ease-in-out;
    }

    .plug {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #666;
      left: 480px;
      top: 95px;
      border-radius: 3px;
      transition: all 2s ease-in-out;
    }

    .plugged .cable {
      left: 200px;
    }

    .plugged .plug {
      left: 190px;
    }

    .power-led {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #400;
      top: 10px;
      left: 10px;
      box-shadow: 0 0 5px #000;
      transition: background-color 1s ease-in, box-shadow 1s ease-in;
    }

    .plugged .power-led {
      background-color: #0f0;
      box-shadow: 0 0 10px #0f0;
    }
  </style>
</head>
<body>

  <div class="scene" id="scene">
    <div class="raspberry-pi">
      <div class="usb-port"></div>
      <div class="power-led"></div>
    </div>
    <div class="cable"></div>
    <div class="plug"></div>
  </div>

  <script>
    // Automatically plug in after a short delay
    setTimeout(() => {
      document.getElementById('scene').classList.add('plugged');
    }, 1000);
  </script>

</body>
</html>

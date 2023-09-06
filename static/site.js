  var canvas = document.getElementById('mainimage');
  var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 2;
    var dy = -2;
    var paddleHeight = 15;
    var paddleWidth = 15;
    var paddleX = (canvas.width-paddleWidth)/2;
    var paddleY = (canvas.height-paddleHeight)-30;
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.code  == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.code == 'ArrowLeft') {
            leftPressed = true;
        }
        else if(e.code == 'ArrowUp') {
          upPressed = true;
        }
        else if(e.code == 'ArrowDown') {
          downPressed = true;
        }

        else if(e.code  == "KeyD") {
            rightPressed = true;
        }
        else if(e.code == 'KeyA') {
            leftPressed = true;
        }
        else if(e.code  == "KeyW") {
          upPressed = true;
      }
      else if(e.code == 'KeyS') {
          downPressed = true;
      }
    }
    function keyUpHandler(e) {
        if(e.code  == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.code == 'ArrowLeft') {
            leftPressed = false;
        }
        else if(e.code == 'ArrowUp') {
          upPressed = false;
        }
        else if(e.code == 'ArrowDown') {
          downPressed = false;
        }

        else if(e.code  == "KeyD") {
           rightPressed = false;
        }
        else if(e.code == 'KeyA') {
           leftPressed = false;
       }
       else if(e.code == 'KeyW') {
        upPressed = false;
      }
      else if(e.code == 'KeyS') {
        downPressed = false;
      }
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle();
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("The Tiny Hut", canvas.width/2, canvas.height/2);

        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 5;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 5;
        }
        else if(downPressed && paddleY < canvas.height-paddleHeight) {
          paddleY += 5;
        }
        else if(upPressed && paddleY > 0) {
          paddleY -= 5;
        }

        x += dx;
        y += dy;
    }

    var game = setInterval(draw, 10);
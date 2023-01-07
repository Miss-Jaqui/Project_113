function setup() {
    canvas = createCanvas(800, 450);
    canvas.position(300,150);
    
    video = createCapture(VIDEO);
    video.hide();
  }


function draw() {
    image(video, 200, 55, 400, 350);
    let c = color ('turquoise');
    fill(c);
    noStroke();
    circle(30, 50, 50);
    circle(30, 120, 50);
    circle(30, 190, 50);
    circle(30, 260, 50);
    circle(30, 330, 50);
    circle(30, 400, 50);
    circle(770, 50, 50);
    circle(770, 120, 50);
    circle(770, 190, 50);
    circle(770, 260, 50);
    circle(770, 330, 50);
    circle(770, 400, 50);
    let c2 = color (57, 230, 80);
    fill(c2);
    noStroke();
    rect(75, 20, 650, 20);
    rect(75, 420, 650, 20);
  }
  
  function take_photo(){    
    save('image.png');
  }
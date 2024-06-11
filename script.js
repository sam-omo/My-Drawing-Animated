// HTML Canvas

// Canvas Setup and Graphics Context
var cnv = document.getElementById(`myCanvas`);
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 500;

// Global Vars
let treeTimer = 0;

// Tree and Fly Guy Vars
let treeX = -25;
let treeY = 155;
let flyX = -25;
let flyY = 50;

// Roof and Grass Vars
let roofR = 139;
let roofG = 69;
let roofB = 19;

// `rgb(${roofR}, ${roofG}, ${roofB})`
let grassR = 0;
let grassG = 100;
let grassB = 0;

+requestAnimationFrame(draw);
function draw() {
  // Sky
  ctx.fillStyle = `rgb(15, 40, 75)`;
  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = `rgb(10, 22, 54)`;
  ctx.fillRect(0, 360, 500, 500);
  ctx.fillStyle = `rgb(5, 12, 33)`;
  ctx.fillRect(0, 385, 500, 500);

  // Moon
  ctx.fillStyle = `white`;
  ctx.beginPath();
  ctx.arc(425, 80, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgb(15, 40, 75)`;
  ctx.beginPath();
  ctx.arc(410, 80, 40, 0, 2 * Math.PI);
  ctx.fill();

  // ## House
  // Building
  ctx.fillStyle = `tan`;
  ctx.fillRect(90, 175, 325, 225);
  ctx.fillStyle = `rgb(194, 166, 130)`;
  ctx.fillRect(90, 175, 325, 30);

  // Windows
  ctx.lineWidth = 5;
  ctx.fillStyle = `steelblue`;
  ctx.fillRect(100, 250, 75, 50);
  ctx.fillStyle = `black`;
  ctx.strokeRect(100, 250, 75, 50);

  ctx.fillStyle = `steelblue`;
  ctx.fillRect(330, 250, 75, 50);
  ctx.fillStyle = `black`;
  ctx.strokeRect(330, 250, 75, 50);

  // Door
  ctx.fillStyle = `saddlebrown`;
  ctx.fillRect(225, 299, 50, 100);
  ctx.lineWidth = 5;
  ctx.fillStyle = `black`;
  ctx.strokeRect(225, 299, 50, 100);

  // Roof
  ctx.fillStyle = `rgb(${roofR}, ${roofG}, ${roofB})`;
  ctx.beginPath();
  ctx.moveTo(50, 190);
  ctx.lineTo(250, 100);
  ctx.lineTo(450, 190);
  ctx.moveTo(0, 190);
  ctx.fill();

  // Trees
  let trees = document.getElementById("tree-img");
  ctx.drawImage(trees, treeX, treeY, 250, 250);

  // Fly Guy
  let flyguy = document.getElementById("flyguy-img");
  ctx.drawImage(flyguy, flyX, flyY, 150, 150);

  // Ground
  ctx.fillStyle = `rgb(64, 36, 1)`;
  ctx.fillRect(0, 400, 500, 100);
  ctx.fillStyle = `rgb(${grassR}, ${grassG}, ${grassB})`;
  ctx.fillRect(0, 400, 500, 50);

  // Snow
  for (let snowCount = 1; snowCount <= 100; snowCount++) {
    let x = Math.random() * 500;
    let y = Math.random() * 425;

    ctx.fillStyle = `white`;
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Title
  ctx.fillStyle = `white`;
  ctx.font = `20px arial`;
  ctx.fillText(`Lebron's Crib`, 200, 20);

  // Animation
  treeTimer++;
  // Tree Animation
  console.log(treeTimer);
  if (treeTimer > 0 && treeTimer <= 60) {
    treeX += 1;
  } else if (treeTimer > 60 && treeTimer <= 120) {
    treeX -= 1;
  } else if (treeTimer > 120) {
    treeTimer = 0;
  }

  // Fly Guy Animation
  flyX += 5;
  if (flyX > 20 + cnv.width) {
    flyX = -200;
  }

  // Grass and Roof Snowing
  roofR++;
  roofG++;
  roofB++;
  if (roofR && roofG && roofB == 255) {
    roofR = 255;
    roofG = 255;
    roofB = 255;
  }

  grassR++;
  grassB++;
  grassG++;
  if (grassR && grassG && grassB == 255) {
    grassR = 255;
    grassB = 255;
    grassG = 255;
  }

  requestAnimationFrame(draw);
}

// // Canvas setup
// let cnv = document.getElementById("myCanvas");
// let ctx = cnv.getContext("2d");
// cnv.width = 450;
// cnv.height = 550;

// // Stoplight variables
// let topLight = "red";
// let midLight = "yellow";
// let bottomLight = "green";
// let lightFrame = 0;

// // Block variables
// let gVal = 0;
// let bVal = 255;

// // stickman elements
// let stick1 = document.getElementById("stick1");
// let stick2 = document.getElementById("stick2");

// // Stickman variables
// let stickX = 10;
// let stickY = 300;
// let stickFrame = 0;
// let currentStickImage = stick1;

// requestAnimationFrame(draw);
// function draw() {
//   ctx.fillStyle = "darkgray";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   // Stoplight and outlines
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.strokeRect(50, 50, 75, 185);

//   // red light outline
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.arc(87.5, 80, 20, 0, 2 * Math.PI);
//   ctx.stroke();

//   // yellow light outline
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.arc(87.5, 140, 20, 0, 2 * Math.PI);
//   ctx.stroke();

//   // green light outline
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.arc(87.5, 200, 20, 0, 2 * Math.PI);
//   ctx.stroke();

//   // red light
//   ctx.fillStyle = topLight;
//   ctx.beginPath();
//   ctx.arc(87.5, 80, 20, 0, 2 * Math.PI);
//   ctx.fill();

//   // yellow light
//   ctx.fillStyle = midLight;
//   ctx.beginPath();
//   ctx.arc(87.5, 140, 20, 0, 2 * Math.PI);
//   ctx.fill();

//   // green light
//   ctx.fillStyle = bottomLight;
//   ctx.beginPath();
//   ctx.arc(87.5, 200, 20, 0, 2 * Math.PI);
//   ctx.fill();

//   // Blue Block
//   ctx.fillStyle = `rgb(0, ${gVal}, ${bVal})`;
//   ctx.fillRect(250, 100, 100, 100);

//   // stickman
//   ctx.drawImage(currentStickImage, stickX, stickY);

//   // Stoplight Animation
//   lightFrame++;

//   if (lightFrame > 0 && lightFrame <= 60) {
//     topLight = "red";
//     midLight = "gray";
//     bottomLight = "gray";
//   } else if (lightFrame > 60 && lightFrame <= 120) {
//     topLight = "gray";
//     midLight = "yellow";
//     bottomLight = "gray";
//   } else if (lightFrame > 120 && lightFrame <= 180) {
//     topLight = "gray";
//     midLight = "gray";
//     bottomLight = "green";
//   } else if (lightFrame == 300) {
//     lightFrame = 0;
//   }

//   // Block color change
//   gVal += 0.5; // 0 > 255
//   if (gVal == 255) {
//     gVal = 255;
//   }

//   bVal -= 0.5; // 0 > 255
//   if (bVal == 0) {
//     bVal = 0;
//   }

//   // Stickman Animation
//   stickX += 1;
//   if (stickX >= cnv.width) {
//     stickX = -100;
//   }

//   stickFrame++;
//   if (stickFrame >= 0 && stickFrame < 30) {
//     currentStickImage = stick1;
//   } else if (stickFrame >= 30 && stickFrame < 60) {
//     currentStickImage = stick2;
//   } else if (stickFrame == 60) {
//     stickFrame = 0;
//   }
//   requestAnimationFrame(draw);
// }

// function draw() {
//   // ## Sky
//   ctx.fillStyle = `lightblue`;
//   ctx.fillRect(0, 0, 400, 500);

//   // Sun
//   ctx.fillStyle = `yellow`;
//   ctx.beginPath();
//   ctx.arc(75, sunY, 25, 0, 2 * Math.PI);
//   ctx.fill();

//   // ## Water
//   ctx.fillStyle = `blue`;
//   ctx.fillRect(0, 300, 400, 200);

//   // ## Clouds
//   let cloud = document.getElementById(`cloud-img`);
//   ctx.drawImage(cloud, cloud1X, cloud1Y, 100, 60);
//   ctx.drawImage(cloud, cloud2X, cloud2Y, 100, 60);
//   ctx.drawImage(cloud, cloud3X, cloud3Y, 100, 60);

//   // Draw Fish
//   drawFish(220, 370);
//   drawFish(300, 400);

//   // ## Pier
//   // Pier Landing
//   ctx.fillStyle = `maroon`;
//   ctx.fillRect(0, 250, 250, 25);
//   // Pier Posts
//   for (let x = 0; x < 4; x++) {
//     ctx.fillRect(10 + 50 * x, 200, 15, 350);
//   }

//   // ## Stick Man
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = `black`;

//   // Stickman Butt
//   ctx.beginPath();
//   ctx.moveTo(240, 245); // butt
//   ctx.lineTo(270, 255); // knee
//   ctx.stroke();

//   // Stickman Leg
//   ctx.beginPath();
//   ctx.moveTo(270, 255); // knee
//   ctx.lineTo(275, 285); // foot
//   ctx.stroke();

//   // Stickman Torso

//   ctx.beginPath();
//   ctx.moveTo(240, 245); // butt
//   ctx.lineTo(250, 190); // torso
//   ctx.stroke();

//   // Stickman Arm
//   ctx.beginPath();
//   ctx.moveTo(245, 215); // armpit
//   ctx.lineTo(285, 230); // hand
//   ctx.stroke();

//   // Head
//   ctx.beginPath();
//   ctx.arc(260, 173, 20, 0, 2 * Math.PI);
//   ctx.stroke();

//   // ## Fishing Rod
//   ctx.lineWidth = 5;
//   ctx.strokeStyle = `gray`;

//   // Rod
//   ctx.beginPath();
//   ctx.moveTo(280, 240); // bottom
//   ctx.lineTo(365, 150); // top
//   ctx.stroke();

//   // Line
//   ctx.lineWidth = 1;
//   ctx.beginPath();
//   ctx.moveTo(365, 150);
//   ctx.lineTo(365, 350);
//   ctx.stroke();

//   // Title
//   ctx.fillStyle = `rgb(139, 204, 88)`;
//   ctx.font = `20px arial`;
//   ctx.fillText(`Javascript Canvas`, 10, 20);

//   // Animation
//   cloud1X = cloud1X + 1;
//   cloud2X = cloud2X + 1.5;
//   cloud3X += 1.25;

//   // cloud reappears on the left side
//   if (cloud1X >= 400) {
//     cloud1X = -85;
//     cloud1Y = Math.random() * 250;
//   }
//   if (cloud2X >= 400) {
//     cloud2X = -85;
//     cloud2Y = Math.random() * 250;
//   }
//   if (cloud3X >= 400) {
//     cloud3X = -85;
//     cloud3Y = Math.random() * 250;
//   }

//   // Sun sets but stops at the water
//   sunY += 1;

//   if (sunY >= 300) {
//     sunY = 300;
//   }

//   // x: 220 y: 370
//   function drawFish(x, y) {
//     // ## Fish 1
//     // Head
//     ctx.fillStyle = `green`;
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, 2 * Math.PI);
//     ctx.fill();
//     // Tail
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x + 20, y - 10);
//     ctx.lineTo(x + 20, y + 10);
//     ctx.moveTo(x, y);
//     ctx.fill();
//   }

//   requestAnimationFrame(draw);
// }

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

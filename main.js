// Drawing Basics  

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store Images In Variables
let htmlLogoImg = document.getElementById("html-logo-img");

// Drawing some stuff using graphics context (ctx)

// DRAW RECTANGLES
// Set the outline (stroke) and fill colors
// Use any valid css colors: name, rgb(), rgba(), hex #FF0033

ctx.strokeStyle = "purple"
ctx.strokeRect(50, 20, 150, 50); // Draw an outlined square

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(255, 50, 50, 50); // Draw filled square

// DRAW TEXT
ctx.font = "42px Comic Sans MS"
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 300, 50); // Filled Text

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 150); // Outlined Text

// Draw Lines
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(700, 150);
ctx.lineTo(600, 100);
ctx.stroke(); // Draw the specified path

// Draw Polygon
ctx.strokeStyle = "cyan";
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.lineTo(500, 300);
ctx.closePath(); // Go back to start of path
ctx.fill(); // Draw the specified path

// CIRCLES / ARCS
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 500, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "#FFFF00";
ctx.beginPath();
ctx.arc(250, 500, 20, 0, 2 * Math.PI);
ctx.fill();

// DRAW IMAGES
ctx.drawImage(htmlLogoImg)
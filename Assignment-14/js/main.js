var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
// first line

var radius = 40;
var y = 50;

// Loop to draw 10 circles
for (var i = 0; i < 30; i++) {
    // Calculate x position for each circle
    var x = 50 + i * (2 * radius - 20);

    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

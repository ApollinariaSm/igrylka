var cvs = document.getelementbyid("canvas");
var ctx = cvs.getcontext("2d");

var bird = new image();
var bg = new image();
var fg = new image();
var prepup = new image();
var prepdwn = new image();
bird.src = "flappy_bird_bird";
bg.src = "flappy_bird_bg";
fg.src = "flappy_bird_fg";
prepup.src = "flappy_bird_pipeUp";
prepdwn.src = "flappy_bird_pipeBottom";

var gap = 90;

var xpos = 10;
var ypos = 150;

function draw() {
 ctx.drawImage(bg, 0, 0);
  ctx.drawImage(prepup, 100, 0);
   ctx.drawImage(prepdwn, 100, 0 + pipeup.height + gap)
  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xpos, ypos);
  ypos += grav;
  requestanimationframe(draw);
  
}

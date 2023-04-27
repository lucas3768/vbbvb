var noseX=0;
var noseY=0;

//Funções P5
 function preload() {

 }
 function draw() {
image(video,0,0,300,300)
video.hide()
  fill(255,0,0);
  ellipse(noseX, noseY, 40, 40);
  
 }
 function setup() {
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
 }
 
 function gotPoses(poses) {
    if (poses.length > 0) {
      const pose = poses[0].pose;
      noseX = pose.nose.x;
      noseY = pose.nose.y - 30;
    //   console.Log("noseX" + noseX +"NoseY" + noseY)
    }
  }
  function modelLoaded() {
    console.Log("modelLoaded")
  }
function sla() {
save("foto.png");}
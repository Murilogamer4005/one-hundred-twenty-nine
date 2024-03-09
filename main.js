scoreRightWrist= 0
scoreLeftWrist= 0
RightWristX= 0
RightWristY= 0
LeftWristX= 0
LeftWristY= 0
 music = ""
 function preload(){
 music= loadSound("music.mp3")
 }
 function Play(){
 music.play()
 music.setVolume(0.5)
 music.rate(1)
 }
function setup(){
canvas=createCanvas(600,525)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
 }
 function draw(){
image(video,0,0,600,525);
fill("df2817");
stroke("df2817");
if (scoreRightWrist > 0.2 ) {
    circle(RightWristX, RightWristY, 20);
    if (RightWristY > 0 && RightWristY <= 100 ) {
        document.getElementById("speed").innerHTML = "velocidade = 0.5x";
        music.rate(0.5);

    }
    else if(RightWristY > 100 && RightWristY <= 200 ){
        document.getElementById("speed").innerHTML = "velocidade = 1x";
        music.rate(1);
    }
    else if(RightWristY > 200 && RightWristY <= 300 ){
        document.getElementById("speed").innerHTML = "velocidade = 1.5x";
        music.rate(1.5);
    }
    else if(RightWristY > 300 && RightWristY <= 400 ){
        document.getElementById("speed").innerHTML = "velocidade = 2x";
        music.rate(2);
    }
    else if(RightWristY > 400){
        document.getElementById("speed").innerHTML = "velocidade = 2.5x";
        music.rate(2.5);
    }
}
if (scoreLeftWrist > 0.2 ) {
  circle(LeftWristY, LeftWristX, 20);
  InNumberleftWristY = Number(LeftWristY);
   remove_decimals= floor(InNumberleftWristY);
   volume = remove_decimals/500;
   document.getElementById("volume").innerHTML ="VOLUME="+volume;
   music.setVolume(volume);
}
 }
 function modelloaded(){
console.log("model loaded!= modelo carregado!")
 }
 function gotposes(results){
if (results.length > 0) {
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[10].score;
    LeftWristX = results[0].pose.leftWrist.x;
    RightWristY = results[0].pose.rightWrist.y;
    LeftWristY = results[0].pose.leftWrist.y;
    RightWristX = results[0].pose.rightWrist.x;
}
 }
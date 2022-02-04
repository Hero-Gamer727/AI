song="";
song2="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;
score=0;
song_status="";
function preload(){
    song = loadSound("music1.mp3");
    song2 = loadSound("music.mp3");
    
    }

    function setup(){

        canvas=createCanvas(600,500);
        canvas.center();
        canvas.background("black");
        video=createCapture(VIDEO);
        video.hide()
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
        
        }

        function draw(){
            image(video,0,0,600,500);
            
song_status=song.isPlaying();
console.log(song_status);
console.log(score);
if(score>0.2){
    circle(leftwristX,leftwristY,30);
fill("red");
song2.stop();

if(song_status == false){
    song.play();
    document.getElementById("song_name").innerHTML="The Elegant Captain Hook";
}
}
        }

        function modelLoaded(){
            console.log("Model Loaded!");
        }


        function gotPoses(results){
            if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x-25;
leftwristY=results[0].pose.leftWrist.y;
rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
score=results[0].pose.keypoints[9].score;

console.log("rightwristX = "+rightwristX+"  rightwristY = "+rightwristY);
console.log("leftwristX = "+leftwristX+"  leftwristY = "+leftwristY);
            }
        }
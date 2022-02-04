song="";
song2="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
    
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

console.log("rightwristX = "+rightwristX+"  rightwristY = "+rightwristY);
console.log("leftwristX = "+leftwristX+"  leftwristY = "+leftwristY);
            }
        }
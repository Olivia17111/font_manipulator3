rightWristx =0;
leftWristx =0;
 difference =0;

function preload()
{

}
function setup() {
    video = createCapture(VIDEO);
    video.size(800,600);
    video.position(140,240);
    

    canvas = createCanvas(900,700);
    canvas.position(1000,180);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is Initialized!!");
}



function gotPoses(results , error) {
    if(results.length > 0)
    {
        console.log(results);
       
        
   

    leftWristx = results[0].pose.leftWrist.x;
    rightWristx = results[0].pose.rightWrist.x;

    difference= Math.floor(leftWristx - rightWristx);
    console.log("LeftWristX = " + leftWristx +" RightristX" + rightWristx)
    }else{
        console.log(error);
    }
}

function draw()
{
textSize(difference);
fill(0, 102, 153);
text('Avni',50,400);
 



}




























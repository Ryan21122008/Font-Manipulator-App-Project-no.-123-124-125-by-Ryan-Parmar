nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(1000, 1000);
    canvas = createCanvas(800, 800);
    canvas.position(1200, 230);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        nosex = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;
        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        document.getElementById("textsize").innerHTML = "The size of the text is " + difference + "px";
    }
}
function draw(){
    background("rgb(245, 245, 220)");
    fill("#ffc421");
    stroke("#fcff33");
    textSize(difference);
    text("Ryan Parmar", nosex, nosey);
}

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
    }
}

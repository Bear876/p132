status="";
rubiksCube="";

function preload(){
    rubiksCube = loadImage("rubikscube.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    canvas.position(315,200);
    object_detection = ml5.objectDetector('cocossd', modelLoaded);

}

function modelLoaded(){
    status = true;
    console.log("Model loaded.")
    object_detector.Detect(rubiksCube, gotResult);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}
value1=""
value2=""
function preload()
{
    classifier = ml5.imageClassifier("DoodleNet")
}
function setup()
{
    canvas = createCanvas(300,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyTheCanvas)
    speechs = window.speechSynthesis;
}
function draw()
{
    strokeWeight(13)
    stroke("black")
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyTheCanvas()
{
    classifier.classify(canvas , gotResult)
}
function gotResult(error,result)
{
    if (error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("label").innerHTML="Label :"+result[0].label
        document.getElementById("Acuuracy").innerHTML ="Accuracy :"+Math.round(result[0].confidence*100)+"%"
        utterThis = new SpeechSynthesisUtterance(result[0].label)
        speechs.speak(utterThis)
    }
}
function Clear_canvas()
{
    background("white")
}
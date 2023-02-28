Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
image= document.getElementById("cam")
Webcam.attach('#cam');

function takesnapshot(){
      Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="cap" src= "'+data_uri+'"/>' 
})

}
console.log( "ml5 version=",ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ue847O57i/model.json',modelLoaded)
function modelLoaded(){
      console.log("model is loaded")
}
function identifyimage(){
    img= document.getElementById("cap");
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("resultObjectName").innerHTML=results[0].label
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(2)
    }
}
let lightOn = true
document.getElementById("light").onclick=function (){
    if(lightOn){
        lightOn = !lightOn
        document.body.style.backgroundColor="white"
        document.getElementById("text").style.color="black"
        document.getElementById("light").value = "Light Off"
    }else{
        lightOn = !lightOn
        document.body.style.backgroundColor="black"
        document.getElementById("text").style.color="white"
        document.getElementById("light").value = "Light On"
    }
}
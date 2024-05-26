const colorsNumbers=[0,1,2,3,4,5,6,7,8,9];
const colorsLetters=["a","b","c","e","f","g"];
const clicking=document.getElementById("clicking");
const fliping=document.querySelector(".fliping")
clicking.addEventListener("click", function(){
    let recordingColors="#";
    for (let i=0;i<3;i++){
        recordingColors+=getRandomNumber();
    }
    // console.log("#",recordingColors[]);
    document.body.style.backgroundColor=recordingColors;
    fliping.textContent=fliping[String(recordingColors)];
});
function getRandomNumber(){
    let n=Math.floor(Math.random()*colorsNumbers.length);
    let y=Math.floor(Math.random()*colorsLetters.length);
     return String(n)+y;
}
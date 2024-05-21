const colorsNumbers=[0,1,2,3,4,5,6,7,8,9];
const colorsLetters=["a","b","c","e","f","g"];
const clicking=document.getElementById("clicking");
const fliping=document.querySelector(".fliping")
function getRandomNumber(){
    let n=Math.floor(Math.random()*colorsNumbers.length);
    let y=Math.floor(Math.random()*colorsLetters.length);
     return String(n)+y;
}
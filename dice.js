

var r1 =Math.floor(Math.random()*6)+1;
var source1="./images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",source1);


var r2=Math.floor(Math.random()*6)+1;
var source2="./images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(r1>r2){
    document.querySelector("h1").innerHTML="🎉Player1 Wins!🎉"
}
else if(r1<r2){
    document.querySelector("h1").innerHTML="🎉Player2 Wins!🎉"
}
else{
     document.querySelector("h1").innerHTML="Draw! 🙁"
}

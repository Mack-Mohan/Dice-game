var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;
if(rand1>rand2){
  document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
else if(rand1===rand2){
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");

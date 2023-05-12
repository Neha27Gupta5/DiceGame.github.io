
scr1=0;
scr2=0;
function random1(){
 generated=Math.floor(Math.random()*6)+1;
 generated2=Math.floor(Math.random()*6)+1;
  img1=document.getElementsByTagName("img")[0];
  image="dice"+generated+".png";
  img1.setAttribute("src",image);
   img2=document.getElementsByTagName("img")[1];
  image2="dice"+generated2+".png";
  img2.setAttribute("src",image2);
  
  
   if(generated>generated2){
   scr1=scr1+1;
   document.querySelector("h1").innerHTML = "&#127937 Player 1 Wins!";
   }
  else if(generated<generated2){
   scr2=scr2+1;
   document.querySelector("h1").innerHTML = " Player 2 Wins! &#127937";
   }
   else{
    document.querySelector("h1").innerHTML = " &#127937 Draw &#127937 ";
   }
   document.getElementsByTagName('b')[0].innerText=scr1;
   document.getElementsByTagName('b')[1].innerText=scr2;
 
}
function restart(){
  scr1=0;scr2=0;
  document.getElementsByTagName('b')[0].innerText=scr1;
   document.getElementsByTagName('b')[1].innerText=scr2;
   img1.setAttribute("src","dice6.png");
   img2.setAttribute("src","dice6.png");
  document.querySelector("h1").innerHTML = "Dice Game";

}
document.getElementsByTagName('button')[0].addEventListener('click',random1);
document.getElementsByTagName('button')[1].addEventListener('click',restart);



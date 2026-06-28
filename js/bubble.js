function bubble(){

const bubble=document.createElement("div");

bubble.innerHTML="";

bubble.style.position="fixed";

bubble.style.left=Math.random()*100+"vw";

bubble.style.bottom="-50px";

bubble.style.fontSize=(15+Math.random()*25)+"px";

bubble.style.transition="8s linear";

bubble.style.pointerEvents="none";

document.body.appendChild(bubble);

requestAnimationFrame(()=>{

bubble.style.transform=`translateY(-120vh) translateX(${Math.random()*100-50}px)`;

bubble.style.opacity=0;

});

setTimeout(()=>bubble.remove(),8000);

}

setInterval(bubble,800);
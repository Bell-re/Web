const emoji = [
"💖",
"⭐",
"✨",
"🎀",
"🌸",
"☁️",
"🧸",
"🍓"
];

function createFloating(){

    const e=document.createElement("div");

    e.className="floating";

    e.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

    e.style.left=Math.random()*100+"vw";

    e.style.fontSize=(18+Math.random()*30)+"px";

    e.style.animationDuration=(8+Math.random()*8)+"s";

    document.body.appendChild(e);

    setTimeout(()=>{

        e.remove();

    },16000);

}

setInterval(createFloating,500);
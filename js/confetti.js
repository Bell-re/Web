const confettiEmoji=[
"🎀",
"✨",
"💖",
"🎉",
"🎊",
"🌸"
];

function celebrate(){

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.innerHTML=confettiEmoji[Math.floor(Math.random()*confettiEmoji.length)];

        c.style.left=Math.random()*100+"vw";

        c.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),6000);

    }

}
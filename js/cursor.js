const sparkle = ["✨","⭐","💖","🌸"];

document.addEventListener("mousemove", e => {

    const s = document.createElement("div");

    s.innerHTML = sparkle[Math.floor(Math.random()*sparkle.length)];

    s.style.position = "fixed";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.pointerEvents = "none";
    s.style.fontSize = "18px";
    s.style.transition = "all .8s ease";
    s.style.zIndex = 9999;

    document.body.appendChild(s);

    requestAnimationFrame(()=>{
        s.style.transform = "translateY(-40px) scale(0)";
        s.style.opacity = "0";
    });

    setTimeout(()=>s.remove(),800);

});
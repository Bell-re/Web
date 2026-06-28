function popup(title,message){

const box=document.createElement("div");

box.innerHTML=`
<div class="popup">
<h2>${title}</h2>
<p>${message}</p>
<button onclick="this.parentElement.remove()">
OK ♡
</button>
</div>
`;

document.body.appendChild(box);

}
function typeWriter(id,text,speed=50){

    const element=document.getElementById(id);

    element.innerHTML="";

    let i=0;

    function type(){

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

            setTimeout(type,speed);

        }

    }

    type();

}
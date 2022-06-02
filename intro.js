var a=document.getElementById("href");
var h1=document.getElementById("enter");
var ok=true;
document.body.addEventListener('keypress',function(event){
    if(event.key=="Enter" && ok==true)
        h1.innerText="Apăsați pe imagine pentru a accesa site-ul";
        a.href="index.html";
        ok=false;
})
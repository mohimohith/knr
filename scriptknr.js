function nav(){
var value1=document.querySelector(".navs");
var style=getComputedStyle(value1);
console.log(style.left);
if(style.left=="0px"){
     value1.style.left="-100%";
}else{
    value1.style.left="0";
}
}
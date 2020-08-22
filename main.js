canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="";
var lastpositionofx,lastpositionofy;
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseUp";


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lastpositionofx,lastpositionofy);
    ctx.lineTo(currentpositionofx,currentpositionofy);console.log("DRAW");
    ctx.stroke();
                                                                                                                            


}

lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;


}

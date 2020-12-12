var mouseevent="empty";
var lastpositionofX, lastpositionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown,",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseevent="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
currentpositionofX=e.clientX-canvas.offsetLeft;
currentpositionofY=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("lastpositionofXandY= ");
console.log("X= "+lastpositionofX+"y= "+lastpositionofY);
ctx.moveTo(lastpositionofX, lastpositionofY);
console.log("currentpositionofXandY= ");
console.log("X= "+currentpositionofX+"y= "+currentpositionofY);
ctx.lineTo(currentpositionofX, currentpositionofY);
ctx.stroke();
}
lastpositionofX=currentpositionofX;
lastpositionofY=currentpositionofY;
}
function clearArea(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


















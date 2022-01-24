var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); 

//create 3 rectangles 
c.fillStyle = 'rgba(255,0,0,0.5)'
c.fillRect(100,100,100,100);

c.fillStyle = 'rgba(0,0,255,0.5)'
c.fillRect(400,100,100,100);

c.fillStyle = 'rgba(0,255,0,0.5)'
c.fillRect(300,300,100,100);

//begin path 
c.beginPath(); //页面的最上方一条线
c.moveTo(50,300);//Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
c.lineTo(300,100)
c.lineTo(400,300)
c.strokeStyle = 'rgba(255,0,0,1)'
c.stroke();//Use the stroke() method to actually draw the path on the canvas.

// //arc 那个圆圈的画法
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false)
// c.strokeStyle = "blue"
// c.stroke();

//画多个圆圈 在不同位置
for(let i = 0;i<100;i++){
    var x = Math.random() * window.innerHeight; //always get value below windows.innerHeigh
    var y = Math.random() * window.innerWidth;// 定义 x y 起点
    c.beginPath();//The beginPath() method begins a path, or resets the current path.
    c.arc(x,y,30,0,Math.PI*2,false)  //radius：30 pixel，startangle 0， endAngle Math.pi*2
    c.strokeStyle = "blue" //圆圈的颜色
    c.fillStyle = "gold"//fill hardcoded 金色
    c.fillStyle = "#"+i*3 //fill different color use #
    c.fill() // call fill function to fill color
    c.stroke(); // call stroke function 
}           


////////////////////////////////////////////
//after change location , it stpped there
var x = Math.random()* innerWidth;
var y = Math.random()* innerHeight; //产生很多x，y within windows height
var radius = 30;
//animate
function animate(){
    //use inbuilt function to request animation frame
    requestAnimationFrame(animate) // the annimate function would be run 

    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false); //draw PI *2 =360 degree for a circle
    c.strokeStyle ="blue"
    c.fillStyle= "red";
    c.fill()
    c.stroke()
}
animate();
/////////////////////////////////////////////


//after change location , let it move continuously , keep the old circle
var x = Math.random()* innerWidth;
var y = Math.random()* innerHeight; //产生很多x，y within windows height
var dx = (Math.random()-0.5)*10
var radius = 30;
//animate
function animate(){
    //use inbuilt function to request animation frame
    requestAnimationFrame(animate) // the annimate function would be run 
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false); //draw PI *2 =360 degree for a circle
    c.strokeStyle ="blue"
    c.fillStyle= "red";
    c.fill()
    c.stroke()

    x+=dx //increase x value to let it move continuously after it change location
}
animate();

/////////////////////////////////////////

//after change location , let it move continuously , 清屏，只留下新的circle

var x = Math.random()* innerWidth;
var y = Math.random()* innerHeight; //产生很多x，y within windows height
var dx = (Math.random()-0.5)*10 //x的位移量
var dy = (Math.random()-0.5)*10 //y的位移量
var radius = 30;
//animate
function animate(){
    //use inbuilt function to request animation frame
    requestAnimationFrame(animate) // the annimate function would be run 
     c.clearRect(0,0,innerWidth,innerHeight)//清屏的意思，只留下新的circle

    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false); //draw PI *2 =360 degree for a circle
    c.strokeStyle ="blue"
    c.fillStyle= "purple";
    c.fill()
    c.stroke()

   //如何让circle不跑出屏幕 (当x>右侧边框 或者 x< 左侧边界 0 ， 改变x的direction)
    if(x +radius > innerWidth || x -radius< 0){
        dx = -dx; //改变x方向 reverse direction
    }
    x+=dx
    //同理for y
    if(y +radius > innerHeight || y -radius< 0){
        dy = -dy; //改变x方向 reverse direction
    }

    y+=dy  //increase x value to let it move continuously after it change location

}
animate();
///how to add 300 bouncing box?

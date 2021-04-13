var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext('2d');

//设定尺寸
canvas.width=400
canvas.height=400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡

function draw(){
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每隔50划一条线
    ctx.moveTo(pos,0) //x轴上的起点
    ctx.lineTo(pos,400) //x轴上的终点
    ctx.fillText(pos,pos,10) //x轴加上文字(文字内容，x位置，y位置-不变)
    //
    ctx.moveTo(0,pos) //y轴起点
    ctx.lineTo(400,pos) //y轴终点
    ctx.fillText(pos,0,pos)//x轴加上文字(文字内容，x位置-不变，y位置)
    } //for回圈
    ctx.strokeStyle = "rgba(0,0,0,0.1)"//让线显示，不然默认透明
    ctx.stroke()
  
//地面上的线
ctx.beginPath()
ctx.moveTo(25,350)
ctx.lineTo(375,350)
ctx.lineWidth = 2
ctx.strokeStyle="black"//沿用上一个rgba的色彩，所以这边改成黑色
ctx.stroke()
}
draw()

//左城门
ctx.fillStyle="#E4B165"
ctx.fillRect(50,200,50,150)//(x轴，y轴，宽，高)
ctx.strokeRect(50,200,50,150) //边线沿用之前的黑色
//左城门盖头
ctx.fillStyle="#2C728A"
ctx.fillRect(40,175,70,25)//(x轴，y轴，宽，高)
ctx.strokeRect(40,175,70,25) //边线沿用之前的黑色
//右城门
ctx.fillStyle="#E4B165"
ctx.fillRect(300,200,50,150)//(x轴，y轴，宽，高)
ctx.strokeRect(300,200,50,150) //边线沿用之前的黑色
//右城门盖头
ctx.fillStyle="#2C728A"
ctx.fillRect(290,175,70,25)//(x轴，y轴，宽，高)
ctx.strokeRect(290,175,70,25) //边线沿用之前的黑色
//拱门
ctx.beginPath()
ctx.moveTo(100,250)
ctx.lineTo(300,250)
ctx.lineTo(300,350)
ctx.lineTo(250,350)

ctx.arc(200,350,50,0,Math.PI,true) //arc (x,y,半徑,開始角度,結束角度 圆心坐标-半径-开始角度-结束角度

ctx.lineTo(150,350)
ctx.lineTo(100,350)
ctx.closePath()

ctx.fillStyle="#945238"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//方形主体
ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(250,125)
  ctx.lineTo(250,250)
  ctx.lineTo(150,250)
ctx.closePath()
ctx.fillStyle="#E4B165"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//三角尖塔
ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(200,50)
  ctx.lineTo(250,125)
ctx.closePath()
ctx.fillStyle="#2C728A"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//窗户
ctx.beginPath()
  ctx.arc(200,175,15,Math.PI*2,Math.PI,true)//?
  ctx.lineTo(185,200)
  ctx.lineTo(215,200)
ctx.closePath()
  ctx.fillStyle="white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()

//左城門旗子
      ctx.beginPath()
        ctx.moveTo(75,175)
        ctx.lineTo(75,125)
        ctx.lineTo(100,140)
        ctx.lineTo(75,150)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //右城門旗子
      ctx.beginPath()
        ctx.moveTo(325,175)
        ctx.lineTo(325,125)
        ctx.lineTo(350,140)
        ctx.lineTo(325,150)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke() 
  
  //車子
    ctx.fillStyle="white"
    let carx = time
    ctx.fillRect(300,340,40,25)
    ctx.strokeRect(300,340,40,25)
  
    ctx.beginPath()
    ctx.arc(300+10,365,5,0,Math.PI*2)
    ctx.arc(300+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()





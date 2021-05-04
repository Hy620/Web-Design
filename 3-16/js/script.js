var name ="Sally";
alert("Hello"+name);

var name ="Sally";
var age = 20;
var isGirl = true;
var fruits = ["蘋果","香蕉","旺梨"];

alert(name);
alert(age);
alert(isGirl);
alert(fruits[2]);

function addition(num){
    return num+10;
}
var age = 20;
var trueage= addition(age);
alert(trueage);

function test(){
	a     = 123;
	var b = 456;
	if(a  == 123) var c = 789;
}

document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="blue";

document.getElementsByClassName("byclass")[0].innerHTML="我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("p")[2].innerHTML="我想吃奶油口味的紅豆餅";
document.getElementsByTagName("p")[2].style.color="red";
document.getElementsByTagName("p")[2].style.fontSize="30px";
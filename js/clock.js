(function(){ 
    console.info("Hello JS");
 })();
 let myDate = new Date();
 let myNode = document.createElement('div');
 document.getElementById('digitalClock').appendChild(myNode)
let rotSeconds = -90
let rotMinutes = -90
let rotHours = -90
 let second = 0
 let minute = 0
 let hour = 0

 
 myNode.innerHTML = myDate.toTimeString().substr(0,8);

var updateTime = function(){
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substr(0,8);
}

 setInterval(updateTime, 1000);

 document.getElementById('hrHand').style.backgroundColor = '#0f0';
 
 let seconds = setInterval(function(){
    second += 1
    rotSeconds = (second * 6) - 90;
    document.getElementById('secondHand').style.transform = 'rotate('+rotSeconds+'deg)'
 },1000) 

 let minutes = setInterval(function(){
    minute+= 1
    console.log(minute)
    rotMinutes = (minute * 6) - 90;
    document.getElementById('minHand').style.transform = 'rotate('+rotMinutes+'deg)'
 },60000) 

let hours = setInterval(function(){
    hour+= 1
    console.log(hour)
    rotHours = (hour * 6) - 90;
    document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)'
 },3600000) 


 

 
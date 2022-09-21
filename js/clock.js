(function(){ 
    console.info("Hello JS");
 })();
 let myDate = new Date();
 let myNode = document.createElement('div');
 document.getElementById('digitalClock').appendChild(myNode)
 myNode.innerHTML = myDate.toTimeString().substr(0,8);

 let second = Math.floor(myDate.toTimeString().substr(6,8).substr(0,2))


 let minute = Math.floor(myDate.toTimeString().substr(3,5).substr(0,2))
 let hour = Math.floor(myDate.toTimeString().substr(0,2))
let rotSeconds = (second * 6) - 90
let rotMinutes = (minute * 6) - 90
let rotHours = (hour * 30) - 90
document.getElementById('minHand').style.transform = 'rotate('+rotMinutes+'deg)'
document.getElementById('secondHand').style.transform = 'rotate('+rotSeconds+'deg)'
document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)'
 
 


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
    rotHours = (hour * 3.75) - 90;
    console.log(hour)
    document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)'
 },450000)
 
//  360000

 

 
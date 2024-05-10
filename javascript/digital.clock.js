function currentDate() {
    var date=new Date();
    var dd=date.getDate().toString().padStart(2,'0');
    var mm=date.getMonth();
    var dy=date.getDay();
    var months=["jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec"];
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var yy=date.getFullYear();
    var dateString=`${dd}/${months[mm]}/${yy}`
   document.getElementById("date").innerHTML=dateString;
   document.getElementById("day").innerHTML=days[dy];
}
setInterval(currentDate,1000)

function dateOutput() {
    var date=new Date();
    var ampm="PM"
    var hh=date.getHours();
    hh>=12? ampm="Pm": ampm="Am"
    hh==12?hh=0:hh;
    hh>=13?hh=hh-12:hh;
    hh=hh.toString().padStart(2,'0');
    var mi=date.getMinutes().toString().padStart(2,'0');
    var ss=date.getSeconds().toString().padStart(2,'0');
    var hhmi=`${hh}:${mi} ${ampm}`
    // console.log(hhmi,ss);
    document.getElementById("hours12").innerHTML=hhmi;
    document.getElementById("sec").innerHTML=ss;
}
setInterval(dateOutput,1000)
function dateOutput24() {
    var date=new Date();
    var ampm="PM"
    var hh=date.getHours().toString().padStart(2,'0');
    var mi=date.getMinutes().toString().padStart(2,'0');
    var ss=date.getSeconds().toString().padStart(2,'0');
    document.getElementById("hours24").innerHTML=`${hh}:${mi}`;
    
}
setInterval(dateOutput24,1000)
var num=0;
function togglebutton() {
    num++;
    if(num%2==0)
    {
        document.getElementById("button").style.left="0px";
        document.getElementById("button").style.backgroundColor="black";
        document.getElementById("toggle").style.backgroundColor="white";
        document.getElementById("hours12").style.display="block";
        document.getElementById("hours24").style.display="none"
    }
    else
    {
        document.getElementById("button").style.left="3vw";
        document.getElementById("button").style.backgroundColor="white";
        document.getElementById("toggle").style.backgroundColor="black";
        document.getElementById("hours12").style.display="none";
        document.getElementById("hours24").style.display="block" ;
    }
}
function bgColor() {
    var date=new Date();
    var index=date.getDay();

    var arr=["yellow,orange","red,purple","black,salmon","white,plum","white,black","grey,brown","orange,red,blue"]
    // console.log(arr[index]);
    document.body.style.backgroundImage=`linear-gradient(${arr[index]})`;
}
bgColor()

//------------------------------------

function time() {
    let audio=new Audio("../digital-clock/assets/alarm.mp3");
    let currentDate = new Date();

    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let date = currentDate.getDate().toString().padStart(2, '0');

    let dateString = `${currentDate.getFullYear()}-${month}-${date}`;

    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}`;

    let dateInput = document.getElementById("date1").value;
    let timeInput = document.getElementById("time1").value;
    if (dateString === dateInput && timeString === timeInput) {
        audio.play();
    }
}

setInterval(time, 1000);
function closeWindow() {
    document.getElementById("containerAlarm").style.display="none";
}
function openWindow() {
    document.getElementById("containerAlarm").style.display="flex";
}
const colorCombos = [
    ["#FF5733", "#6C63FF", "#FFC300"], 
    ["#E8E288", "#80B192", "#D35D6E"], 
    ["#EA5455", "#F07B3F", "#FFD460"], 
    ["#4ECDC4", "#FF6B6B", "#FFE66D"], 
    ["#7209B7", "#3A0CA3", "#F72585"], 
    ["#90E0EF", "#FFD6BA", "#FFAAA6"], 
    ["#FF6B6B", "#FFE66D", "#8AB6D6"]
];
let currentIndex = 0;

function transitionBackground() {
    currentIndex = (currentIndex + 1) % colorCombos.length;
    const degrees = currentIndex * 30; 
    const colors = colorCombos[currentIndex];
    document.getElementById("containerAlarm").style.backgroundImage = `linear-gradient(${degrees}deg, ${colors.join(", ")})`;
}

setInterval(transitionBackground, 2000); 


let isim = prompt("Adınızı yazınız:")
document.querySelector("#myName").innerHTML = isim
showTime()

function showTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.querySelector("#myClock").innerHTML = dateTime;
}

setInterval(() => {showTime();}, 1000);

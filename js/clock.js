function showTime(){
   
    const today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()

    h = (h<10) ? "0"+ h:h;
    m = (m<10) ? "0"+ m:m;
    s = (s<10) ? "0"+ s:s;
    
    var time = `${h}:${m}:${s}`
    document.getElementById('myClock').innerText = time
    document.getElementById('myClock').innerHTML = time

}

setInterval(showTime,1000)

let name = prompt('Adınızı giriniz:')


document.getElementById('myName').innerText = name
document.getElementById('myName').innerHTML = name

let info = document.querySelector("#myName");
const userID = prompt("Kullanıcı Adını Giriniz.");
info.innerHTML += `${userID}`

function time(){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let g = d.getDay();



    let mapDay = new Map();
    mapDay.set(0, 'Pazar');
    mapDay.set(1, 'Pazartesi');
    mapDay.set(2, 'Salı');
    mapDay.set(3, 'Çarşamba');
    mapDay.set(4, 'Perşembe');
    mapDay.set(5, 'Cuma');
    mapDay.set(6, 'Cumartesi');
    let dayName = mapDay.get(g);
    
    if(m<10){
        m = '0' + m;
    }
    if(s<10){
        s= '0' + s;
    }
    
    if(h<10){
        h= '0' + h;
    }


    document.querySelector('#myClock').innerHTML =
     `${h}` + ':' + `${m}` + ':' + `${s}` + ' ' + `${dayName}`

}

setInterval(time);
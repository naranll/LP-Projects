let watch = document.getElementById("root");

let min = 0, sec = 0, centi = 0;
setInterval ( function () {
    centi++;
    if(centi==99) {
        centi = 0;
        sec++;
        if(sec == 59) {
            sec = 0;
            min++;
        }
    }
    watch.innerText = `${min < 10 ? ('0' + min) : min} : ${sec < 10 ? ('0' + sec ): sec} : ${centi}`;
},10,)




function updateTime() {
    var dateInfo = new Date(); //Crea un nuevo objeto de data y hora

//    hora

var hr,
    _min = 
    dateInfo.getMinutes() < 10
    ? "0" + dateInfo.getMinutes()
    : dateInfo.getMinutes(),

    sec = 
        dateInfo.getSeconds() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds(), 
    ampm = dateInfo.getHours() >= 12 ? "pm" : "am"; 
     
    if (dateInfo.getHours() == 0) {
        hr = 12;
    }  else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    } else {
        hr = dateInfo.getHours();
    }


//Construyo la concatenacion de horas + min + seg.
var currentTime = hr + ":" + _min + ":" + sec;

//Asegno la variable currentTime a la clase hms en html
document.getElementsByClassName("hms")[0].innerHTML = currentTime;
document.getElementsByClassName("ampm")[0].innerHTML = ampm;


/*Variables Date*/

var dow = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "viernes",
    "Sabado",
],
    month = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "diciembre",
    ],
        day = dateInfo.getDate();

        //Construye la cadena en formato DIA, SEMANA, MES, DIA.
    var currentDate =
    dow[dateInfo.getDay()] + " " + day + " " + month[dateInfo.getMonth()]+ "." ;

        //Muesta la fecha en el elemento HTML con su clase "data"
        document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

// LLama a la función updateTime una vez para mostrar la hora y fecha actual
updateTime();
setInterval(function(){
    updateTime();

}, 1000);
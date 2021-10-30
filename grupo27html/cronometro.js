let decimas=0;
let segundos=0;
let minutos=0;
var identificadorInterval=0;
let historial=[];
function inicio(bandera){
    clearInterval(identificadorInterval);
    identificadorInterval=setInterval(proceso,10);

function proceso(){
     
    if(decimas==99){
        segundos++;
        decimas=0;
    }
    if(segundos==59){
        minutos++;
        segundos=0;
    }
    if(minutos==59){
        minutos=0;
    }
    decimas++;
    document.querySelector("#parrafo").
    innerHTML=minutos+":"+segundos+":"+decimas;
    
   
 
}

}
function pararInterval() {
    clearInterval(identificadorInterval);
}
function BorrarRegistro(){
    pararInterval();
    let registroEvento= minutos+":"+segundos+":"+decimas+"<br>";
    historial.push(registroEvento);
    document.querySelector("#historial").
    innerHTML+=registroEvento
    minutos=0;
    segundos=0;
    decimas=0;
    document.querySelector("#parrafo").innerHTML=minutos+":"+segundos+":"+decimas;
}
 
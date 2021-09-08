let milesimas=0;
let segundos=0;
let minutos=0;

function inicio(bandera){
    let IdentificadorInterval=setinterval(proceso,1000);

    function proceso (){
        console.log("estoy aqui") 
    }
}
function pararInterval(){
    clearInterval(IdentificadorInterval);
    
}
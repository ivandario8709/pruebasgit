let suma=(a,b, ...c)=> {
    let resultado=a+b;
    c.forEach(element => {
        resultado+=element;
    });
    return resultado;
}
   

document.write(suma(1,1,5,6,1,1,1));

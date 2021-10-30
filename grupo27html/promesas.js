let x=10;
console.log("1. proceso iniciado");

/*setTimeout(()=>{
  x=x*3;
  console.log("2. dentro del proceso");
},2000);
console.log("3. proceso finalizado x es ="+x);*/
const promesa= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        x=x*3;
        console.log("2. dentro del proceso");
        resolve(x);
      },2000); 
});
promesa.then(res=>{
    console.log("3. Careculo El resultado es:"+res);
});
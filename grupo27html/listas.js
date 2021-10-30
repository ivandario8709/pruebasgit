let ul=document.createElement('ul');
     document.body.appendChild(ul);

/*let li1=document.createElement('li');
ul.appendChild(li1);
li1.innerHTML="Mango";

let li2=document.createElement('li');
ul.appendChild(li2);
li2.innerHTML="Banano";*/

let frutas=["Banano","Mango","papaya","pera"];
let li=[];
function agregarElementosLi(){
     
     frutas.forEach((element,index) => {
         li[index]=document.createElement('li');
         ul.appendChild(li[index]);
         li[index].innerHTML=element;
     });
}
agregarElementosLi();
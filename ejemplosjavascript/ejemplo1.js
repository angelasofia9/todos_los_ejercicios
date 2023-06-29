/*const usuario = true;
const puedepagar = false;
const transporte = false;

if (usuario || puedepagar) {
  console.log("el suario puede comprar y llevarse el mercado");
} else {
  console.log("el usuario no puede comprar");
}*/

//usandop la negacion de una condicion
/*if (usuario && puedepagar) {
  console.log("el usuario puede comprar");
} 

else if (!usuario) {
  console.log("no eres usuario debes registrarte");

}
 else if (!puedepagar){
  console.log('no tiene fondo')
 }


else if (!transporte) {
  console.log("coja taxi o compre carro");
} 

else {
  console.log("el usuario no puede comprar");
}
*/

//operador OR se usa para que se cumpla una condicion o otra||

/*const efectivo = 1000;
const credito = 5000;
const disponible = efectivo + credito;

totalpagar = 3000;*/

/*if (efectivo> totalpagar){
  console.log('si puedes pagar')
}
else{
  console-log('no puedes pagar')
}

//usando el or

if (efectivo > totalpagar|| credito>totalpagar){
  console.log('si puede pagar');

}

else {
  console.log('no puede pagar')
}

//usando el or con mas condicion de una condicon que se puedda cumpli

if (efectivo > totalpagar || credito > totalpagar || disponible > totalpagar) {
  console.log("si puedes pagar");
} else {
  console.log("no puedespagar");
}
*/

///manejo iterador for loop

/*let i;
for (i = 0; i <= 20; i++) {
  console.log(`numero:${i}`);
}

//encontrar numeros pares e impars

let y;
for (y = 0; y <= 50; y++) {
  console.log(`numero:${y}`);
  if (y % 2 === 0) {
    console.log(`el numero es ${y} par`);
  } else {
    console.log(`en numero es${y}impar`);
  }
}
*/

/*const libros = [
  { nombre: "la iliada", precio: 1500, pasta: "dura" },
  { nombre: "la odisea", precio: 5500, pasta: "dura" },
  { nombre: "principito", precio: 7000, pasta: "plastificada" },
  { nombre: "psicoanalista", precio: 95000, pasta: "dura" },
  { nombre: "cien años", precio: 45000, pasta: "dura" },
];

let p;

for (p=0; p <libros.length; p++){
  console.log(`${libros[p].nombre},$[libros[p].precio]`)
}
*/
/*
const confiapp = [
  { nombrepadre: "martin", menor: "andres" },
  { nombrepadre: "andrea", menor: "valeria" },
  { nombrepadre: "lisbeth", menor: "sofia" },
  { nombrepadre: "nicol", menor: "daniel" },
];

let i;
//arreglo
for(i=0; i<=confiapp.length; i++){
  console.table(confiapp[i]);
}

//destructuring saco los datos que quiero saber
for (i = 0; i < confiapp.length; i++) {
  console.table(`${confiapp[i].nombrepadre},${confiapp[i].menor}`);
}
 // TRABAJO CON BRAK Y CONTINUE
 //brak lo para en el numero escogido
 // continue lo continua hasta llegar al que se colooca en el ibnicio en este caso seria el 10
*/
/*
let i;
for (i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    console.log(`este es el numero${i}`);
    break;
  }
}

for (i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    console.log(`este es el numero ${i}`);
    continue;
  }
}
*/

/*const libros = [
  { nombre: "la iliada", precio: 1500, pasta: "dura" },
  { nombre: "la odisea", precio: 5500, pasta: "dura" },
  { nombre: "principito", precio: 7000, pasta: "plastificada" },
  { nombre: "psicoanalista", precio: 95000, pasta: "dura" },
  { nombre: "cien años", precio: 45000, pasta: "dura" },
];
console.log(libros);

for (i = 0; i < libros.length; i++) {
  if (libros[i].pasta === "plastificada") {
    console.log(`el libro ${libros[i].nombre}, tiene descuento de la tienda`);
  }
  console.log(libros[i].nombre);
}
*/
 //WHILE mientras que

 /*let i=0;
 while(i<10){

  console.log(`el numero ${i}`);//condicion
  i++;//incremento
 }


//lo mismo con pares e impares
*/
/*let x=0;
while (x<=20){
  if (x%2==0)[
    console.log(`el numero ${x}par`)
  ]
}

*/



//do

/*let i=0;
do{
  console.log(`los numeros en orden ${i}`);
  i++
}
while(i++);*/

//foreach  se recorre a trves de un areglo o funcion

/*let pendientes =['tarea', 'comer', 'estudiar'];*/
/*pendientes.forEach(pendientes=> console.log(pendientes));*/


/*let pendientes1 =['tarea','comer','estudiar'];
pendientes1.forEach((pendientes1,indice)=>{
  console.log(`${indice} :%{pendientes1}`);
})
*/


//map hace un arreglo aparte
//for of llama valores

/*for (let otra of pendientes){
  console.log(otra);
}*/ //saca toda de una sola ves//


//for in llama llaves

const libros ={nombre:'laliada', precio: 15000}

for (let biblioteca in libros){
  console.log(biblioteca);
}


for (let[llave,valor] of Object.entries(libros)){
  console.log(llave,valor);
};
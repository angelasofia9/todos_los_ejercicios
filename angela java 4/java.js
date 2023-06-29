/*function ruta( a,b){
    console.log(a,b);

}
ruta(1,'ruta');

function hora(a,b){
    console.log(a,b);
}
hora (10,':', 50, 'am');

function lugar(a,b){
    console.log(a,b);
}
lugar('campanario');

function historial(a,b){
    console.log(a,b);
}
historial(25, 'febrero', 2023);

function menor (a,b){
    console.log(a,b);
}
menor('angela campos');





function salud(nom = 'usuario anonimo', ape= 'sin registrar'){
    console.log(`bienvend@ ${nombre} ${apellido}`);
}
salud('maria');


// como se comunican las funciones//
function menor(){
    console.log('BIENVENICO A CONFIAPP')
}

function ruta(){
    console.log('estas son  tus rutas....')

}
function sesion(){
    menor();
    ruta();
}

sesion();*/


//comunicacion con parametros y argumetos//

/*function bienvenido(){
    console.log('ya estas autenticado');
    iniciosesion('angela');
}

bienvenido();

function iniciosesion(usuario){
    console.log (' estamos verificando su identidad');
    console.log(`bienvenido ${usuario}`);
}*/

//retornar valores de las funciones//

/*function sumar(a,b){
    return a+b;
}
const resultado= sumar(5,8);
console.log(resultado);


//ejemplo fcatura//
 let total=0;

 function agregar(precio){
    return total+=(precio);
 }

 function iva(){
    return total*1.19;
 }

 total=agregar(500);
 total=agregar(500);
 total=agregar(500);

 const totalPagar=iva(total);
 console.log(total);
 console.log(`el valor de la factura es ${totalPagar}`);*/


//METODOS DE PROPIEad//




/*const peliculas ={             //esto es u  objeto
    drama: function (nombre){ // esto es un valor de tipo funcion
        console.log('usted esta en el apartado d epeliculas de drama... ${nombre}');
    },
    infantil: function(){
        console.log("usted esta en el apartado de peliculas infantiles");
    },
    terror: function(){
        console.log("este es el apartado de pelicula de terror");
    },
    comedia: function(){
        console.log("este es el apartado de peliculas de comedia");
    }
}
peliculas.drama();
peliculas.infantil()
peliculas.terror();
peliculas.comedia();*/



/*const acciones ={             
    play: function (){ 
        console.log('usted dio palay');
    },
    stop: function(){
        console.log("usted dio stop");
    },
    pause: function(){
        console.log("pauso");
    },
    adelante: function(nombre){
        console.log(`usted paso a la siguiente cancion que se llama ${nombre}`);
    },  
    reversa: function(anterior){
    console.log(`usted dio reversa a la cnacion${anterior}`);
}
}
acciones.play();
acciones.stop();
acciones.pause();
acciones.adelante("dancin");
acciones.reversa("set fire");
*/


//funcion es flecha
/*const aprender = function(){
    console.log('esto es una funcion normal');
}
 aprender();




 const aprender2 =()=>{
    console.log('ESTO ES UNA FUNCION FLECHA');
 }
 aprender2();



 const aprender3 =()=> 'esto es una funcion flecha ';
 console.log(aprender3());
*/

//ejemplo
/*
 const aprende = function(asignatura){
    console.log(`estamos aprendiedo ${asignatura}`);
 }
 aprende('matematicas');

 const aprende1 = (asignatura)=> `estamos aprendiendo ${asignatura}`;
 console.log(aprende1('ciencias politicass'))


 const aprende2 =asignatura=> `estamos aprendiendo ${asignatura}`;
 console.log(aprende2('ciencias politicas'))
 */



 //estructura de control
//creando un  if

/*const puntaje=1000;
if(puntaje==1000){
    console.log('si es igual a 1000');
}

else{
    console.log('no esto no es igual')
}*/

// saludo
/*function iniciosesion (usuario="sin autenticar"){
    console.log('estamos verificando su identidad ');
    console.log(`bienvenido ${usuario}`);

}
iniciosesion();

function bienvenido (){
    console.log('ya estas autenticado');
    iniciosesion('nicole');
}
bienvenido();*/
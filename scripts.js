console.log('aa')

// ingreso usuario
let nombreUsuario = prompt('ingresa tu nombre')

// mensaje usuario
alert ('Bienvenido ' + nombreUsuario)
alert ('1--Quiere comprar entradas // 2--No quiere comprar entradas')

// ingreso de opcion
let opcion = prompt('Ingrese la opción')

let acceso = Boolean;

//validacion
if (opcion =='1'){
    acceso = true
    console.log(acceso)
}

// variables
const PELICULA = "550";
const FESTIVAL = "1500";
const BOLICHE = "1000";
const TEATRO = "800";

while (acceso==true){
    alert ('Esta es nuestra lista de eventos ' + nombreUsuario)
    let entrada = prompt('1--Festival Upstein // 2--Pelicula Los Simpsons // 3--Boliche Blue // 4--Teatro Madamme tuore')
    let seleccionado = Number;

    if (entrada >'4'){
        seleccionado = false
    }
    else (seleccionado == '1')
        alert ('Usted debe abonar $' + FESTIVAL),
        (seleccionado == '2')
        alert ('Usted debe abonar $' + PELICULA),
        (seleccionado == '3')
        alert ('Usted debe abonar $' + BOLICHE),
        (seleccionado == '4')
        alert ('Usted debe abonar $' + TEATRO);       
}

    
/*if (seleccionado == '1'){
    alert ('Usted debe abonar $' + FESTIVAL);
}
if (seleccionado == '2'){
    alert ('Usted debe abonar $' + PELICULA);
}
if (seleccionado == '3'){
    alert ('Usted debe abonar $' + BOLICHE);
}
if (seleccionado == '4'){
    alert ('Usted debe abonar $' + TEATRO);
}*/


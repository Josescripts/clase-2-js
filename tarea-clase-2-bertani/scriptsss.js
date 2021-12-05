const CTA1 = '105'
const CTA3 = '110'
const CTA6 = '130'
const CTA12 = '150'

function recargo(num1 , operador) {
    
    switch (operador) {
        case '1':
            
            return alert('El resultado es ' + ((num1 / 100) * CTA1))

        case '3':
            return alert('El resultado es ' + ((num1 / 100) * CTA3))

        case '6':
            return alert('El resultado es ' + ((num1 / 100) * CTA6))

        case '12':
            return alert('El resultado es ' + ((num1 / 100) * CTA12))
    
        default:
            return alert('No ingreso un valor valido. verifique')
    }
}
let operador = prompt('Ingrese la cantidad de cuotas (1/3/6/12)');
let primerDigito = +prompt('Ingrese el valor de su pago');


 

recargo(primerDigito, operador);
// matriz

let matriz = ['nome', 10, true, [30, 40, 50]];
//console.log(matriz[3][1])

matriz.forEach(
    function(item, index){
        console.log(item, index);
    }
)

//adiciona no final
matriz.push("Maria")
print();

//remove item no final
matriz.pop();
print()

//remove item no inicio
matriz.shift();
print()

//adiciona item no inicio
matriz.unshift("meu Nome")
print()

// retorna indice
console.log(matriz.indexOf(10));

// remove parte 
matriz.splice(2, 3);
print();

// retorna parte
console.log(matriz.slice(0,2))


function print(){
    //lista
    console.log('------------')    
    console.log(matriz);
}

// objetos
let carro1 = {
    cor: "branco",
    portas: 4,
    motor: {
        potencia: "1.4",
        combustivel: "gasolina"
    },
    quitado: false
}
console.log(carro1.motor.combustivel)

let {cor, motor} = carro1;
console.log(cor, motor.potencia);



// se

let jogador1 = 1;
let jogador2 = 0;
let placar;

if(jogador1>0){
    console.log("Jogador 1 marcou ponto");
}else if (jogador2>0) {
    console.log("Jogador 2 marcou ponto")
}else {
    console.log("ninguém marcou ponto");
}
console.log('-------------');
// ternário
jogador1 > 0 ? console.log("Jog 1 mar pt"):console.log("jog 1 não marc pt");
console.log('-------------');
// switch
let key = 4;
switch (key) {
    case 1:
        console.log("um");
        break;
    case 2:
        console.log("dois");
        break;
    case 3:
        console.log("tres");
        break;
    default:
        console.log("não sei")
        break;
}

let numeros = ['um', 'dois', 'tres', "quatro", "cinco", "seis"]

console.log('------------- for i');

for( let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}

console.log('------------- for in');

for ( let i in numeros){
    console.log(numeros[i])
}

let carro = {
    cor: "branco",
    portas: 4,
    quitado: false
}

console.log('------------- for i in');
for (let i in carro){
    console.log(i);
}

console.log('------------- for of');
for (let i of numeros){
    console.log(i);
}

console.log('------------- forEach');
numeros.forEach(e => {
    console.log(e);
});

console.log('------------- while');
let a=0;
while (a<10){
    console.log(a);
    a++;
}

console.log('------------- do');
let b=10;
do {
     console.log(b);
     b--;
}while (b>0);

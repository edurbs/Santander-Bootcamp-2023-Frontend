function calc(){
    const operations = {
        1: sum,
        2: subtract,
        3: multiply,
        4: divide,
        5: rest,
        6: power
    }
    let option = askOption();
    checkPrompt(option);

    function askOption(){
        let option = [];
        for (let key in operations) {
            console.log(operations[key]);
        }
        option[0] = Number(prompt(`Escola a operação
            1 - soma
            2 - subtração
            3 - multiplicação
            4 - divisão
            5 - resto
            6 - potência`));
        option[1] = Number(prompt("Primeiro número"));
        option[2] = Number(prompt("Segundo número"));
        return option;    
    }

    function checkPrompt(option){

        if(typeof operations[option[0]] === "function"){
            operations[option[0]](option[1], option[2]);
        }else{
            alert("operação inválida");
        }
        newCalc();
    }

    function sum(num1, num2){
        let result = num1 + num2;
        alert("soma de "+num1+ " e "+num2+" é igual a "+result);
    }

    function subtract(num1, num2){
        let result = num1 - num2;
        alert("subtraindo "+num1+ " de "+num2+" é igual a "+result);
    }

    function multiply(num1, num2){
        let result = num1 * num2;
        alert("a multiplicação entre "+num1+ " e "+num2+" é igual a "+result);
    }
        
        function divide(num1, num2){
            let result = num1 / num2;
            alert("dividir "+num1+ " por "+num2+" é igual a "+result);
        }
        
        function rest(num1, num2){
            let result = num1 % num2;
            alert("o resto da divisão de "+num1+ " por "+num2+" é "+result);
        }
        
        function power(num1, num2){
            let result = num1 ** num2;
            alert(num1+ " elevado a potência de "+num2+" é igual a "+result);
        }

        function newCalc(){
            let option = prompt("Deseja fazer novo cálculo?\n1 - Sim\n2 - Não");
            if(option == 1){
                calc();
            }else{
                alert("Até mais!");
            }
        }
    }
calc();
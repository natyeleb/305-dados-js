/*/let idade = Number(prompt("digite sua idade"));

if(idade >=25 && idade <= 60){
    let salario = Number(prompt("digite seu salario"));
        if (salario  >=2000){
            let valor = Number(prompt("digite o valor do emprestimo"))
                if(valor <= 10*salario){
                    console.log("Emprestimo aprovado")
                }else{
                    console.log("Valor não permitido")
                }
            }else{
                console.log("Salário não permitido para empréstimo, precisa ser no minimoo  2.000")
            }
        }else{
            console.log("Idade não permitida para empréstimo")
        }


        CALLENDARIO */



let numero = Number(prompt("digite um numero de 1 a 7 e descubra qual e o dia semanal"))

 if  (numero ==1){
    console.log("O dia 1 é domingo!")
    }else if (numero==2){
    console.log("O dia 2 é segunda-feira!")
    }else if (numero==3){
     console.log("O dia 3 é terça-feira!")
    }else if (numero==4){
     console.log("O dia 4 é quarta-feira!")
    }else if (numero==5){
     console.log("O dia 5 é quinta-feira!")
    }else if (numero==6){
     console.log("O dia 6 é sexta!")
    }
    else  if(numero ==7){
     console.log("O dia 7 é sabado!")
    }
    else{
        console.log("Digitou um numero invalido")
    }
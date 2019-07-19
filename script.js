let idade = Number(prompt("digite sua idade"));

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



 


          
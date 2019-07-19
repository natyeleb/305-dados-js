let idade = Number(prompt("Digite sua idade"));
let aposentado = prompt("voce e aposentado?")
let estudando = prompt("voce e estudadante?")

if(idade >= 60 || aposentado ===  "sim"){
 alert("ENTRADA GRATIS");
} else if (idade >= 0 && idade <= 12 ) {
    alert("ENTRADA:10 REAIS");
}else if (idade >= 13 && idade <= 17 ){
    alert("ENTRADA:15 REAIS");
}else if (idade >= 18 && idade >= 59){
    alert("ENTRADA 35 REAIS")
}else {(idade <=18 && idade >= 59 && estudando === "sim")
    alert("MEIA ENTRADA 17.50 REAIS")
}


          
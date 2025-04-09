function calcular(){
    let valor = document.getElementById("valor").value;
    let numero = document.querySelectorAll(".numero");

    if(isNaN(valor) || valor === ""){
        alert("Valor digitado não é um número válido");
    }else{
        console.log(valor);  
        for(var i = 0; i < numero.length; i++){
            numero[i].innerHTML = valor;
        }
        for(var j = 1; j <= 10; j++){
            document.querySelector(".resultado_" + j).innerHTML = valor * j;
        }
        let tabuada = document.querySelectorAll(".tabuada");
        for(var i = 0; i < tabuada.length; i++){
            tabuada[i].style.display = "block";
        }
    }
}
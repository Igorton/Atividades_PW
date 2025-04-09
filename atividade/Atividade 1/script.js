function calculo(){
    let calculo = document.getElementById("conteudo")
    let numero = document.querySelectorAll(".numero");
    let absoluto = document.getElementById("absoluto");
    let inteiro = document.getElementById("inteiro");
    let proximo = document.getElementById("proximo");
    let raiz_q = document.getElementById("raiz_q");
    let raiz_c = document.getElementById("raiz_c");
    let dois = document.getElementById("dois");
    let tres = document.getElementById("tres");


    var valor = prompt("Digite o valor aqui");
   
    if(valor != null){
        calculo.style.display = "block";
        for(var i = 0; i < numero.length; i++){
            numero[i].innerHTML = valor;
        }
        absoluto.innerHTML = Math.abs(valor);
        inteiro.innerHTML = Math.trunc(valor);
        proximo.innerHTML = Math.round(valor);
        raiz_q.innerHTML = Math.sqrt(valor).toFixed(2);
        raiz_c.innerHTML = Math.cbrt(valor).toFixed(2);
        dois.innerHTML = valor ** 2;
        tres.innerHTML = valor ** 3;
    }
}
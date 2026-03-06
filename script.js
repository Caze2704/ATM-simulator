const botao = document.getElementById("calcular")
const fim = document.getElementById("fim")
// sempre prestar atenção em qual input puxar o ID.
botao.addEventListener("click", clicar)

function clicar(){
    // função de mostrar a resposta e a quantidade de cédulas.
    let numero = document.getElementById("numero")
    const dado = Number(numero.value)
    let valor = Number(numero.value)
    let calcular = document.getElementById("res")
    let paragrafo = document.getElementsByClassName("p")[1]
    let lista = document.getElementById("lista")
    let cedulas = 0
    let ced100 = 0
    let ced50 = 0 
    let ced20 = 0
    let ced10 = 0
    let ced5 = 0
    let ced2 = 0
    let ced1 = 0
        paragrafo.innerHTML = ""
        lista.innerHTML = ""
        numero.focus()

    // previnir números "fantasmas:"

    if(valor <= 0){
        calcular.style.display = 'block'
        paragrafo.innerHTML = '[ERRO] Insira um valor válido!'
    }else{
            // sistema de seleção de cédulas:
    calcular.style.display = 'block'
    
    while(valor >= 100){
        ced100++
        valor = valor - 100
        cedulas++
    }
    while(valor >= 50){
        ced50++
        cedulas++
        valor = valor - 50
    }
    while(valor >= 20){
        ced20++
        cedulas++
        valor = valor - 20
    }
    while(valor >= 10){
        ced10++
        cedulas++
        valor = valor - 10
    }
    while(valor >= 5){
        ced5++
        cedulas++
        valor = valor - 5
    }
    while(valor >= 2){
        ced2++
        cedulas++
        valor = valor - 2
    }
    while(valor >= 1){
        ced1++
        cedulas++
        valor = valor - 1
    }
    paragrafo.innerHTML = `<strong>${dado} R$ </strong><br> São ${cedulas} cédulas ao todo, sendo elas:` 
    }
    if(ced100 > 0){
        if(ced100 > 1){
            lista.innerHTML += `<li> ${ced100} cédulas de 100 R$.</li>`
        }else{
        lista.innerHTML += `<li> ${ced100} cédula de 100 R$. </li>`
      }
    }
    if(ced50 > 0){
        if(ced50 > 1){
            lista.innerHTML += `<li> ${ced50} cédulas de 50 R$.</li>`
        }else{
        lista.innerHTML += `<li> ${ced50} cédula de 50 R$.</li>`
        }
    }
    if(ced20 > 0){
        if(ced20 > 1){
            lista.innerHTML += `<li> ${ced20} cédulas de 20 R$.</li>`
        }else{
            lista.innerHTML += `<li> ${ced20} cédula de 20 R$ </li>`
        }
    }
    if(ced10 > 0){
        if(ced10 > 1){
            lista.innerHTML += `<li> ${ced10} cédulas de 10 R$.</li>`
        }else{
            lista.innerHTML += `<li> ${ced10} cédula de 10 R$. </li>`
        }
    }
    if(ced5 > 0){
        if(ced5 > 1){
            lista.innerHTML += `<li> ${ced5} cédulas de 5 R$.</li>`
        }else{
            lista.innerHTML += `<li> ${ced5} cédula de 5 R$.</li>`
        }    
    }
    if(ced2 > 0){
        if(ced2 > 1){
            lista.innerHTML += `<li> ${ced2} cédulas de 2 R$.</li>`
        }else{
            lista.innerHTML += `<li> ${ced2} cédula de 2 R$</li>`
        }
    }
    if(ced1 > 0){ 
        if(ced1 > 1){
            lista.innerHTML += `<li> ${ced1} cédulas de 1 R$</li>`
        }else{
            lista.innerHTML += `<li> ${ced1} cédula de 1 R$. </li>`
        }
    }
    numero.value = ""
    fim.addEventListener("click", finalizar) 
    function finalizar(){
        calcular.style.display = 'none'
        paragrafo.innerHTML = ""
        lista.innerHTML = ""
    }
}
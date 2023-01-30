let nRandom = Math.floor(Math.random() * 100) + 1
let palp = document.getElementById('txtpalp')
let res = document.getElementById('lista-palp')
let input = document.getElementById('input')
let imgBia = document.getElementById('bia')
let butn = document.createElement('BUTTON')
let listPalp = []

//Adiciona uma function ao botão criado no JS
butn.addEventListener('click', function(){document.location.reload()})

//Verifica se é um numero
function palpites(n){
    if(Number(n)>=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

//Verifica se ta na lista
function inList(n,l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }else{        
        alert('Ja fez esse palpite')
        return false
    }
}

function ganhar(){
    if(Number(palp.value)==nRandom){ 
        butn.innerHTML = 'Jogar novamente'
        imgBia.src = 'assets/image/bia_ganha.png'
        input.innerHTML = `<h3>Parabéns! Você acertou, o número é: <span>${nRandom}</span></h3>`               
        input.appendChild(butn)
    }
    else{
        return false
    }
}
function perder(){
    if(ganhar()==false && listPalp.length == 10){    
        butn.innerHTML = 'Tente novamente'
        imgBia.src = 'assets/image/bia_perde.png'
        input.innerHTML = `<h3>Você não acertou, o número era: <span>${nRandom}</span></h3>`
        input.appendChild(butn)      
    }else{                
        return false
    }
}

//Onde o jogo acontece
function jogo(){
    document.getElementById('enter').innerHTML = ''
    if(inList(palp.value, listPalp) && palpites(palp.value)){ 
        ganhar()           
        res.innerHTML += `${palp.value}` 
        listPalp.push(Number(palp.value))
        if(Number(palp.value) > nRandom){
            alert('Maior do que pensei')
        }
        else if(Number(palp.value) < nRandom){
            alert('Menor do que pensei')
        }         
        perder()  
        if(perder() == false && ganhar() == false){
            res.innerHTML += ' - '
        }
    }
}

//Apertar Enter e apagar o input
function enviar(){
    if(event.keyCode == 13){
        jogo()   
    }else{
        return false
    }      
    palp.value = "" 
}
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

//Onde o jogo acontece
function jogo(){
    if(inList(palp.value, listPalp) && palpites(palp.value)){      
        res.innerHTML += `${palp.value}`
        listPalp.push(Number(palp.value))
        if(listPalp.length == 10){      
            butn.innerHTML = 'Tente novamente'
            imgBia.src = 'assets/image/bia_perde.png'
            input.innerHTML = `<h3>Você não acertou, o número era: <span>${nRandom}</span></h3>`
            input.appendChild(butn)      
            
        }
        else{
            if(Number(palp.value) > nRandom){
                alert('Maior do que pensei')
                res.innerHTML += ' - '
            }
            else if(Number(palp.value) < nRandom){
                alert('Menor do que pensei')
                res.innerHTML += ' - '
            }
            else{
                butn.innerHTML = 'Jogar novamente'
                imgBia.src = 'assets/image/bia_ganha.png'
                input.innerHTML = `<h3>Parabéns! Você acertou, o número é: <span>${nRandom}</span></h3>`               
                input.appendChild(butn)
            }
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
let nRandom = Math.floor(Math.random() * 100) + 1
let palp = document.getElementById('txtpalp')
let res = document.getElementById('lista-palp')
let imgBia = document.getElementById('bia')
let listPalp = []

function palpites(n){
    if(Number(n)>=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function jogo(){
    if(!inList(palp.value, listPalp) && palpites(palp.value)){      
        res.innerHTML += `${palp.value}-`
        listPalp.push(Number(palp.value))
        if(listPalp.length<=10){
            if(Number(palp.value)>nRandom){
                alert('Maior do que pensei')
            }
            else if(Number(palp.value)<nRandom){
                alert('Menor do que pensei')
            }
            else{
                alert('Ganhou')
                return false
            }
        }
        else{
            alert('voce perdeu') 
            listPalp = []
            res.innerHTML = ''
            imgBia.src = 'assets/image/bia_perde.png'
            let nRandom = Math.floor(Math.random() * 100) + 1       
            return false
        }
        palp.value = ""
    }
}
function enviar(){
    if(event.keyCode == 13){
        jogo()        
    }else{
        return false
    }   
}
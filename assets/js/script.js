let nRandom = Math.floor(Math.random() * 100) + 1
let palp = document.getElementById('txtpalp')
let res = document.getElementById('lista-palp')
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
function enviar(){
    if(event.keyCode == 13){
        if(!inList(palp.value, listPalp) && palpites(palp.value)){
            if(Number(palp.value)>nRandom){
                alert('Maior do que pensei')
            }
            else if(Number(palp.value)<nRandom){
                alert('Menor do que pensei')
            }
            else{
                alert('Voce ganhou')
            }
            res.innerHTML += `${palp.value}-`
            listPalp.push(Number(palp.value))
        }else{
            alert('Valor errado')
        }
    }else{
        return false
    }
    
}
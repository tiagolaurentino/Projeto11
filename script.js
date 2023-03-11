
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

const biscoito = document.querySelector('#biscoito')
const voltar = document.querySelector('#voltar')

biscoito.addEventListener('click', mudarTela)
voltar.addEventListener('click', mudarTela)

function mudarTela(event) {

    console.log(event)
   let btnTarget = event.srcElement

   if(btnTarget.id === 'biscoito') {
    box1.classList.add('esconder')
    box2.classList.remove('esconder')
    return
   }

   if(btnTarget.id === 'voltar') {
    box1.classList.remove('esconder')
    box2.classList.add('esconder')
    return
   }
}







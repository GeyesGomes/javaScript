let data = new Date()
let ano = data.getFullYear()

let nasc = document.getElementById('txtano')
let res = window.document.getElementById('res')

function verificar() {
  if (nasc.value > ano) {
    res.innerHTML = `ERRO ${nasc.value} é maior que o ano atual`
  }else {
    let idade = ano - Number(nasc.value)
    let msex = document.getElementsByName('cxsex')[0]
    let fsex = document.getElementsByName('cxsex')[1]
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    let fundo = document.querySelector('.fundo')
    if (msex.checked){
      genero = 'Homem'
      fundo.style.background = 'blue'
      if (idade >= 0 && idade <= 12) {
        img.setAttribute('src', 'public/fotoCriancaH.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'public/fotoJovemH.png')
      } else if (idade < 40) {
        img.setAttribute('src', 'public/fotoAdultoH.png')
      } else {
        img.setAttribute('src', 'public/fotoIdosoH.png')
      }
    } else if (fsex.checked) {
      genero = 'Mulher'
      fundo.style.background = '#9b1694'
      if (idade >= 0 && idade <= 12) {
        img.setAttribute('src', 'public/fotoCriancaM.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'public/fotoJovemM.png')
      } else if (idade < 40) {
        img.setAttribute('src', 'public/fotoAdultoM.png')
      } else {
        img.setAttribute('src', 'public/fotoIdodosoM.png')
      }
    }
    res.innerHTML= `${genero} e nasceu em ${nasc.value} e tem ${idade} anos de idade`
    res.appendChild(img)
  }
}

function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  let min = data.getMinutes()

  if (hora >= 0 && hora < 12){
    img.src = 'public/fotomanha.png'
    msg.innerHTML = `Agora são ${hora}:${min} Horas <br> "Bom Dia"`
    document.body.style.background = '#6c849e'
  }else if (hora >=12 && hora < 18){
    img.src = 'public/fototarde.png'
    msg.innerHTML = `Agora são ${hora}:${min} Horas <br> Boa Tarde`
    document.body.style.background = '#fa8203'
  }else {
    img.src = 'public/fotonoite.png'
    msg.innerHTML = `Agora são ${hora}:${min} Horas <br> Boa Noite`
    document.body.style.background = '#152b38'
  }
}
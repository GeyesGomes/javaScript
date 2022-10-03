let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let pas = document.getElementById('txtp')


function contar() {
  let res = document.getElementById('res')
  let i = Number(inicio.value)
  let f = Number(fim.value)
  let p = Number(pas.value)

  if (i == 0 || f == 0 || p == 0) {
    window.alert('[ERROR:] falta dados')
  } else {

    if (p <= 0) {
      window.alert('Passo inválido, vou considerar passo 1')
      p = 1
    }
    res.innerHTML = 'Contando:<br> '
    if (i < f) {
      for (let c = i; c <= f; c = c + p) {
        res.innerHTML += `&#128073;&#127995; ${c} `
      }
    }else {
      for (let c = i; c >= f; c = c - p) {
        res.innerHTML += `&#128073;&#127995; ${c}`
      }
    }
    res.innerHTML += ` &#129299;<br> Fim sa contagem!`
  }
}
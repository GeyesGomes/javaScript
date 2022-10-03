let tab = document.querySelector('#selDados')
let num = document.querySelector('#txtnum')
let res = document.querySelector('#res')
//let numer = Number(num.value)
let valores = []

function limit(n) {
  if (Number(n) >=1 && Number(n) <=100) {
    return true 
  }else {
    return false
  }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
      return true   
    }else {
      return false 
    }
}



function adicionar() {
  if (limit(num.value) && !inlist(num.value, valores)) {
    valores.push(Number(num.value))
    
    let item = document.createElement('option')
    item.text = `O número ${num.value} foi adicionado` 
    tab.appendChild(item)
    
  }else {
    window.alert('número invalido ou já existente na lista')
  }
  num.value = ''
  num.focus()
  res.innerHTML =''
}



function finalizar() {
  let soma = 0
  if (valores == 0) {
    window.alert('Vazio. Dígite um número à cima para adicionar à lista.')
    
  }else {
    for (let pos in valores) {
      soma += valores[pos]
      
      let ordem = valores.sort()
      let maior = ordem[ordem.length -1]
      let menor = ordem[0]
      let media = soma / valores.length
      

      //Solução do professor
      /*let media = 0
      let maior = valores[0]
      let menor = valores[0]
      if (valores[pos] > maior) {
        maior = valores[pos]
      }
      if (valores[pos] < menor) {
        menor = valores[pos]
      }
      media = soma / valores.length
      */
    res.innerHTML = `<p>Você digitou ${valores.length} números <br></p>`
    res.innerHTML += `<p>A soma dos valores é ${soma} <br></p>`
    res.innerHTML += `<p>O maior número é ${maior} <br></p>`
    res.innerHTML += `<p>E o menor número é ${menor} <br></p>`
    res.innerHTML += `<p>Os números em ordem foram ${ordem} <br></p>`
    res.innerHTML += `<p>E a média dos valores é ${media}</p>`
    }
  }
}

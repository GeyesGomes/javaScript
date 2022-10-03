function tabuada() {
  let num = document.querySelector('#txtnum')
  let tab = document.querySelector('#txttab')

  let n = Number(num.value)
  
  tab.innerHTML = ''
  if (n == 0) {
    alert('Digite um Número Válido')
  }else {

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')

      item.text = `${n} X ${c} = ${n * c}`
      tab.appendChild(item)
    }
  }
}
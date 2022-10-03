let n = [5, 7, 8]
/*
for (let pos in n) {
  
}
*/
teste(n)
function teste(valor) {
  valor.push(5)
  for (let pos in valor) {
    if (valor == valor[pos]) {
      console.log(`erro `)
      n.pop()
    }else {
    
      console.log(`${n[pos]}`)
      
    }
  }
}
//console.log(n)
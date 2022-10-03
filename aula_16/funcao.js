/*
//Par ou Impar

function parimp(n) {
  if (n%2 == 0) {
    return 'impar'
  }else {
    return 'par'
  }

}

let res = parimp(5)
console.log(res)
*/

/*
//Soma de dois números

function soma(n1=0, n2=0) {
  return (
    `${n1 + n2}`
  )
}

let total = soma(2)
console.log(total)
*/

/*
//O dobro de dois números

let v = dobro = (x) => {
  return (
    x*2
  )
}
console.log(v(3))
*/

/*
fatorial = (n) => {
  let fat = 1
  for (let c = n; c > 1; c--) {
    fat = fat * c
  }
  return fat
}
 
console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1
*/


function fat(n) {
  if (n == 1) {
    return 1
  }else {
    return n = n * fat(n-1)
    
  }
    
}

//console.log(fat(6))

//n! = n * (n-1)
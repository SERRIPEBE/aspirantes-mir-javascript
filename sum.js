// escribe la función suma acá
function sum(num) {
    i=1
    su=0
    while(i<=num){
        su=su+i
        i++
    }
    return su
  }
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
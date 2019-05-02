function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([10, 30])) //random entre os dois valores de array
console.log(rand([2]))  //random entre min = 2 e max com valor padrao
console.log(rand([, 10]))   //random deixando min com valor padrao e max = 10
console.log(rand([]))   //random entre valores padroes (min = 0 , max = 1000)
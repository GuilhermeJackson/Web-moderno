console.log('01)', '1' == 1) //== é simbolo de comparação e = é simbolo de atribuição
console.log('02)', '1' === 1)   //=== comparação estritamente igual. Retorna false pq '1' string e != de 1 Number
console.log('03)', '3' != 3)    //!= ele nega a comparação do valor sem comprar o tipo
console.log('04)', '3' !==3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)   //false pq não é exatamente igual. costumar usar esse
console.log('10)', d1 == d2)
console.log('11)', d1.getTime === d2.getTime)   //Comparando os milliseconds da true, pois os dois sãi Number
console.log('12)', undefined == null)   //true
console.log('13)', undefined === null)  //Comparação estritamente entre undefined e null é false
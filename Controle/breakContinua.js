const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break   //faz para de correr no indice 5
    }
    console.log(`break ${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue    // no decorrer dos indices é pulado o indice 5 (1,2,3,4, ,6,7,8,9,10)
    }
    console.log(`continue ${y} = ${nums[y]}`)
}

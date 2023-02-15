const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(x in nums) {
    if (x==3) {
        break
    }
    console.log(`x = ${nums[x]}`)
}
console.log('-----------')

for(x in nums) {
    if (x==2) {
        continue
    }else if (x==4){
        break
    }
    console.log(`x = ${nums[x]}`)
}
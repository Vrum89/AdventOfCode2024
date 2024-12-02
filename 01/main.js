const fs = require('node:fs');


let data = fs.readFileSync('../01/input.txt', 'utf-8');

//data = data.split('\n');
data = data.replace(/\r/g, "").split('\n');

console.log(data)
let tab1 = []
let tab2 = []

for (let i = 0; i < data.length; i++) {
    [tab1[i],tab2[i]] = data[i].split("   ")
}

tab1.sort()
tab2.sort()

let sum = 0

//--- Part Two ---
// tab1.forEach((element, i) => {
//     console.log(element, tab2[i])
//     sum += Math.abs(element - tab2[i])
// })
// //risultato 1882714
// console.log(sum)
//

//--- Part Two ---
tab1.forEach((ele1, i) => {
   sum = sum + ( ele1 * tab2.filter((ele2) =>  ele2 === ele1 ).length )
})

//19437052
console.log(sum)
const fs = require('node:fs');


let data = fs.readFileSync('data.txt', 'utf-8');

//data = data.split('\n');
data = data.replace(/\r/g, "").split('\n');

console.log(data)
let obj = {}
console.log(data.length)
for (let i = 0; i < data.length; i++) {
    //console.log(data[i])
    obj[i] = data[i].split(' ')
}


//console.log(obj)
let count = 0

for (let ele in obj) {

    if (checkArraySafe(obj[3])) {
        //console.log(ele + ' SORTED');
        console.log(ele + 'SAFE' + obj[3]);
        count++;

    } else {
        console.log(ele + 'NOT SAFE ' + obj[3]);
    }

    return
}

console.log(count)

function checkArraySafe(arr) {

    let count = 0;

    let descending = false;
    let ascending = false;
    if (arr[0] < arr[1]) {
        ascending = true

    } else if (arr[0] > arr[1]) {
        descending = true
    } else {
        return false
    }

    if (isSorted(arr).check === 0) {
        return false
    } else if (isSorted(arr).check === -1) {
        descending = true
    } else if (isSorted(arr).check === 1) {
        ascending = true
    }

    for (let i = 1; i < arr.length; i++) {


        let current = arr[i],
            next = arr[i - 1]


        if (Math.abs(current - next) < 1 || Math.abs(current - next) > 3) {
            arr.splice(isSorted(arr).index, 1)
            checkArraySafe(arr)
            return false;

        }

        //console.log(`Math.abs(${current} - ${next}) => ${Math.abs(current - next)} `)
    }
        return true;

}

function isSorted(arr) {
    if (arr.length <= 1) return 0;
    const direction = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) * direction < 0) return { check : 0 , index : 1};
    }

    return { check : Math.sign(direction) };
    //return Math.sign(direction);
}
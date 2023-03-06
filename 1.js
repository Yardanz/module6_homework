let arrN = [0, 1, 2, 3, 4, 5, 'hello', null];


function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let result = countEvenOdd(arrN);

console.log("Even is " + result[0]);
console.log("Odd is " + result[1]);
console.log("Other is " + result[2]);
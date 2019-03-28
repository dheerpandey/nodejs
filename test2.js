let array = [1, 4, 6, 7, 8];

let fun1 = (x) => {
    let index;
     
    let left = 0;
    let right = array.length;
    let mid = Math.floor((left + right) / 2);
     
    while (left != mid || left != mid) {
        mid = Math.floor((left + right) / 2); 

        console.log(`left=${left} right=${right} mid=${mid}`);
        if (array[mid] === x) {
            index = mid;
            break;
        } else if (array[mid] < x) {
            left = mid;
        } else {
            right = mid;
        }
    }

    if (index == undefined) {
        index = -1;
    }
    return index;
}

let result = fun1(1);
console.log(result)
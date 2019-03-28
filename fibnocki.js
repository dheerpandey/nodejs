let GetFibSeries = (num) =>{
    let arr = [];
    let prvVal = 0, newVal =1;
    while (newVal <= num) {
        newVal = prvVal + newVal;
        arr.push(newVal);
        let tmp = newVal;
        newVal = prvVal;
        prvVal = tmp;
    }   
    return arr;
}
console.log(GetFibSeries(100));
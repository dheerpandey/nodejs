let isPrimeNo = (num) =>{
    
    if (num == 2 || num == 3) {
        return true;
    }else if (num < 2) {
        return false;
    }
    let flag = true;
    for (let i = 2; i <= Math.floor(num/2); i++) {
        if ((num%i) == 0) {
            flag = false;
            break;    
        } 
    }
    return flag;
}

let GetPrimeNos = (start, end)=>{
    let arr = [];
    while (start <=end) {
        
        if (isPrimeNo(start)) {
            arr.push(start);
        }
        start++;
    }   
    return arr;
}
console.log(GetPrimeNos(1,100));
let arr = ['a', 'b', 'c', 'a', 'b', 'a', 'c', 'a', 'c', 'd'];

let uniquearr = [...new Set(arr)].map((key) => {

    let filter = arr.filter((value) => {
        return (key === value);
    });
    let obj = {};
    obj[key] = filter.length;
    return obj[0];
});

// console.log(uniquearr);  

//0 1 1 2 3 5 
let cum = 0;


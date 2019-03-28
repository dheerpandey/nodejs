// higher order function.
// core module, share module, feature module
// folder structure.

// for of
// for in

//map foreach
//filter
//reduce
//console.log, info, dir, error;

let arr = ['a', 'b', 'c', 'a', 'b', 'a', 'c', 'a', 'c', 'd'];
let ubj = new Set(arr);
let uniquearr = [...ubj];


// let uniquearr = [...aaaa];
let obj = {};

uniquearr.forEach((item, index) => {
    let counter = 0;

    arr.forEach((i, ind) => {
        if (i == item) {
            counter = counter + 1;
        }
    });
    obj[item] = counter;
});

console.error(obj);

function Employee(name, age, dob) {
    this.name = name;
    this.age = age;
    this.dob = dob;

    this.Print = function () {
        console.log(`Name=>${this.name} Age=> ${this.age}`);
    }
}

let objEmp = new Employee('Ram', 20, '1/1/1990');
//objEmp.Print();




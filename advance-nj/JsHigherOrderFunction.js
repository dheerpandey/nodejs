const Companies = [
    {Name:"Company One",Category :"Finance", Start:"1981", EndDate:"2003"},
    {Name:"Company Two",Category: "Metail", Start:"1985", EndDate:"2004"},
    {Name:"Company Three",Category : "Retail", Start:"1988", EndDate:"2005"},
    {Name:"Company Four",Category :"Paper", Start:"1980", EndDate:"2006"},
    {Name:"Company Five",Category:"Automobile", Start:"1984", EndDate:"2008"},
    {Name:"Company Six",Category:"Technology", Start:"1990", EndDate:"2003"},
    {Name:"Company Seven",Category:"Retail", Start:"1985", EndDate:"2009"},
    {Name:"Company Eight",Category:"Technology", Start:"1991", EndDate:"2007"},
    {Name:"Company Nine",Category:"Finance", Start:"1999", EndDate:"2006"}
];

const agaes=[31,40,38,45,23,43,39,43,30,34,32,37];

let techCompanies = Companies.filter(comp => comp.Category === "Technology"
);
console.log(techCompanies);

//foreach,  
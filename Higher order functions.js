const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ******************** FOR LOOP ********************



// for(let i = 0; i < companies.length; i++){
//   console.table(companies[i])
// }



// ******************** FOREACH ********************





// companies.forEach(company => console.table(company));



// ******************** FILTER ********************




// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i])
//   }
// }

// console.table(canDrink);


// const canDrink = ages.filter(function(age){
//   if(age >= 21) {
//     return true
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.table(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.table(retailCompanies)

// Get 80s comapnies

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);

// console.table(eightiesCompanies);

// get companies that lasted for at least 10 years

// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.table(lastedTenYears);




// ******************** MAP ********************




// create array of company names

// const companyNames = companies.map(company => company.name)

// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

// console.log(companyNames);

// get square root of ages array

// const agesSquare = ages.map(age => Math.sqrt(age))

// console.log(agesSquare)




// ******************** SORT ********************



// sort companies bu start year

// const sortedCompanies = companies.sort(function(company1, company2) {
//   if(company1.start > company2.start){
//     return 1;
//   } else {
//     return -1;
//   }
// })


// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1 ));

// console.table(sortedCompanies);

// sort ages

// const sortAges = ages.sort((a , b) => a - b);

// console.log(sortAges);




// ******************** REDUCE ********************




// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//   ageSum += ages[i]
// }

// let ageSum = ages.reduce((total, age) => total + age, 0)

// console.log(ageSum);


// get total years for all companies

// const totalYears = companies.reduce(function(total, company){
//   return total + (company.end - company.start)
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);


// console.log(totalYears)

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

console.log(combined);
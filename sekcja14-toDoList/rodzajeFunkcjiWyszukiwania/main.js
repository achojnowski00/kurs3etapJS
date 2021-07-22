// ---------
//  filter |
// ---------
const arr = [34, 219, 109, 2934, 12, 10, 29];
const oddNumbers = arr.filter((number) => number % 2 == 1)
const numbersBiggerThan100 = arr.filter((number) => number > 100)



// ------
//  map |
// ------
const double = arr.map(number => number * 2) // map robi działanie na kazdym elemencie listy
const people = arr.map(number => number + ' osob')




// ----------
//  forEach |
// ----------
arr.forEach((number, index) => arr[index] = number * 2)
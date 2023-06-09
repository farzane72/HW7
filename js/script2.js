function sort(array) {
  console.log("merge array is:");
  console.log(array);
  array.sort((a, b) => b - a);
  console.log("sort array is:");
  console.log(array);
}
let array = [];
while (true) {
  let newArray = [];
  let number = prompt("enter number of each array and separete with ,");
  if (number === null || number === "" || number === false) break;
  else newArray = number.split(",");
  console.log("a new array is:");
  console.log(newArray);
  array.push(...newArray);
}

//console.log(array);
sort(array);

//----------------------------------------------------
// for first  way ,use seperate array
//let array1=[5,6,2];
//let array2=[3,4,1];
//let array=[...array1,...array2];

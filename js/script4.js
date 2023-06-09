"use srtict";
//------------------------my second solution-------------
function aclean(array) {

  let map = new Map();
//console.log( set);
for(key of array){
 let newKey=key.toLowerCase().split('').sort().join('');
  map.set(newKey,key);
}
console.log(Array.from(map.values()));
}
//------------------------my first solution-------------
// function aclean(array) {
//   let firstItem = "";
//   let secondItem = "";
//   let flag = 0;
//   // array.filter((item, index, array) => {
//   for (let i = 0; i < array.length; i++) {
//     flag = 0;
//     for (let j = 0; j < array.length; j++) {
//       firstItem = array[i];
//       secondItem = array[j];
//       if (firstItem.length === secondItem.length) {
//         for (let k = 0; k < firstItem.length; k++) {
//           //  console.log(firstItem);
//           //  console.log(secondItem);
//           //  console.log(firstItem[k]);
//           if (secondItem.includes(`${firstItem[k]}`)) {
//             flag++;
//           }
//         }
//         if (flag === firstItem.length) {
//           array.splice(i, 1);
//         }
//       }
//     }
//   }
//   console.log(`Final Array:`);
//   console.log(array);
// }
//---------------------------------------------------------------------------------
//let array = [];
//while (true) {
//let inputArray = prompt("fill your  array",);
//if (inputArray === null || inputArray === "" || inputArray === false) break;
//array.push(inputArray);
//}
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(`your array is:`);
console.log(array);
aclean(array);

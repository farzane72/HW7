
//------------------my seconf solution-------------
function unique(array){
  let set = Array.from(new Set(array));
  console.log(set)
}
//------------------my first solution---------------
// function unique(array){
//     array.filter((item, index, array) => {
//         for (let i = index + 1; i < array.length; i++) {
//           if (array[i] == item) {
//             console.log(` The Repeated element is:${item}`);
      
//             array.splice(i, 1);
//           }
//         }
//       });
//       console.log(`Final Array:`);
//       console.log(array);
      
// }
//------------------------------------------------------------------
let array = [];
while (true) {
  let inputArray = prompt("fill your  array");
  if (inputArray === null || inputArray === "" || inputArray === false) break;
  else array.push(inputArray);
}

console.log(`your array is:`);
console.log(array);
unique(array);

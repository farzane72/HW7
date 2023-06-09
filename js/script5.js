let map= new Map();
map.set("name","john");
let keys= Array.from(map.keys());
//let keys= [...map.keys()]
keys.push("more");
console.log( keys)

///-----------------
//map.keys() gives us likeArray or iterable
//and for use map or other method that are related array me have to 
//conversation to array with Array.from
//the first way i use  Array.from
//and second way [...]
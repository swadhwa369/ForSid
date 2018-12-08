
//Part 1 findObjPropsHasOwn
//create function that accepts and object
//loops over the object - for in loop
//returns the keys as a single string
//if/then:
// if...there is more than one key - separate with ", "
// function findObjPropsHasOwn (obj) {
//     let outputString = '';
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             outputString += key;
//         }
//     }
//     return outputString;
// }
// //Part 2
// function findObjKeys(obj){
//     let outputString = '';
//     for (let key in obj) {
//         if (Object.keys(obj)){
//             outputString += key;
//         }
//     }
//     return outputString;
// }
function findObjPropsHasOwn(obj){
  let returnArr = [];
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      returnArr.push(key);
    }
  }
  return returnArr.join(', ')
}
function findObjKeys(obj){
  return Object.keys(obj).join(', ')
}

/* Pefect solution, great job! */

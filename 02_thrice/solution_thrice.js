
//create a function thrice that accepts a function as an argument
//create a counter
//if the counter is less than 3, run the function
//with in, it should add to the counter, add returned function to returned value
//if the counter is greater than 3, return value
// function thrice (function) {
//     let counter = 0;
//     if (counter < 3) {
//         counter++;
//         function ();
//         }
//     } return thrice;
// }
function thrice (func){
  let i = 0; //add a counter
  return function(){
    if(i >= 3){ //stop the function
      return undefined
    }
    i++ //if function is invoked add to counter
    return func()
  }
}

/* Great job!!
* To condense this code slightly, you could flip your logic so you can eliminate one of the returns.
* Functions automatically return undefined if none is found.
*
*   function thrice(callback) {
*     return () => {
*       if (i < 3) {
*         return func()
*       }
*       i++
*     }
*
*
*
* */

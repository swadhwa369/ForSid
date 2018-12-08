function rightTriangle (num) {
  let triangle= '';
  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      if ((i + j) < num) {
        triangle = triangle + '*';
      } else {
        triangle = triangle + '';
      }
    } triangle = triangle + '\n';
  }
  return triangle.slice(0, triangle.length-1);
}

/* Nice job!! One note, you can eliminate the else statement in the body of your for loop. That else statement isn't doing anything, so it isn't necessary.
It's totally fine to have an if() statement and no else :D
 */

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
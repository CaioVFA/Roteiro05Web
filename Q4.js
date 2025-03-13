const mergeAndSortArrays = (...arrays) => 
    arrays.flat().sort((a, b) => a - b);

console.log(mergeAndSortArrays([3, 1, 2], [6, 4, 5], [9, 7, 8]))
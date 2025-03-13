const checkDuplicatas = (...args) => 
    args.some((val, index) => 
        args.indexOf(val) !== index);

console.log(checkDuplicatas(1, 2, 3, 4, 5, 2)); 
console.log(checkDuplicatas(1, 2, 3, 4, 5)); 

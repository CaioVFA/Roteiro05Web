const mergeObjects = (obj1, obj2, callback) => 
    callback({...obj1, ...obj2});



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
mergeObjects(obj1, obj2, console.log);
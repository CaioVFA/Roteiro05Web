const mergeAndReturn = async (...arrays) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrays.flat().sort((a, b) => a - b));
        }, 5000); 
    });
};

const mergeAndSortArraysAsync = async (...arrays) => {
    try {
        const result = await mergeAndReturn(...arrays);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

mergeAndSortArraysAsync([3, 1], [7, 1, 5]);

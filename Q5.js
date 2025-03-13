const colocarTodasLetras = (texto) => 
    new Promise((resolve, reject) => {
        if (typeof texto !== "string") {
            reject("Erro: O parâmetro não é uma string");
        } else {
            setTimeout(() => resolve(texto.toUpperCase()), 1000);
        }
    });

const inverteTodasLetras = (texto) => 
    new Promise((resolve) =>
        resolve(texto.split('').reverse().join(''))
    );

colocarTodasLetras("hello")
    .then(inverteTodasLetras)
    .then(console.log)
    .catch(console.error);
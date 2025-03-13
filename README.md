01) Desenvolva uma função assíncrona que utilize Promise e setTimeout para simular uma
requisição a um servidor. Use apenas arrow functions.

02) Desenvolva uma função que receba um número indefinido de parâmetros e retorne um valor
booleano informando se existem parâmetros do mesmo tipo e valor. Utilize o operador rest, apenas
arrow functions e callback funcions.

03) Use spread para combinar dois objetos e exibir o resultado. Use apenas arrow functions e
callback funcions.

04) Crie uma função que aceite múltiplos arrays como argumentos e os combine em um único array
ordenado usando spread. Use apenas arrow functions e callback funcions.

05) Escreva duas funções arrow usando a técnica de promises (Javascript ES6). A primeira função,
colocarTodasLetrasEmMaiusculoEm500ms, receberá um único parâmetro e o colocará em
maiúsculo depois de 500 milisegundos. Verifique, dentro da função, se o parâmetro se trata de um
tipo String. Se o parâmetro não for do tipo String, a promise deve rejeitar o parâmetro. A segunda
função, inverteTodasLetras(), realizará uma inversão das letras da String. Atenção: você deverá
utilizar encadeamento de funções.

06) Transforme as funções desenvolvidas na questão 04 para usarem a técnica async/await ao
invés de só usar promises.

07) Desenvolva uma função que recebe uma lista de números inteiros e precisa aplicar as
seguintes operações:
1. Filtrar apenas os números pares.
2. Aplicar uma função de criptografia para cada número par.
3. Retornar o resultado como uma nova lista.
Você deve implementar a função processarNumeros(numeros, callbackFunction) que receberá uma
lista de números como primeiro argumento e uma callback function como segundo argumento.
A função processarNumeros deverá:
● Filtrar os números pares usando uma arrow function.
● Aplicar uma função de criptografia cada número par, usando outra arrow function.
Regras:

1. Não utilize funções tradicionais como function() {...}. Apenas arrow functions.
2. Não utilize laços como for, while, etc. Use métodos como filter, map, etc.

Código para criptografia:

    const crypto = require('crypto');

    // Criptografar
    const criptografarMensagem = (texto, chaveSecreta) => {
        const algorithm = 'aes-256-cbc';
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
        let encrypted = cipher.update(texto, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        // Retorna o IV junto com o texto criptografado
        return `${iv.toString('hex')}:${encrypted}`;
    }
    // Decritografar
    const decritografar = (textoCriptografado, chaveSecreta) => {
        const algorithm = 'aes-256-cbc';
        const [ivHex, encrypted] = textoCriptografado.split(':');
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    // Observação: A chave secreta precisa ter 32 caracteres
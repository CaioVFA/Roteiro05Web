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


const processarNumeros = (numeros, callbackFunction) => {
    const chaveSecreta = crypto.randomBytes(32).toString('hex').slice(0, 32);

    return numeros.filter(num => num % 2 === 0)
                  .map(num => callbackFunction(num.toString(), chaveSecreta));
};

console.log(processarNumeros([1, 2, 3, 4, 5, 6], criptografarMensagem));

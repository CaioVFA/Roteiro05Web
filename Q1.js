const requestServer = () => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            const success = Math.random() > 0.2; // Simula um erro aleatório
            if (success) {
                resolve("Resposta do servidor");
            } else {
                reject("Erro na requisição ao servidor");
            }
        }, 5000));

requestServer()
.then(console.log)
.catch(console.error);
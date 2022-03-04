const chalk = require('chalk'); // precisa ser instalada pq foi desenvolvido por terceiros
const fs = require('fs'); // biblioteca nativa

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não ha arquivo no caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => chalk.green(console.log(texto)))
        .catch((erro) => trataErro(erro))
}
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto1.md');
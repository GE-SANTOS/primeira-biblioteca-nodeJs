import chalk from "chalk"; // precisa ser instalada pq foi desenvolvido por terceiros
import fs from "fs"; // biblioteca nativa


function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^s#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }
    return arrayResultados;
}

//async/await
function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não ha arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

//fiinaly
// async function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     try {
//         const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
//         console.log(chalk.green(texto))
//     } catch (erro) {
//         trataErro(erro);
//     } finally {
//         console.log(chalk.yellow('operação concluída'));
//     }
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => chalk.green(console.log(texto)))
//         .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

// pegaArquivo('./arquivos/texto1.md');

module.exports = pegaArquivo;
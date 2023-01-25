import inquirer from 'inquirer';



async function perguntas() {
let saida = false;
let listaPropriedades = [];
while (saida === false) {
let answers = await inquirer.prompt([
{
"name": "propriedadeCss",
"type": "input",
"message": 'Adicione uma propriedade CSS'
}
]);
if (answers.propriedadeCss == 'sair' || answers.propriedadeCss == 'SAIR') {
saida = true
listaPropriedades.sort();
listaPropriedades.forEach(propriedade => console.log(propriedade));
} else {
listaPropriedades.push(answers.propriedadeCss)
}

}
}
perguntas()

const fs = require('fs');
const sha1 = require('js-sha1');


const cryptoAnswer = () =>{
    let file = fs.readFileSync('answer.json');
    let answer = JSON.parse(file);
    const {decifrado} = answer;


    let resumo_criptografico = sha1(decifrado);

    const json_object = {...answer, resumo_criptografico}
    const json_string = JSON.stringify(json_object);

    fs.writeFile("answer.json", json_string, 'utf8', function (err) {
        if (err) 
            return console.log("Error: ", err);
        console.log("Arquivo answer.json criptografado com sucesso!");
    });
}

cryptoAnswer();
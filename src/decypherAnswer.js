const fs = require('fs');

const decypherLetter = (letter, offset) =>{
    const min = 97 // character a
    const max = 122 // character z

    let unicode = letter.charCodeAt(0);

    if(unicode > max || unicode < min)
        return letter;

    let new_unicode = unicode-offset;

    if(new_unicode < min)
        new_unicode= max - (min-new_unicode) + 1;


    let new_letter = String.fromCharCode(new_unicode);
    
    return new_letter;
}

const decypherAnswer = () =>{
    let decifrado = '';
    let file = fs.readFileSync('answer.json');
    let answer = JSON.parse(file);
    const {cifrado, numero_casas} = answer;

    for(let i= 0; i < cifrado.length; i = i +1){
        decifrado = decifrado.concat(decypherLetter(cifrado[i], numero_casas));
    }

    const json_object = {...answer, decifrado}
    const json_string = JSON.stringify(json_object);

    fs.writeFile("answer.json", json_string, 'utf8', function (err) {
        if (err) 
            return console.log("Error: ", err);
     
        console.log("Arquivo answer.json decifrado com sucesso!");
    });
}

decypherAnswer();
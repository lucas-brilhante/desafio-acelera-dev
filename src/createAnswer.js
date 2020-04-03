const axios = require('axios');
const fs = require('fs');

async function createAnswer() {
    const token = 'SEU_TOKEN';
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`

    const response = await axios.get(url)

    const json_object = response.data;
    const json_string = JSON.stringify(json_object);
    
    fs.writeFile("answer.json", json_string, 'utf8', function (err) {
        if (err) 
            return console.log("Error: ", err);
     
        console.log("Arquivo answer.json criado com sucesso!");
    });

}

createAnswer();
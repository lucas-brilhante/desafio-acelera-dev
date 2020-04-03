const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');


function getFormData() {
    const formData = new FormData();

    formData.append('answer', fs.createReadStream('answer.json'));

    return formData;
}

const postAnswer = async () => {
    const token = 'SEU_TOKEN';
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`;
    const file = await getFormData();

    const response = await axios
        .create({ headers: file.getHeaders() })
        .post(url, file);

    console.log(response);
}

postAnswer();
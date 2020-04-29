
const axios = require('axios')
const sha1 = require('sha1')
const fs = require('fs')

var Form = require('form-data')
const form = Form()

var criptoJC = require('./helpers/cripto-julio-cesar') 

var token = 'a0131bd57c574b281e2044a5d279e588881ded95'
var urlGet = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`
var urlPost = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`


// const resultGet = get(urlGet)
// console.log(resultGet)

const resultPost = post(urlPost)
console.log(resultPost)

async function get(url) {
    try {
        let { data } = await axios.get(url)
        
        // Criptografia de julio cesar
        console.log(data)
        data.decifrado = criptoJC.decifrar(data.cifrado, data.numero_casas)
        
        // Hash sha1
        data.resumo_criptografico = sha1(data.decifrado)

        // Salvando arquivo
        const answer = JSON.stringify(data)
        fs.writeFileSync('./src/answer.json', answer)
        
        console.log(answer)
        return answer

    } catch (error) {
        console.warn('Erro')
        console.warn(error)
    }

}


async function post(url) {            
    try {
        let rawData = fs.createReadStream('./src/answer.json')

        form.append('answer', rawData, {
            filename: 'answer.json'
        })

        const { data } = await axios({
            method: 'post',
            url: url,
            data: form,
            headers: form.getHeaders()
        })
        
        return data


    } catch (error) {
        console.warn('Error')
        console.warn(error)
    }
}
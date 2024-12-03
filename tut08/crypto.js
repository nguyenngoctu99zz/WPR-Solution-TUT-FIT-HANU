const crypto = require('crypto')
const key = 'mypassword123456'
const cipher = crypto.createCipheriv('aes-128-ecb', key, null)
const decipher = crypto.createDecipheriv('aes-128-ecb', key, null)

function encryptText(plainText, key){
    if (key.length !=16){
        console.log("Wrong key")
        return
    }
    let encryptedText = cipher.update(plainText, 'utf-8', 'base64')
    encryptedText += cipher.final('base64')
    console.log(encryptedText)
    return encryptedText
}
function decryptText(encryptedText, key){
    if (key.length !=16){
        console.log("Wrong key")
        return
    }
    let decryptedText = decipher.update(encryptedText, 'base64', 'utf-8')
    decryptedText+=decipher.final('utf-8')
    console.log(decryptedText)
}
let en = encryptText("conga", key)
decryptText(en, key)

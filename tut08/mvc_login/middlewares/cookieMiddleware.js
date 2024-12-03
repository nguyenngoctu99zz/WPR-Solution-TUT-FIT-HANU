const crypto = require('crypto')

const encryptCookie = (cookie) =>{
    const cipher = crypto.createCipheriv('aes-128-ecb', Buffer.from('1234567890abcdef'), null)
    let encrypted = cipher.update(cookie.toString(), 'utf-8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
}
const decryptCookie = (cookie) =>{
    const decipher = crypto.createDecipheriv('aes-128-ecb', Buffer.from('1234567890abcdef'), null)
    let decrypted = decipher.update(cookie.toString(), 'base64', 'utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted
}

module.exports = { encryptCookie, decryptCookie };
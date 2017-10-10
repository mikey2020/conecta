import CryptoJS from 'crypto-js';

const encryptedData = CryptoJS.AES.encrypt('message', 'game');
console.log('encryption', encryptedData.toString());
console.log('decryption', CryptoJS.AES.decrypt(encryptedData, 'game').toString(CryptoJS.enc.Utf8));

import CryptoJS from 'crypto-js';
import shortid from 'shortid';

// const encryptedData = CryptoJS.AES.encrypt('message', 'game');
const key = shortid.generate();

const encrypt = (message) => {
  const encryptedData = CryptoJS.AES.encrypt(message, key);
  return encryptedData.toString();
};

const decrypt = (encryptedMessage) => {
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key)
    .toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
};

// console.log('encryption', encryptedData.toString());
// console.log('decryption', CryptoJS.AES.decrypt(encryptedData, 'game').toString(CryptoJS.enc.Utf8));

export { encrypt, decrypt };

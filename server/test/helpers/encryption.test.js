import should from 'should';
import { encrypt, decrypt } from '../../helpers/encryption';


describe('Encrypt function', () => {
  it('should be able to encrypt message', (done) => {
    const encryptedMessage = encrypt('testing encrypt function');
    should.exist(encryptedMessage);
    done();
  });
});

describe('Decrypt function', () => {
  it('should be able to decrypt message', (done) => {
    const encryptedMessage = encrypt('testing decrypt function');
    const decryptedMessage = decrypt(encryptedMessage);
    should.exist(decryptedMessage);
    decryptedMessage.should.equal('testing decrypt function');
    done();
  });
});

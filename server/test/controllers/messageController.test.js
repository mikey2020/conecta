import should from 'should';
import request from 'supertest';
import app from '../../../app.js';

const user = request.agent(app);
let token;

const exampleUser = {
  username: 'naruto',
  email: 'naruto@konoha.com',
  password: 'hinata',
  passwordConfirmation: 'hinata',
};

const exampleMessage = {
  message: 'hello world'
};

describe('User controller', () => {
  describe('should', () => {
    it('return success message when a user has logged in', (done) => {
      user.post('/api/v1/user/login')
        .send(exampleUser)
        .end((err, res) => {
          res.status.should.equal(200);
          should.not.exist(err);
          res.body.should.have.property('user', res.body.user);
          res.body.user.message.should.equal('naruto signed in');
          token = res.body.user.userToken;
          done();
        });
    });

    it('return success message when a message is sent', (done) => {
      user.post('/api/v1/user/message')
        .send(exampleMessage)
        .end((err, res) => {
          res.status.should.equal(201);
          should.not.exist(err);
          res.body.should.have.property('message', res.body.message);
          done();
        });
    });
  });
});

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

xdescribe('User controller', () => {
  describe('should', () => {
    it('return success message when a user is successfully registered', (done) => {
      user.post('/api/v1/user/register')
        .send(exampleUser)
        .end((err, res) => {
          res.status.should.equal(200);
          should.not.exist(err);
          res.body.should.have.property('user', res.body.user);
          res.body.user.message.should.equal('naruto added successfully');
          token = res.body.user.userToken;
          done();
        });
    });

    it('return success message when a user is successfully logged in', (done) => {
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
  });
});

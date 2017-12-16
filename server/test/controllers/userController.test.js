import should from 'should';
import request from 'supertest';
import app from '../../../app.js';
import User from '../../models/User';

const user = request.agent(app);
let token;

const exampleUser = {
  username: 'naruto',
  email: 'naruto@konoha.com',
  password: 'hinata',
  passwordConfirmation: 'hinata',
};

describe('User controller', () => {
  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  it('should return success message when a user is successfully registered', (done) => {
    user.post('/api/v1/user/register')
      .send(exampleUser)
      .end((err, res) => {
        res.status.should.equal(201);
        should.not.exist(err);
        res.body.should.have.property('userToken', res.body.userToken);
        done();
      });
  });

  it('should return success message when a user is successfully logged in', (done) => {
    user.post('/api/v1/user/login')
      .send(exampleUser)
      .end((err, res) => {
        res.status.should.equal(200);
        should.not.exist(err);
        res.body.should.have.property('userToken', res.body.userToken);
        done();
      });
  });
});

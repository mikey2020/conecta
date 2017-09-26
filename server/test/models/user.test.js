import should from 'should';
import User from '../../models/User';
import app from '../../../app';


describe('User Model:', () => {
  it('should be able to register a new user to the database', (done) => {
    const newUser = new User({
      username: 'sasuke',
      password: 'sasuke'
    });
    newUser.save((error, user) => {
      should.exist(user);
      should.exist(user.username);
      user.username.should.equal('user');
    });
    User.find({}, (err, user) => {
      console.log(user);
    });
    done();
  });
});

import should from 'should';
import mongoose from 'mongoose';
import UserSchema from '../../models/User';
import app from '../../../app';

const User = mongoose.model('User');

const newUser = new User({
  username: 'naruto',
  email: 'naruto@konoha.com',
  password: 'naruto'
});

describe('User Model:', () => {
  beforeEach((done) => {
    newUser.save((err) => {
      if (err) throw err;
    });
    done();
  });

  it('should be able to register a new user to the database', (done) => {
    User.findOne({ username: newUser.username }).then((data) => {
      console.log('data', data);
      should.exist(data);
      data.username.should.equal('sasuk');
      should.exist(data.password);
    });
    done();
  });

  // after((done) => {
  //   User.findByIdAndRemove(newUser._id, (err, user) => {
  //     if (err) throw err;
  //     console.log(user);
  //   });
  //   done();
  // });
});

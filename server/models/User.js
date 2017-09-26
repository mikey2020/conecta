import mongoose from 'mongoose';
import crypto from 'crypto';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'please enter valid email address'],
    unique: true,
    required: true
  },
  picture: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'must have password'],
    minlength: 6
  },

  salt: String,

  lastVisit: {
    type: Date,
    default: new Date()
  },

}, {
  timestamps: { createdAt: 'created_at' }
});

userSchema.methods.hashPassword = (password) => {
  let hashedPassword = crypto.pbkdf2Sync(
    password, this.salt, 1000, 64, 'sha512');
  hashedPassword = hashedPassword.toString('hex');
  console.log(hashedPassword.toString('hex'));
  return hashedPassword;
};

userSchema.methods.authenticate = (pass) => {
  if (this.password === this.hashPassword(pass)) {
    return true;
  }
};

userSchema.pre('save', (next) => {
  console.log('process is running ');
  if (this.password) {
    this.salt = crypto.randomBytes(16);
    this.password = this.hashPassword(this.password);
  }

  next();
});

userSchema.virtual('fullname').get(() => `${this.firstname} ${this.lastname}`);

userSchema.post('save', (next) => {
  console.log('process is done ');
  console.log('user added succesfully');
  next();
});

// mongoose.model('User', UserSchema);

userSchema.set('toJSON', { getters: true, virtuals: true });

const User = mongoose.model('User', userSchema);

export default User;

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
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
  avatar: {
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
  timestamps: {
    createdAt: 'created_at'
  }
});

userSchema.methods.hashPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password);
  return hashedPassword;
};

userSchema.methods.authenticate = (pass) => {
  if (this.password === this.hashPassword(pass)) {
    return true;
  }
};


userSchema.pre('save', function (next) {
  console.log('process is running ');
  if (this.password) {
    this.password = this.hashPassword(this.password);
  }

  next();
});

// userSchema.virtual('fullname').get(() => `${this.firstname} ${this.lastname}`);

userSchema.post('save', (next) => {
  console.log('process is done ');
  console.log('user added succesfully');
});


userSchema.set('toJSON', { getters: true, virtuals: true });

const User = mongoose.model('User', userSchema);

export default User;

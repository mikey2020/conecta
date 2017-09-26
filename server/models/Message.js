import mongoose from 'mongoose';
// import crypto from 'crypto';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const MessageSchema = new Schema({
  content: {
    type: String
  },

  receiver: {
    type: String
  }
});

MessageSchema.methods.encryptMessage = (message) => {
  // encrypt(message);
  console.log(message);
};

MessageSchema.pre('save', (next) => {
  console.log('process is running ');
  console.log(this.content);

  next();
});

MessageSchema.post('save', (next) => {
  console.log('process is done ');
  console.log('message created successfully');
  next();
});

mongoose.model('Message', MessageSchema);

MessageSchema.set('toJSON', { getters: true, virtuals: true });

const Message = mongoose.model('Message', MessageSchema);

export default Message;

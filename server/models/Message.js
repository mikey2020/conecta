import mongoose from 'mongoose';
import { encrypt } from '../helpers/encryption';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true
  },

  receiver: {
    type: String,
    required: true
  }
});

MessageSchema.methods.encryptMessage = (message) => {
  encrypt(message.content);
};

MessageSchema.pre('save', function (next) {
  this.content = encrypt(this.content);
  console.log(this.content);
  next();
});

MessageSchema.post('save', (next) => {
  console.log('process is done ');
  console.log('message created successfully');
});

mongoose.model('Message', MessageSchema);

MessageSchema.set('toJSON', { getters: true, virtuals: true });

const Message = mongoose.model('Message', MessageSchema);

export default Message;

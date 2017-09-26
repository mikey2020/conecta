import should from 'should';
import Message from '../../models/Message';
import app from '../../../app';


describe('Message Model:', () => {
  it('should be able to save a new message in the database', (done) => {
    const newMessage = new Message({
      content: 'hello world'
    });
    console.log(newMessage);
    newMessage.save((err) => {
     if (err) return console.error(err);
      console.log(err);
    });

    Message.find({}, (err, message) => {
      console.log(err);
      console.log(message);
    });
    done();
  });
});

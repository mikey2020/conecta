import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ConnectionSchema = new Schema({
  firstConnectorId: {
    type: Number,
    required: true
  },
  secondConnectorId: {
    type: Number,
    required: true
  }

});

ConnectionSchema.set('toJSON', { getters: true, virtuals: true });

const Connection = mongoose.model('Connection', ConnectionSchema);

export default Connection;

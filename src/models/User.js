import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String }
}, {
  versionKey: false
});

const User = mongoose.model('users', userSchema);

export default User;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome do usuário é obrigatório.']
  }
}, {
  versionKey: false
});

const User = mongoose.model('users', userSchema);

export default User;

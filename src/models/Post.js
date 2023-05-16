import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: [true, 'O título é obrigatório.']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'O ID do usuário é obrigatório.']
  }
});

const Post = mongoose.model('posts', postSchema);

export default Post;

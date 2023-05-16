import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
});

const Post = mongoose.model('posts', postSchema);

export default Post;

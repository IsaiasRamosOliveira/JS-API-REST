import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true }
});

const Post = mongoose.model('posts', postSchema);

export default Post;

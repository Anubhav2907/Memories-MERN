import PostMessage from "../models/postmessage.js";

export const getPosts = async (req, res) => {
  try {
    const postmessage = await PostMessage.find();
    console.log(postmessage);
    res.status(200).json(postmessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};

import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  content: { type: String, required: true },
  tags: [{type: String, default: []}],
  downvotes: [{type: mongoose.Schema.Types.ObjectId, unique: true}],
  upvotes: [{type: mongoose.Schema.Types.ObjectId, unique: true}],
  created_at: { type: mongoose.Schema.Types.Date, default: new Date() },
  modified_at: { type: mongoose.Schema.Types.Date, default: new Date() },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;

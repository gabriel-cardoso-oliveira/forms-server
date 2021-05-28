import * as mongoose from 'mongoose';

export const OptionSchema = new mongoose.Schema({
  description: String,
  response: Boolean,
  question_id: String,
});

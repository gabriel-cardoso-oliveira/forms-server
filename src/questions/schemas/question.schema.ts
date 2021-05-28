import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  description: String,
  forma_id: String,
});

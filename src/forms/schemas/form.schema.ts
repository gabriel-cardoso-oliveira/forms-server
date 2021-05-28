import * as mongoose from 'mongoose';

export const FormSchema = new mongoose.Schema({
  title: String,
  description: String,
});

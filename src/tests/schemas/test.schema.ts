import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
  form_id: String,
  registration: String,
  note: Number,
});

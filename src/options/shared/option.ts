import { Document } from 'mongoose';

export class Option extends Document {
  description: string;
  response: boolean;
  question_id: string;
}

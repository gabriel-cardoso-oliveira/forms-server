import { Document } from 'mongoose';

export class Form extends Document {
  title: string;
  description: string;
}

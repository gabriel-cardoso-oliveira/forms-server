import { Document } from 'mongoose';

export class Test extends Document {
  form_id: string;
  registration: string;
  note: number;
}

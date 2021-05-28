import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './form';

@Injectable()
export class FormService {
  constructor(@InjectModel('Form') private readonly formModel: Model<Form>) {}

  async getAll() {
    return await this.formModel.find().exec();
  }

  async getById(id: string) {
    return await this.formModel.findById(id).exec();
  }

  async create(form: Form) {
    const createdForm = new this.formModel(form);

    return await createdForm.save();
  }

  async update(id: string, form: Form) {
    await this.formModel.updateOne({ _id: id }, form).exec();

    return this.getById(id);
  }
}

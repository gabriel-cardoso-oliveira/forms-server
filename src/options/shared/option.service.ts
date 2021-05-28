import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Option } from './option';

@Injectable()
export class OptionService {
  constructor(
    @InjectModel('Option') private readonly optionModel: Model<Option>,
  ) {}

  async getAll() {
    return await this.optionModel.find().exec();
  }

  async getById(id: string) {
    return await this.optionModel.findById(id).exec();
  }

  async create(option: Option) {
    const createdTest = new this.optionModel(option);

    return await createdTest.save();
  }

  async update(id: string, option: Option) {
    await this.optionModel.updateOne({ _id: id }, option).exec();

    return this.getById(id);
  }
}

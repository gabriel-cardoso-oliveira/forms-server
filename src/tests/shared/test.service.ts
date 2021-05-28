import { Injectable } from '@nestjs/common';
import { Test } from './test';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}

  async getAll() {
    return await this.testModel.find().exec();
  }

  async getById(id: string) {
    return await this.testModel.findById(id).exec();
  }

  async create(test: Test) {
    const createdTest = new this.testModel(test);

    return await createdTest.save();
  }

  async update(id: string, test: Test) {
    await this.testModel.updateOne({ _id: id }, test).exec();

    return this.getById(id);
  }
}

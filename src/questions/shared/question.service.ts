import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './question';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}

  async getAll() {
    return await this.questionModel.find().exec();
  }

  async getById(id: string) {
    return await this.questionModel.findById(id).exec();
  }

  async create(question: Question) {
    const createdQuestion = new this.questionModel(question);

    return await createdQuestion.save();
  }

  async update(id: string, question: Question) {
    await this.questionModel.updateOne({ _id: id }, question).exec();

    return this.getById(id);
  }
}

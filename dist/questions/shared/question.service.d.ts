import { Model } from 'mongoose';
import { Question } from './question';
export declare class QuestionService {
    private readonly questionModel;
    constructor(questionModel: Model<Question>);
    getAll(): Promise<Question[]>;
    getById(id: string): Promise<Question>;
    create(question: Question): Promise<Question>;
    update(id: string, question: Question): Promise<Question>;
}

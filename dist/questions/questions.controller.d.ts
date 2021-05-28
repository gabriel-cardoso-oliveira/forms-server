import { Question } from './shared/question';
import { QuestionService } from './shared/question.service';
export declare class QuestionsController {
    private questionService;
    constructor(questionService: QuestionService);
    getAll(): Promise<Question[]>;
    getById(id: string): Promise<Question>;
    create(question: Question): Promise<Question>;
    update(id: string, question: Question): Promise<Question>;
}

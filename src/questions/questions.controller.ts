import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Question } from './shared/question';
import { QuestionService } from './shared/question.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionService: QuestionService) {}

  @Get()
  async getAll(): Promise<Question[]> {
    return this.questionService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Question> {
    return this.questionService.getById(id);
  }

  @Post()
  async create(@Body() question: Question): Promise<Question> {
    return this.questionService.create(question);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() question: Question,
  ): Promise<Question> {
    return this.questionService.update(id, question);
  }
}

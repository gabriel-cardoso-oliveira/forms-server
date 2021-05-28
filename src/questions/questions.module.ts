import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions.controller';
import { QuestionSchema } from './schemas/question.schema';
import { QuestionService } from './shared/question.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionService],
})
export class QuestionsModule {}

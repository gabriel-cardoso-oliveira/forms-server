import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests/tests.module';

import { MongooseModule } from '@nestjs/mongoose';
import { OptionsModule } from './options/options.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://db_user:xGZyuYYWkprJ17Yu@cluster0.h9bhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    TestsModule,
    OptionsModule,
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

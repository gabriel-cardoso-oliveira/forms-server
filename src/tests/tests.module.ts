import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TestService } from './shared/test.service';
import { TestsController } from './tests.controller';
import { TestSchema } from './schemas/test.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  controllers: [TestsController],
  providers: [TestService],
})
export class TestsModule {}

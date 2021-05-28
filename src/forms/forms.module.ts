import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsController } from './forms.controller';
import { FormSchema } from './schemas/form.schema';
import { FormService } from './shared/form.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Form', schema: FormSchema }])],
  controllers: [FormsController],
  providers: [FormService],
})
export class FormsModule {}

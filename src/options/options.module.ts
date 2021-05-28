import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OptionsController } from './options.controller';
import { OptionService } from './shared/option.service';
import { OptionSchema } from './schemas/option.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Option', schema: OptionSchema }]),
  ],
  controllers: [OptionsController],
  providers: [OptionService],
})
export class OptionsModule {}

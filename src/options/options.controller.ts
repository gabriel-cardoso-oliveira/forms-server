import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Option } from './shared/option';
import { OptionService } from './shared/option.service';

@Controller('options')
export class OptionsController {
  constructor(private optionService: OptionService) {}

  @Get()
  async getAll(): Promise<Option[]> {
    return this.optionService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Option> {
    return this.optionService.getById(id);
  }

  @Post()
  async create(@Body() option: Option): Promise<Option> {
    return this.optionService.create(option);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() option: Option,
  ): Promise<Option> {
    return this.optionService.update(id, option);
  }
}

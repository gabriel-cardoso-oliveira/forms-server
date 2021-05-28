import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Form } from './shared/form';
import { FormService } from './shared/form.service';

@Controller('forms')
export class FormsController {
  constructor(private formService: FormService) {}

  @Get()
  async getAll(): Promise<Form[]> {
    return this.formService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Form> {
    return this.formService.getById(id);
  }

  @Post()
  async create(@Body() form: Form): Promise<Form> {
    return this.formService.create(form);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() form: Form): Promise<Form> {
    return this.formService.update(id, form);
  }
}

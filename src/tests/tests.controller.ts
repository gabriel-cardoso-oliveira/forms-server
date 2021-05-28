import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Test } from './shared/test';
import { TestService } from './shared/test.service';

@Controller('tests')
export class TestsController {
  constructor(private testService: TestService) {}

  @Get()
  async getAll(): Promise<Test[]> {
    return this.testService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Test> {
    return this.testService.getById(id);
  }

  @Post()
  async create(@Body() test: Test): Promise<Test> {
    return this.testService.create(test);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() test: Test): Promise<Test> {
    return this.testService.update(id, test);
  }
}

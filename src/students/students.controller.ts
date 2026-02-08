import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

  constructor(private readonly service: StudentsService) {}

  @Post()
  async create(@Body() body: { fullName: string; email: string }) {
    return this.service.create(body.fullName, body.email);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
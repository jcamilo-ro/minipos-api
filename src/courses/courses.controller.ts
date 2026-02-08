import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly service: CoursesService) {}

  @Post()
  async create(
    @Body() body: { code: string; title: string; departmentId: number },
  ) {
    return this.service.create(
      body.code,
      body.title,
      body.departmentId,
    );
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // NUEVO ENDPOINT MANY-TO-MANY 
  @Post(':id/tags')
  async addTags(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { names: string[] },
  ) {
    return this.service.addTags(id, body.names);
  }
}
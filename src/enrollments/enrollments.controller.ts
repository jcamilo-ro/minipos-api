import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {

  constructor(private readonly service: EnrollmentsService) {}

  @Post()
  async create(@Body() body: { studentId: number; courseId: number }) {
    return this.service.create(body.studentId, body.courseId);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: 'ACTIVE' | 'DROPPED' | 'COMPLETED' },
  ) {
    return this.service.updateStatus(id, body.status);
  }
}
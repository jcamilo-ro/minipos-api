import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnrollmentsService {

  constructor(private prisma: PrismaService) {}

  async create(studentId: number, courseId: number) {
    return this.prisma.enrollment.create({
      data: {
        studentId,
        courseId,
      },
      include: {
        student: true,
        course: true,
      },
    });
  }

  async findAll() {
    return this.prisma.enrollment.findMany({
      include: {
        student: true,
        course: true,
      },
    });
  }

  async updateStatus(id: number, status: 'ACTIVE' | 'DROPPED' | 'COMPLETED') {
    return this.prisma.enrollment.update({
      where: { id },
      data: { status },
    });
  }
}
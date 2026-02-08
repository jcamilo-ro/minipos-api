import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {

  constructor(private prisma: PrismaService) {}

  async create(fullName: string, email: string) {
    return this.prisma.student.create({
      data: {
        fullName,
        email,
      },
    });
  }

  async findAll() {
    return this.prisma.student.findMany({
      include: {
        profile: true,
        enrollments: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        profile: true,
        enrollments: {
          include: {
            course: true,
          },
        },
      },
    });

    if (!student) {
      throw new NotFoundException(`Student ${id} no existe`);
    }

    return student;
  }
}
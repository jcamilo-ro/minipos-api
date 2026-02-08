import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {

  constructor(private prisma: PrismaService) {}

  async create(code: string, title: string, departmentId: number) {
    return this.prisma.course.create({
      data: {
        code,
        title,
        departmentId,
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        department: true,
        tags: true,
      },
    });
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        department: true,
        tags: true,
      },
    });

    if (!course) {
      throw new NotFoundException(`Course ${id} no existe`);
    }

    return course;
  }

  // 👇👇👇 NUEVO MÉTODO PARA MANY-TO-MANY 👇👇👇
  async addTags(courseId: number, tagNames: string[]) {

    // Verifica que el curso exista
    await this.findOne(courseId);

    return this.prisma.course.update({
      where: { id: courseId },
      data: {
        tags: {
          connectOrCreate: tagNames.map(name => ({
            where: { name },
            create: { name },
          })),
        },
      },
      include: {
        department: true,
        tags: true,
      },
    });
  }
}
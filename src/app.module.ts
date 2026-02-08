import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DepartmentsModule } from './departments/departments.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  HealthModule,
  CustomersModule,
  ProductsModule,
  PrismaModule,
  DepartmentsModule,
  CoursesModule,
  StudentsModule,
  EnrollmentsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

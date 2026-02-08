# Minipos API - NestJS

Proyecto de práctica backend desarrollado con NestJS.

## Funcionalidades

- CRUD Customers
- CRUD Products
- DTO con validaciones
- Arquitectura en capas (Controller, Service, DTO, Entity)
- Simulación de base de datos en memoria
- Validación global con ValidationPipe

## Tecnologías utilizadas

- NestJS
- TypeScript
- Postman
- class-validator
- class-transformer

## Endpoints principales

### Health
GET /health

### Customers
POST /customers

### Products
POST /products

## Backend - Clase Prisma

- Conexión a PostgreSQL con Prisma
- CRUD persistente en Customers
- CRUD persistente en Products
- Validación de existencia con NotFoundException
- Pruebas realizadas en Postman

Servidor probado reiniciando y confirmando persistencia de datos.

## Clase 8 – Relaciones avanzadas con Prisma

- Relación 1:N (Department - Course)
- Relación N:M implícita (Course - Tag)
- Relación 1:1 (Student - Profile)
- Relación N:M explícita (Student - Course vía Enrollment)
- Implementación de enum EnrollmentStatus
- Persistencia real con PostgreSQL
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    try {
      this.$connect();
      console.log('Database connected');
    } catch (error) {
      console.error(error);
    }
  }
}

import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/infrastructure/database';

import type { Platform } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Platform[]> {
    return this.prisma.platform.findMany();
  }
}

import { Injectable } from '@nestjs/common';

import { UserRepository } from '@/user/repository';

import type { Platform } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<Platform[]> {
    return this.userRepository.findAll();
  }
}

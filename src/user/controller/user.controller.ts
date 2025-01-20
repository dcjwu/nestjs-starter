import { Controller, Get } from '@nestjs/common';

import { UserService } from '@/user/service';

import type { Platform } from '@prisma/client';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<Platform[]> {
    return this.userService.findAll();
  }
}

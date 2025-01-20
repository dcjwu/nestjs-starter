import { Module } from '@nestjs/common';

import { PrismaService } from '@/infrastructure/database';
import { UserController } from '@/user/controller';
import { UserRepository } from '@/user/repository';
import { UserService } from '@/user/service';

@Module({
  providers: [PrismaService, UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}

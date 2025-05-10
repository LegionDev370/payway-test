import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import SmsProvider from 'src/providers/sms.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, SmsProvider],
})
export class UsersModule {}

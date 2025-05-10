import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import SmsProvider from 'src/providers/sms.provider';
import RedisService from '../database/redis.service';

@Injectable()
export class UsersService {
  constructor(
    private smsProvider: SmsProvider,
    private redisService: RedisService,
  ) {}
  // async create(createUserDto: CreateUserDto) {
  //   const user = await this.prisma.user.create({ data: createUserDto });
  //   await this.smsProvider.getToken();
  //   const otpPassword = this.redisService.generateOtp();
  //   await this.smsProvider.sendSms({
  //     message: `StudyHub ilovasiga kirish kodi:${otpPassword}`,
  //     mobile_phone: '+998900400453',
  //   });
  //   return user;
  // }
}

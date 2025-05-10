import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { generate } from 'otp-generator';
@Injectable()
class RedisService {
  redis: Redis;
  constructor() {
    this.redis = new Redis({
      port: parseInt(process.env.REDIS_PORT as string),
      host: process.env.REDIS_HOST,
    });
  }
  generateOtp() {
    const code = generate(4, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    return code;
  }
}
export default RedisService;

import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ISendSmsMessage } from 'src/common/types/send.sms.message.type';
class SmsProvider {
  constructor(private configService: ConfigService) {}
  GET_TOKEN: string = 'https://notify.eskiz.uz/api/auth/login';
  SEND_SMS: string = 'https://notify.eskiz.uz/api/message/sms/send';
  token: string;
  email: string = process.env.ESKIZ_USER || '';
  password: string = process.env.ESKIZ_PASSWORD || '';
  async getToken() {
    try {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      const data = await axios.post(this.GET_TOKEN, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const {
        data: {
          data: { token },
        },
      } = data;
      this.token = token;
    } catch (error) {
      throw new HttpException('INTERNAL SERVER ERROR', 500);
    }
  }
  async sendSms(message: ISendSmsMessage) {
    try {
      const formData = new FormData();
      formData.append('mobile_phone', message.mobile_phone);
      formData.append('message', message.message);
      formData.append('from', '4546');
      const data = await axios.post(this.SEND_SMS, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.token}`,
        },
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
export default SmsProvider;

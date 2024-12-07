import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async submitForm(formData: any): Promise<any> {  // primiți datele aici ca argument
    console.log('Mesaj de pe server');
    console.log(formData);
    return { message: '!!!Form submitted successfully!!!' };
  }
}

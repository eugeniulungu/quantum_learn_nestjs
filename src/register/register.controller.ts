import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(@Body() formData: any): Promise<any> {  // adăugăm @Body() aici pentru a primi datele din POST
    return this.registerService.submitForm(formData);  // trimitem datele la serviciu
  }
}

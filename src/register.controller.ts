import { Controller, Post, Body } from '@nestjs/common'

@Controller('register')
export class RegisterController {
  @Post()
  async submitForm(@Body() formData: any) {
    console.log('Mesaj de pe server')
    console.log(formData)
    return { message: 'Form submitted successfully!' }
  }
}

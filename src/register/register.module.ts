import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

@Module({
  imports: [],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}

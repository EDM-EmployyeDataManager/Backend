// auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: any) {
    const { username, password } = credentials;
    const employee = await this.authService.validateEmployee(username, password);
    const admin = await this.authService.validateAdmin(username, password);
    return this.authService.login(employee, admin);
  }
}

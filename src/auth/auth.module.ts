// auth.module.ts

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeModule } from '../employee/employee.module';
import { AdminModule } from '../admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    EmployeeModule,
    AdminModule,
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Adjust the token expiration as needed
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

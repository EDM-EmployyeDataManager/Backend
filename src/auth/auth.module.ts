// auth.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdminModule } from '../admin/admin.module';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [
    MongooseModule,
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Adjust the token expiration as needed
    }),
    AdminModule,
    EmployeeModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

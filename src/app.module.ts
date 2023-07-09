// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    AdminModule,
    EmployeeModule,
  ],
})
export class AppModule {}

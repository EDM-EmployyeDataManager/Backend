// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://firecreator7717:6571370@cluster0.9h1snxc.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule,
    AdminModule,
    EmployeeModule,
  ],
})
export class AppModule {}

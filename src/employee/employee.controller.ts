// employee.controller.ts

import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmployeeService } from './employee.service';

@Controller('employee')
@UseGuards(JwtAuthGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // Routes that require authentication can be protected using the JwtAuthGuard

  @Get('data')
  async getEmployeeData() {
    // Implement fetching employee data logic
  }

  @Put('qualification')
  async updateQualification(@Body() qualificationData: any) {
    // Implement updating qualification logic
  }

  // Implement other employee endpoints
}

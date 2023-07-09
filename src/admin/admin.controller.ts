// admin.controller.ts

import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { Roles } from './roles.decorator';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('data')
  @Roles('admin')
  async getEmployeeData() {
    try {
      const employees = await this.adminService.getEmployees();
      return { success: true, data: employees };
    } catch (error) {
      return { success: false, message: 'Failed to fetch employee data' };
    }
  }

  @Post('create-employee')
  @Roles('admin')
  async createEmployee(@Body() employeeData: any) {
    try {
      const employee = await this.adminService.createEmployee(employeeData);
      return { success: true, data: employee };
    } catch (error) {
      return { success: false, message: 'Failed to create employee' };
    }
  }

  @Post('terminate-employee')
  @Roles('admin')
  async terminateEmployee(@Body() employeeId: string) {
    try {
      const terminatedEmployee = await this.adminService.terminateEmployee(employeeId);
      return { success: true, data: terminatedEmployee };
    } catch (error) {
      return { success: false, message: 'Failed to terminate employee' };
    }
  }

  @Post('promote-employee')
  @Roles('admin')
  async promoteEmployee(@Body() employeeId: string) {
    try {
      const promotedEmployee = await this.adminService.promoteEmployee(employeeId);
      return { success: true, data: promotedEmployee };
    } catch (error) {
      return { success: false, message: 'Failed to promote employee' };
    }
  }

  @Post('demote-employee')
  @Roles('admin')
  async demoteEmployee(@Body() employeeId: string) {
    try {
      const demotedEmployee = await this.adminService.demoteEmployee(employeeId);
      return { success: true, data: demotedEmployee };
    } catch (error) {
      return { success: false, message: 'Failed to demote employee' };
    }
  }

  @Post('create-admin')
  @Roles('admin')
  async createAdmin(@Body() adminData: any) {
    try {
      const admin = await this.adminService.createAdmin(adminData);
      return { success: true, data: admin };
    } catch (error) {
      return { success: false, message: 'Failed to create admin' };
    }
  }

  @Post('update-admin')
  @Roles('admin')
  async updateAdmin(@Body() adminData: any) {
    try {
      const updatedAdmin = await this.adminService.updateAdmin(adminData);
      return { success: true, data: updatedAdmin };
    } catch (error) {
      return { success: false, message: 'Failed to update admin' };
    }
  }

  // Implement other admin endpoints
}

// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  async validateEmployee(username: string, password: string): Promise<any> {
    const employee = await this.employeeService.findByUsername(username);
    if (employee && employee.password === password) {
      const { password, ...result } = employee;
      return result;
    }
    return null;
  }

  async signup(employeeData: any): Promise<any> {
    const { username, password } = employeeData;
    const employee = await this.employeeService.createEmployee(username, password);
    const { password: _, ...result } = employee;
    return result;
  }


  async validateAdmin(username: string, password: string): Promise<any> {
    const admin = await this.adminService.findByUsername(username);
    if (admin && admin.password === password) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  async login(employee: any | null, admin: any | null): Promise<any> {
    if (employee) {
      const payload = { username: employee.username, sub: employee._id };
      return {
        access_token: this.jwtService.sign(payload),
        role: 'employee',
      };
    } else if (admin) {
      const payload = { username: admin.username, sub: admin._id };
      return {
        access_token: this.jwtService.sign(payload),
        role: 'admin',
      };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}

// admin.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.interface';
import { Employee } from '../employee/employee.interface';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async createAdmin(adminData: any): Promise<Admin> {
    const admin = new this.adminModel(adminData);
    return await admin.save();
  }
  async findByUsername(username: string): Promise<Admin> {
    return await this.adminModel.findOne({ username }).exec();
  }

  async getEmployees(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  async createEmployee(employeeData: any): Promise<Employee> {
    const employee = new this.employeeModel(employeeData);
    return await employee.save();
  }

  async terminateEmployee(employeeId: string): Promise<Employee | null> {
    const employee = await this.employeeModel.findByIdAndRemove(employeeId).exec();
    return employee;
  }

  async promoteEmployee(employeeId: string): Promise<Employee | null> {
    const employee = await this.employeeModel.findByIdAndUpdate(
      employeeId,
      { $set: { role: 'admin' } },
      { new: true }
    ).exec();
    return employee;
  }

  async demoteEmployee(employeeId: string): Promise<Employee | null> {
    const employee = await this.employeeModel.findByIdAndUpdate(
      employeeId,
      { $set: { role: 'employee' } },
      { new: true }
    ).exec();
    return employee;
  }

  async updateAdmin(adminData: any): Promise<Admin | null> {
    const { _id, ...data } = adminData;
    const admin = await this.adminModel.findByIdAndUpdate(_id, data, { new: true }).exec();
    return admin;
  }
}

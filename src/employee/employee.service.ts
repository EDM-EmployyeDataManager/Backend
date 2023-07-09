// employee.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async createEmployee(username: string, password: string): Promise<Employee> {
    const employee = new this.employeeModel({ username, password });
    return await employee.save();
  }

  async findByUsername(username: string): Promise<Employee> {
    return await this.employeeModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<Employee> {
    return await this.employeeModel.findById(id).exec();
  }

  // Add other methods like updating qualification, applying for leave, etc.
}

// employee.schema.ts

import { Schema, Document } from 'mongoose';

export interface Employee extends Document {
  username: string;
  password: string;
  qualification: string;
}

export const EmployeeSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  qualification: { type: String, required: true },
});


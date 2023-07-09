// admin.schema.ts

import { Schema, Document } from 'mongoose';

export interface Admin extends Document {
  username: string;
  password: string;
}

export const AdminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

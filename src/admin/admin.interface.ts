// admin.interface.ts

import { Document } from 'mongoose';

export interface Admin extends Document {
  _id: string;
  username: string;
  password: string;
  // Add other properties as needed
}

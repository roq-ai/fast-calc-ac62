import { FileInterface } from 'interfaces/file';
import { CalculatorInterface } from 'interfaces/calculator';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LockerInterface {
  id?: string;
  calculator_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  calculator?: CalculatorInterface;
  user?: UserInterface;
  _count?: {
    file?: number;
  };
}

export interface LockerGetQueryInterface extends GetQueryInterface {
  id?: string;
  calculator_id?: string;
  user_id?: string;
}

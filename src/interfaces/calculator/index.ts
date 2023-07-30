import { LockerInterface } from 'interfaces/locker';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CalculatorInterface {
  id?: string;
  password: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  locker?: LockerInterface[];
  user?: UserInterface;
  _count?: {
    locker?: number;
  };
}

export interface CalculatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  password?: string;
  user_id?: string;
}

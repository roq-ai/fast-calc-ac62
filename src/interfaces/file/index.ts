import { LockerInterface } from 'interfaces/locker';
import { GetQueryInterface } from 'interfaces';

export interface FileInterface {
  id?: string;
  name: string;
  locker_id?: string;
  created_at?: any;
  updated_at?: any;

  locker?: LockerInterface;
  _count?: {};
}

export interface FileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  locker_id?: string;
}

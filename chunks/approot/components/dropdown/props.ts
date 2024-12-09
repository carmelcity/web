import { Dispatch, SetStateAction } from 'react';

export type DropdownProps = {
  items: Array<any>;
  defaultText: string;
  preselectedItem?: string;
  onSelect: Dispatch<SetStateAction<string>>;
};

export type ActionDropdownProps = {
  items: Array<any>;
};

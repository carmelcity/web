import { Dispatch, SetStateAction } from 'react';

export type CreateStoryProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

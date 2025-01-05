import React from 'react';
import { FC } from 'react';
import * as Icons from '@heroicons/react/24/solid';

/**
 *
 * @param props
 * @returns
 */
export const DynamicIcon: FC<{ name: string; width: number; height: number; className?: string }> = props => {
  const { ...icons } = Icons;
  const MainIcon = (icons as any)[props.name];

  return <MainIcon {...props} />;
};
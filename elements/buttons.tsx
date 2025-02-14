import React, { useState } from 'react'
import { DynamicIcon, readex_pro, showSuccessToast } from '~/elements';

export const ActionButton = ({ highlight, title, onPress, icon }: any)  => {
  return <div className="lg:ml-auto text-start flex flex-col mt-4">
  <div className="mt-auto">
    <button
      className={`border border-cyan ${highlight ? 'bg-primary/25' : 'bg-transparent'} hover:bg-dark-green-secondary py-2 px-4 w-48 text-cyan font-bold`}
      onClick={onPress}>
        <div className='text-nowrap text-primary flex flex-row gap-2 justify-center'>
        { icon && <DynamicIcon name={icon} width={20} height={20} /> }
        { title } 
        </div>
    </button>
  </div>
</div>
} 

export const SoftActionButton = ({ title, onPress }: any)  => {
  return <div className="lg:ml-auto text-right flex flex-col">
  <div className="mt-auto">
    <button
      className="border border-primary/20 bg-primary/10 hover:bg-dark-green-secondary py-2 px-4 font-bold w-full"
      onClick={onPress}>
        <div className='text-nowrap text-gray-400'>
        { title } 
        </div>
    </button>
  </div>
</div>
} 
  
export const CommentButton = ({ title, onPress, icon }: any)  => {
    return <div className="flex flex-col">
      <div className="mt-auto mb-1 ">
      <button
        className="bg-transparent flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-primary font-bold"
        onClick={onPress}>
          <DynamicIcon name={icon} width={20} height={20} />
          { title } 
      </button>
    </div>
  </div>
}

export const AuthButton = ({ title, onPress, icon }: any)  => {
  return <div className="flex flex-col ml-2 lg:ml-0">
    <div className="mt-auto mb-1 ">
    <button
      className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-gray-900 hover:text-primary font-bold border border-primary w-full justify-center text-nowrap"
      onClick={onPress}>
        <DynamicIcon name={icon} width={20} height={20} />
        { title } 
    </button>
  </div>
</div>
} 

  
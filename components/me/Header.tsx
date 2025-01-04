import { readex_pro, DynamicIcon } from '~/elements';

export const Header = ({ text, icon }: any) => {
  return <div className={`${readex_pro.className} text-left flex flex-row`}>
    <DynamicIcon name={icon} width={32} height={32} className='text-primary mr-3'/>
    <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl'>
        { text }
    </span>
  </div>
}
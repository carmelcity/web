import { Readex_Pro } from 'next/font/google';
import DynamicIcon from '~/components/icons/Dynamic'

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export const Header = ({ text, icon }: any) => {
  return <div className={`${readex_pro.className} text-left flex flex-row`}>
    <DynamicIcon name={icon} width={32} height={32} className='text-primary mr-3'/>
    <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl'>
        { text }
    </span>
  </div>
}
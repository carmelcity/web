import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation'
import { Readex_Pro } from 'next/font/google';
import Title from './Title';
const readex_pro = Readex_Pro({ subsets: ['latin'] });

export default ({ title, onBack } : any) => {
    const router = useRouter()

    const goBack = () => {
        onBack ? onBack() : router.back()
    }

    return (<div className="flex w-full">
        <div className="">
            <div className='flex flex-1 flex flex-row justify-start z-50 border-primary/0 border mb-2'>
            <button onClick={goBack} className={`${readex_pro.className} font-normal z-10 btn text-grey hover:bg-primary/5 hover:text-white bg-black/0 pointer-cursor`}>
                <ChevronLeftIcon className='font-bold w-8 h-8'/>
            </button>
            </div>
        </div>
        <div className="flex-1 ml-4 mt-2">
            <span className='text-2xl pt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green'> { decodeURI(title) } </span>
        </div>
    </div>
    )
}
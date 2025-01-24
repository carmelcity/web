import { Container } from './Container'
import { useEffect } from 'react'
import Image from 'next/image'

export const CardScreen = ({ auth }: any) => {
  const refreshData = () => {
    (async () => {
      await auth.getFreshProfile()
    })()
  }

  useEffect(() => {
    refreshData()
  }, [])

  return <Container name="Card" icon="IdentificationIcon">
      {/* <div className={`flex flex-col justify-start relative w-full mb-20`}>
      <div className='flex flex-col w-full items-center bg-black/20 border-t border-primary/10 lg:py-20 py-0 shadow-xl'>
              <Image
                    src={auth.profile.cardImage}
                    alt="card"
                    width={500}
                    height={1200}
                    className={`object-fit border border-primary/10`}
              />
        </div>
    </div>      */}
  </Container>
}
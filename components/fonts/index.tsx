import localFont from 'next/font/local'
 

export const orbitron = localFont({ 
  src: [
      {
        path: './orbitron/Orbitron-Regular.ttf',
        weight: '400',
        style: 'normal'
      },
      {
        path: './orbitron/Orbitron-Bold.ttf',
        weight: '700',
        style: 'bold'
      }
    ]
})

export const readex_pro = localFont({ 
    src: [
        {
            path: './readexpro/ReadexPro-ExtraLight.ttf',
            weight: '300',
            style: 'extralight'
        },
        {
          path: './readexpro/ReadexPro-Regular.ttf',
          weight: '400',
          style: 'normal'
        },
        {
          path: './readexpro/ReadexPro-Bold.ttf',
          weight: '700',
          style: 'bold'
        }
      ]
 })

 export const readexPro = readex_pro
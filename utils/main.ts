export const getOrigin = () => {
   return  typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
}

export const fileUrl = (file: string) => {
  return `${process.env['NEXT_PUBLIC_FILES_URL']}/${file}`
}
    

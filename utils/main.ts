export const getOrigin = () => {
   return  typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
}

export const getImageUrl = (username: string, kind: string = "avatar", section: string = "accounts") => {
  if (!username) return ''
  
  const url = `${process.env['NEXT_PUBLIC_GATEWAY_URL']}/carmel/${kind}/${section}/${username}`
  return url
}    

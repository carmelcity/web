import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const getCompositeImageUrl = (collection: string, id: number) => {
  const url = `${process.env['NEXT_PUBLIC_GATEWAY_URL']}/carmel/composite/${collection}/${id}`
  console.log(url)
  return url
}   
export const isValidAddress = (address: string) => {
  // Ethereum or Polygon address pattern (40 hexadecimal characters after '0x')
  const addressPattern = /^0x[0-9a-fA-F]{40}$/;
  return addressPattern.test(address);
};

export const formatNumberWithSeparator = (number: number, separator: string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const isClient = () => typeof window !== 'undefined';

export const formatAddress = (address: string, characters: number) => {
  const prefix = address.substring(0, characters);
  const suffix = address.substring(address.length - characters);
  const dots = '...';
  return `${prefix}${dots}${suffix}`;
};

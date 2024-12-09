import debug from 'debug';

const LOG = debug('carmel:functions/network');

export const onReceive = async (data: any) => {
  LOG(`received:`, data);
  return { status: 'ok' };
};

import debug from 'debug';

const LOG = debug('carmel:functions/system');

export const onReceive = async (data: any) => {
  LOG(`received:`, data);
  return { status: 'ok' };
};

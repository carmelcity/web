import { LG_WIDTH, MD_WIDTH, XL_WIDTH } from './constants';

export const getShowableImages = (width: number): number => {
  if (width <= MD_WIDTH) return 0;
  if (width <= LG_WIDTH) return 2;
  if (width <= XL_WIDTH) return 3;
  return 5;
};

export const multiplyArray = (array: any[], counter: number) => {
  const newArray = [];
  while (counter--) {
    newArray.push(...array);
  }
  return newArray;
};

export const getSplicedArrayToMatrix = (source: any[], rowsLength: number[]): any[][] => {
  const rows = [];
  let rowsIndex = 0;
  while (source.length) {
    rows.push(source.splice(0, rowsLength[rowsIndex]));
    rowsIndex = rowsIndex + 1 === rowsLength.length ? 0 : rowsIndex + 1;
  }
  return rows;
};

export const handleDownloadClick = (filePath: string, fileName: string) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = filePath;
  downloadLink.download = `${fileName}.pdf`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

import React from 'react';
import Featured from '.';
import { useCarmelCreators } from '~/sdk/hooks/creators';
import HexagonalAvatar from '~/components/hexagonal-avatar/HexagonalAvatar';
import useWindowSize from '~/sdk/hooks/windowSize';
import { LG_WIDTH } from '~/utils/constants';
import { getSplicedArrayToMatrix } from '~/utils/helper';

interface Creator {
  photo: string;
  name: string;
}

const Creator = ({ photo, name }: any) => {
  return (
    <div className="py-4 flex flex-col gap-2 items-center border-[1px] border-[#00FFFF33] bg-[#00BCD41F] p-2 hover:bg-[#00BCD43D] hover:border-primary hover:cursor-pointer">
      <HexagonalAvatar src={photo} />
      <div>{name}</div>
    </div>
  );
};

const Creators = () => {
  const { data: creators } = useCarmelCreators();
  const { width } = useWindowSize();

  const getRow = (creators: Creator[], rowIndex: number) => (
    <div className="flex gap-2 justify-center items-center w-full flex-wrap" key={rowIndex}>
      {creators.map((creator: any, index: number) => (
        <Creator {...creator} key={`${rowIndex}-${index}`} isNotTag />
      ))}
    </div>
  );

  const getCreators = () =>
    creators
      ? (width && width <= LG_WIDTH ? [creators] : getSplicedArrayToMatrix([...(creators ?? [])], [5, 6])).map(
          (row: any, index: number) => getRow(row, index),
        )
      : [];

  return (
    <Featured
      title="FEATURED CREATORS"
      description="Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage it. The Carmel Way.">
      <div className="flex flex-col gap-2 justify-center items-center flex-wrap">{getCreators()}</div>
    </Featured>
  );
};

export default Creators;

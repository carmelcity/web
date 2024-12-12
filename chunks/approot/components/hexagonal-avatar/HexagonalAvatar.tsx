import Image from 'next/image';
import placeholder from '../../images/userPlaceholder.svg';

const HexagonalAvatar = (props: any) => {
  return (
    <div className="flex">
      <div
        className="w-10 h-10 z-10 mt-0.5 bg-dark-green-secondary"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}>
        <Image
          src={props.src || placeholder}
          alt={props.alt ?? ''}
          width={10}
          height={10}
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="w-11 h-11 -ml-0.5 absolute bg-cyan"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}></div>
    </div>
  );
};

export default HexagonalAvatar;

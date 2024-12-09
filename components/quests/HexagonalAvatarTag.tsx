import HexagonalAvatar from '../hexagonal-avatar/HexagonalAvatar';

export const HexagonalAvatarTag = (props: any) => {
  return (
    <div className="flex">
      <HexagonalAvatar {...props} />
      <div className="flex items-center justify-center ml-3 mt-1">
        <span className="text-cyan text-s font-bold">@</span>
        {props.nameTag}
      </div>
    </div>
  );
};

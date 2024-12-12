export type HexagonalCardProps = {
  icon: {
    width: number;
    height: number;
    src: string;
  };
  title?: string;
  titleStyles?: string;
  description?: string;
  id?: string;
  flippingCard?: boolean;
  small?: boolean;
};

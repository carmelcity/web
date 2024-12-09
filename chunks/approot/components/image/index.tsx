import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = (image: any) => {
  return <div />;
  // return <LazyLoadImage className={image.className} effect="blur" src={image.src} />;
};

export default LazyImage;

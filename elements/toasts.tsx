import { toast } from 'react-toastify';
import { SmallSpinner } from './spinners';
import { CheckMark } from '~/elements/icons';
import { readexPro } from '~/elements/fonts'

const closeButton = () => {
  return (
    <button type="button" className="text-grey text-3xl font-thin absolute -top-1 right-2">
      &times;
    </button>
  );
};

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    style: {
      background: 'rgba(1, 55, 47, 1)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      fontFamily: readexPro.className,
    },
    progressStyle: {
      background: 'cyan',
    },
    closeButton: closeButton,
    bodyStyle: {
      fontSize: '14px',
      fontFamily: readexPro.className,
    },
    icon: (
      <span className="flex items-center justify-center bg-dark-green h-6 w-6 absolute -top-3.5 border border-cyan/20">
        <CheckMark />
      </span>
    ),
  });
};

export const showStatus = (message: string) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 10000,
    style: {
      background: 'black',
      color: 'white',
      textAlign: 'center',
    },
    progressStyle: {
      background: 'black',
    },
    icon: (
      <span className="flex items-center justify-center bg-transparent w-4 h-4 pl-7" style={{ top: '40%' }}>
        <SmallSpinner />
      </span>
    ),
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    style: {
      background: 'rgba(1, 55, 47, 1)'
    }
  });
};

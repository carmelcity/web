import React from 'react';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { Dialog } from '@headlessui/react';
import { Modal } from '~/components/modal';
import walletConnect from '~/images/dashboard/WalletConnect.webp';
import metamask from '~/images/dashboard/Metamask.png';
import info from '~/images/dashboard/Info.webp';
import { QrModalProps } from './props';
import QR_colored from '~/images/dashboard/QR_colored.webp';
import link from '~/images/dashboard/Link.webp';
import { showSuccessToast } from '~/components/toasts';
import CopyToClipboard from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react'; // Import the QRCode component

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const QrModal = ({ isModalOpen, setModalOpen, address }: QrModalProps) => {
  const openMetamaskExtension = async () => {
    // Check if Metamask is installed
    if (window.ethereum) {
      try {
        // Request the user's accounts
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        // Check if the user is already connected
        if (Array.isArray(accounts) && accounts.length > 0) {
          window.alert(`User is already connected: ${accounts[0]}`);
        } else {
          // User is not connected, request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // console.log('User connected successfully');
        }

        // Close the modal
        setModalOpen(false);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      // Metamask is not installed, show a confirmation dialog
      const isConfirmed = window.confirm('Metamask is not installed. Do you want to download it?');

      if (isConfirmed) {
        // Redirect to Metamask download page
        window.open('https://metamask.io/download.html', '_blank');
        setModalOpen(false);
      }
    }
  };

  const connectWallet = () => {
    window.confirm('Work in progress. Please try with Metamask until we finish here :)');
  };

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div>
        <Image src={QR_colored} alt="qr" className="mx-auto" />
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title as="h3" className={`${readexPro.className} font-normal text-white leading-6 text-grey`}>
            Scan QR code
          </Dialog.Title>
          <div className="mt-2">
            <p className={`${readexPro.className} font-thin text-sm text-grey`}>Scan this QR code with your device</p>
          </div>
          {/* Use the QRCode component with the address */}
          <QRCode
            value={address}
            className="mx-auto"
            style={{
              border: '4px solid',
              borderImage: 'linear-gradient(45deg, #00FFFF, #ADFFAB) 1',
            }}
            size={300}
          />
          <CopyToClipboard text={address} onCopy={() => showSuccessToast('Address copied to clipboard')}>
            <div className="flex w-full mt-3 mx-auto justify-center hover:cursor-pointer">
              <Image src={link} alt="link" className="h-5 mr-2" />
              <p className={`${readexPro.className} font-thin text-sm text-cyan`}>Copy Address</p>
            </div>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex mt-5 sm:mt-6">
        <button
          type="button"
          className={`${readexPro.className} w-full h-32 mx-2 justify-center m-auto rounded-md bg-cyan/50 bg-opacity-50 text-sm text-white border border-cyan border-opacity-20 border-solid border-1`}
          onClick={connectWallet}>
          <Image src={walletConnect} alt="connect" className="mx-auto mb-3" />
          Wallet Connect
        </button>
        <button
          type="button"
          className={`${readexPro.className} w-full h-32 mx-2 justify-center m-auto rounded-md bg-cyan/50 bg-opacity-50 text-sm text-white border border-cyan border-opacity-20 border-solid border-1`}
          onClick={openMetamaskExtension}>
          <Image src={metamask} alt="connect" className="mx-auto mb-3 w-12" />
          Metamask
        </button>
      </div>
      <div className="flex mt-5 sm:mt-6 sm:ml-1 items-center">
        <Image src={info} alt="info" className="mb-auto" />
        <p className={`${readexPro.className} font-thin text-sm text-grey ml-2`}>
          Connecting to this app requires a Polygon Wallet.
        </p>
      </div>
    </Modal>
  );
};

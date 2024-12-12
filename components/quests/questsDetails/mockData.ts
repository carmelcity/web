import placeholderImage from 'images/QuestsDetailsPlaceholder.png';
import productImage from '../../../images/product-image.jpg'; // TO BE REMOVED AFTER REAL API CALL
import userPhoto from '../../../images/user-64-12.jpg'; // TO BE REMOVED AFTER REAL API CALL

export const stepperData = [
  {
    data: [
      {
        title: 'Learn 5 Basic Concepts About Variables',
        shortDescription:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: productImage,
        userPhoto: userPhoto,
        nameTag: 'nametag',
        reward: '341 Meraki',
        info: '5 Lorem Ipsum',
        tagText: 'Conversation',
        id: '5-concepts',
      },
    ],
    steps: [
      {
        id: 1,
        title: 'Set-up your wallet',
        description:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: placeholderImage,
        complete: true,
        reward: '15 MERAKI',
        link: 'https://google.com',
      },
      {
        id: 2,
        title: 'Set-up your wallet',
        description:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: placeholderImage,
        complete: true,
        reward: '15 MERAKI',
        link: 'https://google.com',
      },
      {
        id: 3,
        title: 'Set-up your wallet',
        description:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: placeholderImage,
        complete: false,
        reward: '15 MERAKI',
        link: 'https://google.com',
      },
      {
        id: 4,
        title: 'Set-up your wallet',
        description:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: placeholderImage,
        complete: false,
        reward: '15 MERAKI',
        link: 'https://google.com',
      },
      {
        id: 5,
        title: 'Set-up your wallet',
        description:
          'I put this together in an attempt to see if I can get all my kids comfortable with some basic concepts in programming while keeping it fun and simple to do',
        photo: placeholderImage,
        complete: false,
        reward: '15 MERAKI',
        link: 'https://google.com',
      },
    ],
  },
];

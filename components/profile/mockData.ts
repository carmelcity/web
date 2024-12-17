import profilePhoto from '~/images/AzukiImage5.png';
import coverPhoto from '~/images/profile-bg.jpg';
import * as nft from '~/images/NFT.avif';

const post = {
  username: 'some username',
  author: 'author',
  authorImageLink: 'https://picsum.photos/300/300',
  imageLink: 'https://picsum.photos/id/237/1080',
  slug: 'some slug',
  cities: ['NYC', 'Chigaco'],
  data: {
    tags: ['NFT Update'],
    title: 'Save Thousands Of Lives Through This NFT',
  },
  date: '2021-06-08',
};

export const profileData = {
  user: {
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque diam. Ut a quam iaculis, lobortis magna ut, pretium neque.',
    avatarImage: profilePhoto,
    bannerImage: coverPhoto,
    joined: 'June 1, 2023',
    nft: nft,
  },
  system: {
    username: '',
  },
};

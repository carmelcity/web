// ✔ Always online
// ✔ Users own their data
// ✔ Built-in privacy and encryption
// ✔ Owned and operated by the community
// ✔ Community-owned digital economy
// ✔ Everyone is invited to contribute
// ✔ Low cost of innovation
// ✔ Fast time to market
// ✔ Composable architecture
// ✔ Reusable functionality

/*

 1. User-Owned Data
 2. Decentralized Infrastructure
 3. Always Online
 4. Peer-to-peer Messaging
 5. Encrypted Channels
 6.
 7.
 8.
 9.
10.

**/

const perks = [
  {
    name: 'Peer-to-Peer Infrastructure',
    imageSrc: '/images/feature-app-chain.png',
    description:
      'Carmel Apps run on the Carmel Network owned and operated by the Carmel Community. No central servers. No middlemen.',
  },
  {
    name: 'Always Online',
    imageSrc: '/images/feature-app-secure.png',
    description:
      'As long as the Carmel Network keeps operating, Carmel Apps will always be up and running. There is no single point of failure.',
  },
  {
    name: 'User-Owned Data',
    imageSrc: '/images/feature-app-home.png',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    name: 'Personal Wallet',
    imageSrc: '/images/feature-app-wallet.png',
    description: 'Every Carmel Account comes with a secure Digital Wallet attached to their profile.',
  },
  {
    name: 'Digital Assets',
    imageSrc: '/images/feature-app-assets.png',
    description: 'Users own, buy, sell and trade Carmel Assets that can be used inside Carmel Apps.',
  },
  {
    name: 'Digital Payments',
    imageSrc: '/images/feature-app-payments.png',
    description: 'Carmel members can receive and send payments to other members of the Carmel Network.',
  },
  {
    name: 'High-Grade Security',
    imageSrc: '/images/feature-app-encrypt.png',
    description: 'User data is protected with the highest level of encryption and cryptographic algorithms.',
  },
  {
    name: 'Censorship-Free Content',
    imageSrc: '/images/feature-app-content.png',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    name: 'Truly Private Messaging',
    imageSrc: '/images/feature-app-messaging.png',
    description:
      'The Carmel Network allows users to communicate with one another directly and privately. Without a central database.',
  },
  {
    name: 'Community Governance',
    imageSrc: '/images/feature-app-users.png',
    description:
      'Carmel Members organize themselves in Carmel Cities owned, operated and governed completely independently.',
  },
];

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 mt-20 bg-opacity-50 border border-primary-color">
      <div className="mx-auto mt-20 max-w-5xl sm:text-center items-center justify-center">
        <h2 className="text-base font-semibold leading-7 text-primary">
          Bringing human-centric digital experiences to life.
        </h2>
        <h1 className="w-full mb-5 lg:text-4xl text-2xl text-white inline-block text-transparent bg-clip-text">
          Introducing Carmel Apps.
        </h1>
      </div>
      <div className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={props.image}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 text-left">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map(perk => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="h-32 w-32 -mt-4" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <h1 className="text-2xl font-medium text-primary bg-gradient-to-r from-primary-color via-accent-color to-accent inline-block text-transparent bg-clip-text">
                  {perk.name}
                </h1>
                <p className="mt-2 text-sm text-white">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

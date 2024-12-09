const incentives = [
  {
    name: 'Always Online',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: '/images/app-security.png',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
  {
    name: 'Free Shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
  {
    name: 'Free Shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
];

export default function Main() {
  return (
    <div className="bg-gray-900 mt-20">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map(incentive => (
            <div key={incentive.name} className="flex items-center flex-col">
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-md font-bold text-primary">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-50">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

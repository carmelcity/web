import { CheckCircleIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Economic Freedom.',
    description:
      'Imagine buying, selling, trading digital asset without being dependent on big corporations and feeling like a cog in a giant machine.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Unleashed Creativity.',
    description:
      "Or imagine what's possible when you're invited to contribute to the common good with like-minded people that share your values.",
    icon: CheckCircleIcon,
  },
  {
    name: 'Authentic Openness.',
    description:
      'And just imagine imagine putting new ideas out there and asking for honest feedback without having to self-censor.',
    icon: CheckCircleIcon,
  },
];

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-20 mt-20 border border-primary-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Imagine a new kind of digital experiences.</h2>
          <h1 className="w-full mb-5 lg:text-4xl text-2xl text-white inline-block text-transparent bg-clip-text">
            Human-Centric Digital Experiences.
          </h1>
          <div className="mx-auto max-w-xl sm:text-center items-center justify-center">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experiences that allow us to take back our digital lives. And that put us back in control of being online.
              The kind that put us at the center of the Web.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8 mb-10 ">
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
        <div className="mx-auto mt-2 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none px-6 lg:px-8">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map(feature => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary">
                  <feature.icon className="h-8 w-8 flex-none -mt-1 text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white text-left">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

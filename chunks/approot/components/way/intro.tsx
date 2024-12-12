import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-20 mt-20 border border-primary-color py-24 sm:py-32 lg:w-4/5 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary"> {props.top} </h2>
          <h1 className="w-full mb-5 lg:text-4xl text-2xl text-white inline-block text-transparent bg-clip-text">
            {props.title}
          </h1>
          <div className="mx-auto max-w-xl sm:text-center items-center justify-center">
            <p className="mt-6 text-lg leading-8 text-gray-300">{props.subtitle}</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8 mb-10 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src={props.image}
              alt=""
              className="mask mask-circle mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none px-6 lg:px-8">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {props.features.map((feature: any) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center text-lg lg:text-2xl font-semibold leading-7 text-primary">
                  <CheckCircleIcon
                    className="lg:h-10 lg:w-10 h-6 w-6 flex-none -mt-1 mr-2 text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white text-left">
                  <p className="flex-auto text-left tracking-tight ">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

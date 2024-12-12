import { DetailsCover } from './DetailsCover';
import { DetailsCard } from './DetailsCard';
import { InfoCard } from './InfoCard';

export const QuestsDetails = (details: any) => {
  const data = details.details[0].data[0];
  const stepperData = details.details[0].steps;

  function getFirstIncompleteStepNumber(data: any) {
    for (let i = 0; i < data.length; i++) {
      if (!data[i].complete) {
        return i;
      }
    }
    return -1;
  }

  const firstIncompleteStep = getFirstIncompleteStepNumber(stepperData);

  return (
    <>
      <DetailsCover
        title={data?.title}
        coverImage={data?.photo}
        userPhoto={data?.userPhoto}
        description={data?.shortDescription}
      />
      <div className="w-2/3 mt-8 mb-32">
        <ol role="list" className="relative text-gray-500 dark:text-gray-400">
          {/* This is the first element of the stepper */}
          <li className="relative mb-5 ml-6">
            <span
              className="absolute flex items-center justify-center bg-cyan w-4 h-4 -ml-12 rounded-full -left-4 z-10"
              style={{ top: '5%' }}>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-dark-green-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"></svg>
            </span>
            <InfoCard
              tagText="INTERMEDIATE LEVEL"
              totalAmount="341 meraki"
              title="Back to the basis"
              description={data?.shortDescription}
            />
            <span
              className={`absolute bg-cyan`}
              style={{
                width: '1px',
                top: '1em',
                left: '-56px',
                height: '170%',
              }}
            />
          </li>
          {stepperData.map((step: any, stepId: any) => (
            <li className="relative mb-5 ml-6" key={stepId}>
              {step.complete && (
                <span
                  className="absolute flex items-center justify-center bg-cyan w-8 h-8 -ml-14 rounded-full -left-4 z-10"
                  style={{ top: '43%' }}>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-dark-green-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              )}
              {!step.complete && (
                <span
                  className={`absolute flex items-center justify-center bg-dark-green-secondary w-8 h-8 -ml-14 rounded-full -left-4 z-10 ${
                    stepId === firstIncompleteStep ? 'border border-cyan' : ''
                  }`}
                  style={{ top: '43%' }}
                />
              )}
              <DetailsCard
                title={step.title}
                shortDescription={step.description}
                complete={step.complete}
                photo={step.photo}
                reward={step.reward}
                link={step.link}
              />
              {stepId !== stepperData.length - 1 && (
                <span
                  className={`absolute ${step.complete ? 'bg-cyan' : 'bg-dark-green-secondary'}`}
                  style={{
                    width: '1px',
                    top: '50%',
                    left: '-56px',
                    height: 'calc(100% + 10px)',
                  }}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

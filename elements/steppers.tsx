import { CheckIcon } from '@heroicons/react/20/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const HorizontalStepper = ({ stepsNumber, currentIndex }: any) => {
  const generateStepsArray = () => {
    const steps = [];

    for (let i = 0; i < stepsNumber; i++) {
      if (i < currentIndex) {
        steps.push({ status: 'complete' });
      } else if (i === currentIndex) {
        steps.push({ status: 'current' });
      } else {
        steps.push({ status: 'upcoming' });
      }
    }

    return steps;
  };

  const steps = generateStepsArray();

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={stepIdx} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-cyan" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-cyan">
                  <CheckIcon className="h-5 w-5 text-dark-green-secondary" aria-hidden="true" />
                </div>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-cyan" />
                </div>
                <div
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan bg-dark-green-secondary"
                  aria-current="step">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan" aria-hidden="true" />
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-cyan" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan bg-dark-green-secondary">
                  <span className="h-2.5 w-2.5 rounded-full bg-transparent" aria-hidden="true" />
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 4, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 5, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 6, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 7, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 8, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 9, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  { id: 10, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0]);
  const imgUrl = 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000';

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
        Select a mailing list
      </RadioGroup.Label>

      <div className="mt-4 flex flex-row m-auto gap-x-4 h-auto overflow-x-scroll">
        {mailingLists.map(mailingList => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-indigo-600 ring-2 ring-indigo-600' : '',
                'relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none',
              )
            }>
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-600' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

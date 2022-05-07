import { Combobox, Transition } from '@headlessui/react';
import { SearchIcon, SelectorIcon } from '@heroicons/react/solid';
import { FC, Fragment, ReactElement, useState } from 'react';
import useSWR from 'swr';
import * as api from '../config/api';
import * as I from '../config/interfaces';

type Props = {
    selectLocation: (location: I.Location) => void;
};

const Search: FC<Props> = ({ selectLocation }): ReactElement => {
    const [selected, setSelected] = useState([]);
    const [query, setQuery] = useState('');

    /**
     * @description Provided design seems to limit results to GB location
     */
    const { data, isValidating, error } = useSWR(
        `${api.url}/cities?country=GB${query.length ? `&city=${query.charAt(0).toUpperCase() + query.slice(1)}` : ''}`,
        {
            fallback: []
        }
    );

    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <div className="relative z-10 w-full cursor-default overflow-hidden rounded-lg border-2 border-gray-500 bg-white-50 text-left outline-none sm:text-sm">
                    <Combobox.Input
                        className="w-full rounded-lg border-none py-3 px-4 pl-10 text-sm leading-5 text-black-50 outline-none"
                        displayValue={(location: I.Location) => location.city}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Enter city name"
                        autoComplete="off"
                    />
                    <Combobox.Button className="absolute inset-y-0 left-3 flex items-center pr-2">
                        <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </Combobox.Button>
                </div>
                <div className="-mt-2 overflow-hidden rounded-md">
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="relative z-0  max-h-60 w-full overflow-auto bg-white-50 py-1  text-base shadow-lg ring-1 ring-blue ring-opacity-5 focus:outline-none sm:text-sm">
                            {data?.results && data.results.length ? (
                                data.results.map((location: I.Location) => (
                                    <Combobox.Option
                                        key={location.city}
                                        className={({ active }) =>
                                            `relative block w-full  cursor-default select-none py-2 px-4 text-left text-black-50 hover:cursor-pointer ${
                                                active ? 'bg-gray-50' : ''
                                            }`
                                        }
                                        value={location.city}
                                        as="button"
                                        onClick={() => selectLocation(location)}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {location.city}
                                                </span>
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            ) : (
                                <div className="relative cursor-default select-none py-2 px-4 text-black-50">
                                    Nothing found.
                                </div>
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </div>
        </Combobox>
    );
};

export default Search;

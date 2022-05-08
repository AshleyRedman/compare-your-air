import { SearchIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactElement, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import useSWR from 'swr';
import * as api from '../config/api';
import * as I from '../config/interfaces';

type Props = {
    selectLocation: (location: I.Location) => void;
};

const Search: FC<Props> = ({ selectLocation }): ReactElement => {
    const [selected, setSelected] = useState('');
    const [query, setQuery] = useState('');
    const [showResults, setShowResults] = useState(false);

    const { data, isValidating } = useSWR(
        `${api.url}/locations?country_id=GB${
            query.length ? `&city=${query.charAt(0).toUpperCase() + query.slice(1)}` : ''
        }`,
        {
            fallback: []
        }
    );

    return (
        <ClickAwayListener
            onClickAway={() => {
                setShowResults(false);
                setQuery('');
            }}
        >
            <div className="relative">
                <div className="relative z-20">
                    <input
                        type="text"
                        value={selected}
                        placeholder="Enter city name"
                        autoComplete="off"
                        aria-busy={isValidating}
                        className="w-full rounded-xl border-2 border-gray-500 p-4 pl-12 leading-5 text-black-50 outline-none"
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelected(e.target.value);
                        }}
                        onFocus={() => setShowResults(true)}
                    />
                    <SearchIcon className="absolute top-0 left-3 h-full w-7 text-gray-500" aria-hidden="true" />
                </div>
                <AnimatePresence>
                    {showResults && (
                        <motion.div
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            transition={{ duration: 0.25 }}
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                            className="relative z-10 -mt-4 overflow-hidden rounded-xl bg-white-50 pt-8 pb-4"
                        >
                            <div className="max-h-52 space-y-0.5 overflow-y-auto text-black-50">
                                {/** No loading && there are results */}
                                {!isValidating &&
                                    !!data?.results &&
                                    !!data?.results.length &&
                                    data.results.map((location: I.Location) => (
                                        <button
                                            key={location.id}
                                            className="block w-full truncate py-2 px-4 text-left outline-none hover:bg-gray-50 focus:bg-gray-50"
                                            aria-label={location.name}
                                            onClick={() => {
                                                selectLocation(location);
                                                setShowResults(false);
                                                setSelected('');
                                            }}
                                            onMouseEnter={() => setSelected(location.name)}
                                            onMouseLeave={() => setSelected('')}
                                        >
                                            {location.name}
                                        </button>
                                    ))}

                                {/** Not loading && there are no results */}
                                {!isValidating && !data?.results.length && (
                                    <p className="relative cursor-default select-none py-2 px-4">Nothing found.</p>
                                )}

                                {/** No loading state specified */}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ClickAwayListener>
    );
};

export default Search;

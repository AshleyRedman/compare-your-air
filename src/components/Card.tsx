import { XIcon } from '@heroicons/react/solid';
import { DateTime } from 'luxon';
import { FC, ReactElement, useMemo } from 'react';
import useSWR from 'swr';
import * as api from '../config/api';
import * as I from '../config/interfaces';

type Props = {
    location: I.Location;
    removeCallback: (location: I.Location) => void;
};

const Card: FC<Props> = ({ location, removeCallback }): ReactElement => {
    const { data } = useSWR(`${api.url}/countries?country_id=${location.country}`, {
        fallback: []
    });

    const relativeTime = useMemo(() => DateTime.fromISO(location.lastUpdated).toRelative(), [location.lastUpdated]);

    return (
        <div className="relative rounded-xl bg-white-50 p-6 text-black-100">
            <button onClick={() => removeCallback(location)} className="absolute top-3 right-3">
                <XIcon className="h-8 w-8 text-black-50" aria-hidden="true" />
            </button>
            <span className="block text-sm font-medium uppercase tracking-wide">Updated {relativeTime}</span>
            <h2 className="mt-2 block text-xl font-semibold text-purple xl:mt-1">{location.name}</h2>
            <h3 className="mt-2">
                in {location.city}
                {!!data?.results && `, ${data.results[0].name}`}
            </h3>
            <span className="mt-2 block font-semibold">
                Values:{' '}
                {location.parameters.map((p, i) => (
                    <span key={p.id}>
                        {p.displayName}: {Math.round(p.average)}
                        {i !== location.parameters.length - 1 && ', '}
                    </span>
                ))}
            </span>
        </div>
    );
};

export default Card;

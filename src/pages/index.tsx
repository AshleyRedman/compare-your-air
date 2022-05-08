import type { NextPage } from 'next';
import { ReactElement, useCallback, useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import * as I from '../config/interfaces';

const Home: NextPage = (): ReactElement => {
    const [selectedLocations, setSelectedLocations] = useState<I.Location[]>([]);

    const add = useCallback(
        (location: I.Location) => {
            // UX choice here, do newly added items get prepended or appended, i have gone for prepended
            if (!selectedLocations.includes(location)) setSelectedLocations([location, ...selectedLocations]);
        },
        [selectedLocations]
    );

    const remove = useCallback(
        (location: I.Location) => setSelectedLocations(selectedLocations.filter((l) => l !== location)),
        [selectedLocations]
    );

    return (
        <section className="container mx-auto mt-16 px-8 xl:mt-24">
            <h1 className="mx-auto w-fit text-center text-3xl font-semibold xl:text-5xl">Compare your Air</h1>
            <article className="mt-8 space-y-3 lg:space-y-2">
                <p className="mx-auto w-fit text-center text-xl leading-snug lg:text-2xl">
                    Compare the air quality between cities in the UK.
                </p>
                <p className="mx-auto w-fit text-center text-xl leading-snug lg:text-2xl">
                    Select cities to compare using the search tool below.
                </p>
            </article>

            <div className="mx-auto mt-12 lg:w-5/12">
                <Search selectLocation={add} />
            </div>

            {!!selectedLocations.length && (
                <div className="mt-10 grid gap-4 lg:mt-16 lg:grid-cols-2 xl:mx-36 xl:gap-x-16 xl:gap-y-12">
                    {selectedLocations.map((location) => (
                        <Card key={location.id} location={location} removeCallback={remove} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Home;

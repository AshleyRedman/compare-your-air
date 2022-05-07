import type { NextPage } from 'next';
import { ReactElement, useCallback, useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import * as I from '../config/interfaces';

const Home: NextPage = (): ReactElement => {
    const [selectedLocations, setSelectedLocations] = useState<I.Location[]>([]);

    const add = useCallback(
        (location: I.Location) => setSelectedLocations([...selectedLocations, location]),
        [selectedLocations]
    );

    const remove = useCallback(
        (location: I.Location) => setSelectedLocations(selectedLocations.filter((l) => l !== location)),
        [selectedLocations]
    );

    return (
        <>
            <div className="container mx-auto mt-16 space-y-8 px-8 xl:mt-24 xl:space-y-12">
                <h1 className="mx-auto w-fit text-center text-3xl font-semibold xl:text-5xl">Compare your Air</h1>
                <article className="space-y-3 lg:space-y-2">
                    <p className="mx-auto w-fit text-center text-xl leading-snug lg:text-2xl">
                        Compare the air quality between cities in the UK.
                    </p>
                    <p className="mx-auto w-fit text-center text-xl leading-snug lg:text-2xl">
                        Select cities to compare using the search tool below.
                    </p>
                </article>

                <div className="mx-auto lg:w-5/12">
                    <Search selectLocation={add} />
                </div>

                {selectedLocations.map((location) => (
                    <Card key={location.city} location={location} lastUpdated={new Date()} removeCallback={remove} />
                ))}
            </div>
        </>
    );
};

export default Home;

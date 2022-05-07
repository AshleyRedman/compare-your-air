import type { NextPage } from 'next';
import { ReactElement } from 'react';

const Home: NextPage = (): ReactElement => {
    return (
        <>
            <div className="font-sans">
                <p className="font-light">Hello</p>
                <p className="font-light italic">Hello</p>

                <p className="font-normal">Hello</p>
                <p className="font-normal italic">Hello</p>

                <p className="font-medium">Hello</p>
                <p className="font-medium italic">Hello</p>

                <p className="font-semibold">Hello</p>
                <p className="font-semibold italic">Hello</p>

                <p className="font-bold">Hello</p>
                <p className="font-bold italic">Hello</p>

                <p className="font-extrabold">Hello</p>
                <p className="font-extrabold italic">Hello</p>
            </div>
        </>
    );
};

export default Home;

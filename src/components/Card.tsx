import { FC, ReactElement } from 'react';
import * as I from '../config/interfaces';

type Props = {
    location: I.Location;
    lastUpdated: Date;
    removeCallback: (location: I.Location) => void;
};

const Card: FC<Props> = ({ location, lastUpdated, removeCallback }): ReactElement => {
    return (
        <div>
            <button onClick={() => removeCallback(location)}>remove</button>
            {location.city}
        </div>
    );
};

export default Card;

/**
 * @see https://docs.openaq.org/#/v2/locations_get_v2_locations__location_id__get
 */
export interface Location {
    city: string;
    coordinates: { latitude: number; longitude: number };
    country: string;
    entity: string;
    firstUpdated: string;
    id: number;
    isAnalysis: boolean;
    isMobile: boolean;
    lastUpdated: string;
    measurements: number;
    name: string;
    parameters: {
        average: number;
        count: number;
        displayName: string;
        firstUpdated: string;
        id: number;
        lastUpdated: string;
        lastValue: number;
        parameter: string;
        parameterId: number;
        unit: string;
    }[];
    sensorType: string;
    sources: {
        name: string;
        url: string;
    }[];
}

/**
 * @see https://docs.openaq.org/#/v2/countries_get_v2_countries_get
 */
export interface Country {
    cities: number;
    code: string;
    count: number;
    firstUpdated: string;
    lastUpdated: string;
    locations: number;
    name: string;
    parameters: string[];
    sources: number;
}

export type FLightType = {
    airline: {
        iataCode: string
        icaoCode: string
        name: string
    },
    arrival: {
        actualRunway: string
        actualTime: string
        delay: string
        estimatedRunway: string
        estimatedTime: string
        gate: string
        iataCode: string
        icaoCode: string
        scheduledTime: string
        terminal: string
    },
    departure: {
        actualRunway: string
        actualTime: string
        delay: string
        estimatedRunway: string
        estimatedTime: string
        gate: string
        iataCode: string
        icaoCode: string
        scheduledTime: string
        terminal: string
    },
    flight: {
        iataNumber: string
        icaoNumber: string
        number: string
    }
    status: string
    type: string
}


export type AirportType = {
    "airportId": string
    "nameAirport": string
    "codeIataAirport": string
    "codeIcaoAirport": string
    codeIataCity: string
}

export type AirlineType = {
    "airlineId": string
    "nameAirline": string
    "codeIataAirline": string
    "codeIcaoAirline": string
}

export type CityType = {
    "cityId": string
    "nameCity": string
    "codeIataCity": string
}

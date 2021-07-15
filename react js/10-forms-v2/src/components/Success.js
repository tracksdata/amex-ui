import React from 'react';
import { FLIGHTS } from '../data/FlightData';

const Success = ({ flight }) => {
    let { origin, destination, flightDate, travellers } = flight;
    let results = {}

    function filterFlights() {
        results = FLIGHTS.filter(flight => flight.origin === origin && flight.destination === destination && flight.flightDate === flightDate)
    }

    function renderFlights() {
        return results.map(flight => {
            return (
                <tr>
                    <td><img src={flight.flightInfo.airlineInfo.airlineLogo} height='40px' width='40'></img></td>
                    <td>{flight.flightInfo.airlineInfo.airlineName}</td>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.fare.ticketFare}</td>
                    <td><button class="btn btn-primary">Book</button></td>
                </tr>
            )
        })
    }

    return (
        <div>

            {filterFlights()}

            <hr />

            <table className="table table-hover">
                <tbody>

                    {renderFlights()}
                </tbody>
            </table>
        </div>
    );
};

export default Success;
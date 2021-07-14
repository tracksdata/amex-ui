import React, { useState, useEffect } from 'react';

const FlightSearch = () => {

    const [flight, setFlight] = useState({
        origin: '',
        destination: '',
        flightDate: '',
        travellers: ''
    })

    const [isSubmited, setIsSubmited] = useState(false);
    const [errors, setErrors] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();

        // validate the form
        setErrors((validateForm(flight)));
        // save form to server
        setIsSubmited(true);

    }

    useEffect(() => {
        console.log(">>>> Errors:: " + errors.length);
        console.log(">>>>> useEffect <<<<<<<");
        if (Object.keys(errors).length === 0 && isSubmited) {
            console.log(">>>>>>>> Form is clear >>>>>>>");
            // logic to submit to API server
            console.log(flight);
        }

    }, [errors])

    function validateForm(flight) {
        console.log(">>>>> validating form <<<<<<<");


        let errors = {};

        if (!flight.origin.trim()) {
            console.log(">>>>>>>>>>> <<<<<<<<,");
            errors.origin = "Origin is Required";
        }
        if (!flight.destination.trim()) {
            errors.destination = "Destination is Required";
        }

        if (!flight.flightDate.trim()) {
            errors.flightDate = "Date of Flight is Required";
        }
        if (!flight.travellers.trim()) {
            errors.travellers = "Number of Passengers  must be  proviided";
        } else if (flight.travellers >= 9) {
            console.log(">>>> Travellers <<<<<<");
            errors.travellers = "Number of Travellers must be less than 8";
        }
        return errors;
    }

    function handleChange(e) {

        let { name, value } = e.target;

        setFlight(
            {
                ...flight,
                [name]: value
            }
        )

    }

    return (
        <div className="col-6">

            <div className="card">
                <div className="card-header">
                    <h3>Flight Search Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <label >Origin</label>
                            <input
                                type="text"
                                name="origin"
                                className="form-control"
                                onChange={e => handleChange(e)}
                            />
                            <span className="text-danger">{errors.origin}</span>
                        </div>
                        <div className="form-group">
                            <label >destination</label>
                            <input
                                type="text"
                                name="destination"
                                className="form-control"
                                onChange={e => handleChange(e)}
                            />
                            <span className="text-danger">{errors.destination}</span>

                        </div>

                        <div className="form-group">
                            <label >Flight Date</label>
                            <input
                                type="text"
                                name="flightDate"
                                className="form-control"
                                onChange={e => handleChange(e)}
                            />
                            <span className="text-danger">{errors.flightDate}</span>
                        </div>

                        <div className="form-group">
                            <label>Travellers</label>
                            <input
                                type="text"
                                name="travellers"
                                className="form-control"
                                onChange={e => handleChange(e)}
                            />
                            <span className="text-danger">{errors.travellers}</span>
                        </div>

                        <div className="form-group mt-2 text-center">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </form>



                </div>

            </div>


        </div>
    );
};

export default FlightSearch;
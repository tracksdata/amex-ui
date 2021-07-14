import React from 'react';
import { useForm } from 'react-hook-form';

const FlightSearch = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log(data);
    }

    return (
        <div>
            <h1>Flight Search Form</h1><hr />

            <div className="col-6">

                <div className="card">
                    <div className="card-header">
                        <h3>Flight Search Form</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label >Origin</label>
                                <input
                                    type="text"
                                    name="origin"
                                    className="form-control"
                                    {...register('origin', { required: true })}
                                />
                                {errors.origin && <span className="text-danger">Origin Required</span>}
                            </div>
                            <div className="form-group">
                                <label >destination</label>
                                <input
                                    type="text"
                                    name="destination"
                                    className="form-control"
                                    {...register('destination', { required: true })}
                                />
                                {errors.destination && <span className="text-danger">Destination Required</span>}

                            </div>

                            <div className="form-group">
                                <label >Flight Date</label>
                                <input
                                    type="text"
                                    name="flightDate"
                                    className="form-control"
                                    {...register('flightDate', { required: true })}
                                />
                                {errors.flightDate && <span className="text-danger">FlightDate Required</span>}
                            </div>

                            <div className="form-group">
                                <label>Travellers</label>
                                <input
                                    type="text"
                                    name="travellers"
                                    className="form-control"
                                    {...register('travellers', { required: true })}
                                />
                                {errors.travellers && <span className="text-danger">Travellers Required</span>}

                            </div>

                            <div className="form-group mt-2 text-center">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </form>



                    </div>

                </div>


            </div>

        </div>
    );
};

export default FlightSearch;
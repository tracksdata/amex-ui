import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const FlightSearch = (props) => {

    // form validation rules 
    const validationSchema = yup.object().shape({
        origin: yup.string()
            .required('Origin is required...')
            .min(3, 'Origin must be at least 3 characters')
            .max(20, 'Origin must not exceed 20 characters')
            .matches(/^[A-Za-z]+$/i, 'Origin should contains only characters'),
        destination: yup.string()
            .required('Destination is required'),
        flightDate: yup.string()
            .required('Flight Date is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Flight datte must be a valid date in the format YYYY-MM-DD')
        ,
        returnDate: yup.string()
            .required('Retrurn Flight date is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Return date must be a valid date in the format YYYY-MM-DD')
        ,
        travellers: yup.string()
            .required('Travellers filed is required')
    });

    //const formOptions = { resolver: yupResolver(validationSchema)};

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(validationSchema),
            defaultValues: {
                origin: 'DELHI',
                destination: 'CHENNAI',
                flightDate:'2021-06-26',
                returnDate:'2021-07-18',
                returnTrip: false,
                travellers: 1
            },
            mode: 'onBlur'
        }
    );

    const returnTrip = watch('returnTrip');

    const onSubmit = (data) => {
        console.log(">>>>> insubmit >>>>>");
        // forward to success page
        console.log(data);
        props.onAction(data);
        props.setFormSubmitStatus(true)
        console.log(">>> bla");

    }

    return (
        <div>

            <h2>Flight Search Form</h2><hr />

            <div className="col-5">

                <div className="col-9">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 form-check form-switch">
                          
                            <input
                                type="checkbox"
                                {...register('returnTrip')}
                                className="form-check-input"
                            />
                              <label className="form-check-label" for="flexCheckDefault">Return Trip</label>

                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Depart From</label>
                            <input
                                type="text"
                                name="origin"
                                className="form-control"
                                {...register('origin')}
                            />
                            <div className="text-danger">{errors.origin?.message}</div>

                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Going To</label>
                            <input
                                type="text"
                                name="destination"
                                className="form-control"
                                {...register('destination')}
                            />
                            <div className="text-danger">{errors.destination?.message}</div>

                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Depature Date</label>
                            <input
                                type="text"
                                name="flightDate"
                                className="form-control"
                                {...register('flightDate')}


                            />
                            <div className="text-danger">{errors.flightDate?.message}</div>
                        </div>

                        {

                            returnTrip ? (<div className='mb-3'>

                                <label className='form-label fw-bold'>Return Date</label>
                                <input
                                    type='text'
                                    name='returnDate'
                                    className='form-control'
                                    {...register('returnDate')}

                                />
                                <div className="text-danger">{errors.returnDate?.message}</div>

                            </div>) : null
                        }

                        <div className="mb-3">
                            <label className="form-label fw-bold">Travellers</label>
                            <input
                                type="text"
                                name="travellers"
                                className="form-control"
                                {...register('travellers')}

                            />
                            <div className="text-danger">{errors.travellers?.message}</div>
                        </div>

                        <div className="mb-3 text-center">
                            <button type='submit' className="btn btn-primary">Search</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default FlightSearch;
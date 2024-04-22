import { useState, useEffect } from "react";
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function HealthStats({user, setUser, onEditUser}){

    const navigate = useNavigate()   

    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            pulse_rate: user['pulse_rate'],
            blood_pressure: user['blood_pressure'],
            temparature: user['temparature'],
            blood_group: user['blood_group']
        },
        onSubmit : (values) => {
            
            onEditUser(values)
            formik.resetForm()
            navigate('/dashboard')

        }
    })
console.log(formik.values)
    return(
        <>
            <Container>
                <form className="sign-up" onSubmit={formik.handleSubmit}>
                    <h2 className="text-center mb-4">Update your Health Stats</h2>
                    {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div data-mdb-input-init className="form-outline">
                                <input type="number" name="pulse_rate" value={formik.values.pulse_rate} onChange={formik.handleChange} className="form-control" />
                                <label className="form-label" htmlFor="pulse_rate">Enter your Heart Pulse (bpm)</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div data-mdb-input-init className="form-outline">
                                <input type="text-area" name="blood_pressure" value={formik.values.blood_pressure} onChange={formik.handleChange} className="form-control" />
                                <label className="form-label" htmlFor="blood_pressure">Enter your Blood Pressure (mm/Hg)</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div data-mdb-input-init className="form-outline">
                                <input type="number" name="temparature" value={formik.values.temparature} onChange={formik.handleChange} className="form-control" />
                                <label className="form-label" htmlFor="temparature">Enter your Temperature (°C)</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div data-mdb-input-init className="form-outline">
                                <select className="form-control form-select" name="blood_group" value={formik.values.blood_group} onChange={formik.handleChange}>
                                    <option defaultValue={''}>Select an option</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                                <label className="form-label" htmlFor="blood_group">Enter your Blood Group (mm/Hg)</label>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div className="mb-4 text-center d-flex justify-content-between">
                        <button data-mdb-ripple-init type="reset" className="btn btn-warning mb-4 text-center" onClick={() => formik.resetForm()}>RESET</button>                   
                        <button data-mdb-ripple-init type="submit" className="btn btn-info mb-4 text-center">UPDATE</button> 
                    </div>
                </form>
            </Container>
        </>
    )
}
import { useState, useEffect } from "react";
import { useFormik } from "formik"
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function BookAppointment({specializations, allDoctors, onBookAppointment}){

    const navigate = useNavigate()   
    const [spec, setSpec] = useState('')
    const [filteredDoctors, setFilteredDoctors] = useState([])

    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            specialization: spec,
            doctor_id: "",
            time: "",
            date: "",
            patient_note: ""
        },
        onSubmit : (values) => {
            onBookAppointment(values)
            formik.resetForm()
            navigate('/dashboard')

        }
    })

    useEffect(() => {
        const filteredDoctors = allDoctors.filter((doctor) => {
            return doctor.specialization === spec
        })
        setFilteredDoctors(filteredDoctors)
    }, [spec, allDoctors])

    return(
        <>
            <Container>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-4">Book an Appointment</h2>
                {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <select className="form-control form-select" name="specialization" value={formik.values.specialization} onChange={(e) => setSpec(e.target.value)}>
                                    <option defaultValue={''}>Select an option</option>
                                    {
                                        specializations.map(spec => {
                                            return(
                                                <option key={spec.id}>{spec.name}</option>
                                            )
                                        })
                                    }
                            </select>
                            <label className="form-label" htmlFor="specialization">Select Area of Treatment</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Select Doctor --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <select required className="form-control form-select" name="doctor_id" value={formik.values.doctor_id} onChange={formik.handleChange}>
                                <option>Select an option</option>
                                {
                                    filteredDoctors.map((doc) => {
                                        return(
                                            <option key={doc.id} value={doc.id}>{doc.name} - {spec}</option>
                                        )
                                    })
                                }
                            </select>
                            <label className="form-label" htmlFor="doctor_username">Select Doctor</label>
                        </div>
                    </div>
                </div>
                {/* <!-- Text Area --> */}                        
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div data-mdb-input-init className="form-outline">
                            <input type="time" name="time" value={formik.values.time} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="time">Select Time</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-mdb-input-init className="form-outline">
                            <input type="date" name="date" value={formik.values.date} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="date">Select Date</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Text Area --> */}                        
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <textarea type="text-area" name="patient_note" value={formik.values.patient_note} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="patient_note">Patients Note</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <div className="mb-4 text-center d-flex justify-content-between">
                    <button data-mdb-ripple-init type="submit" className="btn btn-info mb-4 text-center">BOOK</button> 
                    <button data-mdb-ripple-init type="reset" className="btn btn-warning mb-4 text-center" onClick={() => {setSpec(''); formik.resetForm()}}>RESET</button>                   
                </div>
            </form>
            </Container>
        </>
    )
}
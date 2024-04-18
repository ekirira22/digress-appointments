import { useState, useEffect } from "react";
import { useFormik } from "formik"
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Container } from 'react-bootstrap'
import DataFetch from "./DataFetch";
initMDB({ Input, Ripple });

export default function SignUp(){
    const [doctor, setDoctor] = useState(false)
    const [specializations, setSpecializations] = useState([])
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            name : "",
            username: "",
            email: "",
            password: "",
            address: "",
            gender: "",
            doctors_id: "",
            specialization: ""
        }
    })
    useEffect(() => {
        const response = DataFetch("http://localhost:4000/specializations", "GET")
        response.then(specializations => setSpecializations(specializations))
    },[])

    return(
        <Container>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-4">Sign up</h2>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" for="name">Full name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" for="username">Alias /Username</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                    <label className="form-label" for="email">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" for="password">Password</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="password" name="confirm_password" className="form-control" />
                            <label className="form-label" for="confirm_password">Confirm Password</label>
                        </div>
                    </div>
                </div>
                {/* Address and Gender input  */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" for="address">Address</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <select className="form-control form-select" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                <option selected>Select an option</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <label className="form-label" for="gender">Gender</label>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" name="doctor" onClick={() => setDoctor(!doctor)}/>
                    <label className="form-check-label" for="doctor">
                        Register as Doctor
                    </label>
                </div>

                {/* If they're registered as a doctor  */}

                {!doctor ? null :
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <input type="number" name="doctors_id" value={formik.values.doctors_id} onChange={formik.handleChange} className="form-control" />
                                <label className="form-label" for="doctors_id">Doctor's ID / Practitioner ID</label>
                            </div>
                        </div>
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <select className="form-control form-select" name="specialization" value={formik.values.specialization} onChange={formik.handleChange}>
                                    <option selected>Select an option</option>
                                    {
                                        specializations.map(spec => {
                                            return(
                                                <option key={spec.id}>{spec.specialization}</option>
                                            )
                                        })
                                    }
                                </select>
                                <label className="form-label" for="gender">Specialization</label>
                            </div>
                        </div>
                    </div>
                }

                {/* <!-- Submit button --> */}
                <button data-mdb-ripple-init type="button" className="custom-btn mb-4 text-center">SIGN UP</button>

            </form>
        </Container>
        
    )
}
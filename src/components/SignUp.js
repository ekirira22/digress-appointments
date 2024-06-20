import { useState } from "react";
import { useFormik } from "formik"
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
initMDB({ Input, Ripple });

export default function SignUp({onSignUp, specializations}){
    const navigate = useNavigate()

    const [isDoctor, setDoctor] = useState(false)
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            name : "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            address: "",
            gender: "",
            doctors_id: "",
            specialization: ""
        },
        onSubmit : (values) => {
            onSignUp(values)
            formik.resetForm()
            navigate('/login')
        }
    })
    
    return(
        <>
            <Container>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-4">Sign up</h2>
                {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="name">Full name</label>
                            <input required type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="username">Alias /Username</label>
                            <input required type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input required type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                </div>

                {/* <!-- Password input --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input required type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="confirm_password">Confirm Password </label>
                            <input required type="password" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                </div>
                {/* Address and Gender input  */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="gender">Gender</label>
                            <select required className="form-control form-select" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                <option defaultValue={'M'}>Select an option</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" name="isDoctor" onClick={() => setDoctor(!isDoctor)}/>
                    <label className="form-check-label" htmlFor="isDoctor">
                        Register as Doctor
                    </label>
                </div>

                {/* If they're registered as a isDoctor  */}

                {!isDoctor ? null :
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <label className="form-label" htmlFor="doctors_id">Doctor's ID / Practitioner ID</label>
                                <input type="number" name="doctors_id" value={formik.values.doctors_id} onChange={formik.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <label className="form-label" htmlFor="gender">Specialization</label>
                                <select className="form-control form-select" name="specialization" value={formik.values.specialization} onChange={formik.handleChange}>
                                    <option defaultValue={''}>Select an option</option>
                                    {
                                        specializations.map(spec => {
                                            return(
                                                <option key={spec.id}>{spec.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                }

                {/* <!-- Submit button --> */}
                <div className="mb-4 text-center">
                    <button type="submit" className="btn btn-info mb-4 text-center">SIGN UP</button>                    
                </div>

            </form>
            </Container>
            <Footer />
        </>
        
        
    )
}
import { useState, useEffect } from "react";
import { useFormik } from "formik"
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Container } from 'react-bootstrap'
import DataFetch from "./DataFetch";
import { useNavigate } from "react-router-dom";
initMDB({ Input, Ripple });

export default function Login({onLogin}){
    const navigate = useNavigate()
    const [isDoctor, setDoctor] = useState(false)
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            username: "",
            password: "",
        },
        onSubmit : (values) => {
            onLogin(values)
            formik.resetForm()
            navigate('/dashboard')

        }
    })
    return(
        <Container>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-4">Log in</h2>
                {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input required type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="username">Alias /Username</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input required type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" name="isDoctor" onClick={() => setDoctor(!isDoctor)}/>
                    <label className="form-check-label" htmlFor="isDoctor">
                        Login as Doctor
                    </label>
                </div>

                {/* <!-- Submit button --> */}
                <div className="row mb-4 text-center">
                    <button data-mdb-ripple-init type="submit" className="custom-btn mb-4 text-center">LOG IN</button>                    
                </div>
                <div className="row mb-4 text-center">
                    <a className="form-a" href="/forgot">Forgot Password?</a>
                </div>

            </form>
        </Container>
    )
}
import { useState, useEffect } from "react";
import { useFormik } from "formik"
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Profile({user, onEditUser}){
    const navigate = useNavigate()

    const [isDoctor, setDoctor] = useState(false)
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            name : user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            gender: user.gender
        },
        onSubmit : (values) => {
            onEditUser(values)
            formik.resetForm()
            navigate('/dashboard')
        }
    })

    useEffect(() => {
        user['doctors_id'] ? setDoctor(true) : setDoctor(false)
    }, [])

    console.log(isDoctor)
    
    return(
        <>
            <Container>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                <i className="fas fa-user-md fa-3x text-primary"></i>
                <h2 className="text-center mb-4">Edit Profile Information</h2>
                {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input required type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="name">Full name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input required type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="username">Alias /Username</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <input required type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                    <label className="form-label" htmlFor="email">Email address</label>
                </div>

                {/* Address and Gender input  */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="address">Address</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <select required className="form-control form-select" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                <option defaultValue={'M'}>Select an option</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <label className="form-label" htmlFor="gender">Gender</label>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Submit button --> */}
                <div className="mb-4 text-center">
                    <button type="submit" className="btn btn-info mb-4 text-center">UPDATE</button>                    
                </div>

            </form>
            </Container>
        </>
        
        
    )
}

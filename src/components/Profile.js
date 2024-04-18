import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Container, Row, Col, Image } from 'react-bootstrap'; 
import DataFetch from "./DataFetch";

export default function Profile({ id }) {
    const [doctor, setDoctor] = useState(false);
    const [patient, setPatient] = useState(false);
    const [specializations, setSpecializations] = useState([]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            address: "",
            gender: "",
            doctors_id: "",
            specialization: ""
        },
        onSubmit: (values) => {
            // Handle form submission based on whether the user is a doctor or patient
            if (doctor) {
                // Handle submission for doctor profile update
                //updateDoctorProfile(values);
            } else if (patient) {
                // Handle submission for patient profile update
                // updatePatientProfile(values);
            }
        }
    });

    useEffect(() => {
        // Fetch user data based on the ID 
        const fetchData = async () => {
            try {
                const userResponse = await DataFetch(`http://localhost:4000/users/${id}`, "GET");
                const user = await userResponse.json();
                if (user.type == "doctor") {
                    setDoctor(true);
                    const specializationResponse = await DataFetch(`http://localhost:4000/specializations/${id}`, "GET");
                    const specializations = await specializationResponse.json();
                    setSpecializations(specializations);
                } else if (user.type == "patient") {
                    setPatient(true);
                }
                // Populate form values with user data
                formik.setValues({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    address: user.address,
                    gender: user.gender,
                    doctors_id: user.doctors_id || "", // Assuming doctors_id may not exist for patients
                    specialization: user.specialization || "" // Assuming specialization may not exist for patients
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [id, formik]);

    return (
        <Container>
            <Row className="mt-4 mb-4">
                <div className="col-md-4 gap-4">
                    {/* user image from public */}
                    <Image src="/images.png" alt="profile pic" rounded fluid />
                </div>
                <div className="col-md-8">
                <form className="profile" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-4">Profile Details</h2>
                
                {/* Full Name */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="name">Full name</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="username">Alias / Username</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="password" name="confirm_password" className="form-control" />
                    </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="address">Address</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="form-label" htmlFor="gender">Gender</label>
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" name="gender" value={formik.values.gender} onChange={formik.handleChange} className="form-control" />
                    </div>
                </div>

                {/* Doctor's ID */}
                {doctor && (
                    <div className="mb-4">
                        <label className="form-label" htmlFor="doctors_id">Doctor's ID</label>
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" name="doctors_id" value={formik.values.doctors_id} onChange={formik.handleChange} className="form-control" />
                        </div>
                    </div>
                )}

                {/* Specialization */}
                {doctor && (
                    <div className="mb-4">
                        <label className="form-label" htmlFor="specialization">Specialization</label>
                        <select name="specialization" value={formik.values.specialization} onChange={formik.handleChange} className="form-select">
                            <option value="">Select Specialization</option>
                            {specializations.map(spec => (
                                <option key={spec.id} value={spec.name}>{spec.name}</option>
                            ))}
                        </select>
                    </div>
                )}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

                </div>
            </Row>
        </Container>
    );
}

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Doctor() {
    const [doctor, setDoctor] = useState(null);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchDoctor() {
            try {
                // Fetch doctor's information
                const loggedInDoctor = await DataFetch("http://localhost:4000/doctor", "GET");
                if (loggedInDoctor) {
                    setDoctor(loggedInDoctor);
                    // Fetch assigned patients for the doctor
                    fetchAssignedPatients(loggedInDoctor.id);
                } else {
                    // Handle case when doctor is not logged in
                    console.log("Doctor not logged in.");
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchDoctor();
    }, []);

    async function fetchAssignedPatients(doctorId) {
        try {
            // Fetch assigned patients for the doctor
            const assignedPatients = await DataFetch(`http://localhost:4000/doctors/${doctorId}/patients`, "GET");
            setPatients(assignedPatients);
            console.log(assignedPatients);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>DOCTOR'S DASHBOARD</h1>
            {doctor && (
                <div>
                    <h2>Welcome, {doctor.name}!</h2>
                    <h4>You can view your assigned patients below:</h4>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.name}</td>
                                    <td>{patient.username}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default Doctor;
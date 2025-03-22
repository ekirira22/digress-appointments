import {useEffect,useState}  from "react";
import { Table } from "react-bootstrap";
function Patient(){
    const [Doctors,setDoctors]=useState([])

    useEffect(()=>{
        fetchDoctors()
    },[])

    async function fetchDoctors(){
        try {
            const data=await fetch("http://localhost:4000/doctors")
            const allDoctors=await data.json()
            setDoctors(allDoctors)
            console.log(Doctors)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div>
            <h1>PATIENT'S DASHBOARD</h1>
            <h4>Welcome to digress Medical Services                          
                Find the best  doctors with digress healthcare.
                What would like us to do for you.You have an option to choose your own doctor
            </h4>
            <h1>APPOINTMENTS</h1>
            <Table bordered hover >
              <thead>
                 <tr>
                    <th>DOCTOR</th>
                    <th>USERNAME</th>
                    <th>SPECIALIZATION</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>GENDER</th>
                    
                 </tr>
               </thead>
               <tbody>
                {Doctors.map((doctor)=>(
                    <tr key={doctor.id}>
                        <td>{doctor.name}</td>
                        <td>{doctor.username}</td>
                        <td>{doctor.specialization}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.address}</td>
                        <td>{doctor.gender}</td>
                        
                    </tr>
                ))}
                </tbody>            
           </Table>
        </div>
    )
}
export default Patient;
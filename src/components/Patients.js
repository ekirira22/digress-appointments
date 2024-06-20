import tm1 from '../images/team-image3.jpg'
export default function Patients({allPatients}){
    return(
        <>
            <section id="team" data-stellar-background-ratio="1" style={{backgroundPosition: "0px 0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="about-info">
                                <h2 className="wow fadeInUp animated" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>All Patients</h2>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        {
                            allPatients.map(patient => {
                                return(
                                    <div key={patient.id} className="col-md-4 col-sm-6 mt-4">
                                        <div className="team-thumb wow fadeInUp animated" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                                            <img src={tm1} className="team-img" alt="" />
                                            <div className="team-info">
                                                    <h3>{patient.name}</h3>
                                                    <p>Patient Vitals</p>
                                                    <p>Gender: {patient.gender}</p>
                                                    <div className="team-contact-info">
                                                        <p><i className="fa fa-heartbeat fa-1x"> Pulse:</i>{patient.pulse_rate} bpm</p>
                                                        <p><i className="fas fa-stethoscope fa-1x"> Blood Pressure:</i> <a href="#">{patient.blood_pressure} mm/Hg</a></p>
                                                        <p><i className="fa fa-thermometer fa-1x"> Temperature:</i>{patient.temparature} °C </p>
                                                        <p><i className="fas fa-syringe fa-1x"> Blood Group:</i>{patient.blood_group}</p>
                                                    </div>
                                                    {/* <ul className="social-icon">
                                                        <li><a href="#" className="fa fa-linkedin-square"></a></li>
                                                        <li><a href="#" className="fa fa-envelope-o"></a></li>
                                                    </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
             </section>
        </>
    )
}
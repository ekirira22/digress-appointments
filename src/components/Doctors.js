import tm1 from '../images/team-image1.jpg'
export default function Doctors({allDoctors}){
    return(
        <>
            <section id="team" data-stellar-background-ratio="1" style={{backgroundPosition: "0px 0px;"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="about-info">
                                <h2 class="wow fadeInUp animated" data-wow-delay="0.1s" style={{visibility: "visible;", animationDelay: "0.1s;", animationName: "fadeInUp;"}}>Our Doctors</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>
                        {
                            allDoctors.map(doctor => {
                                return(
                                    <div key={doctor.id} class="col-md-4 col-sm-6 mt-4">
                                        <div class="team-thumb wow fadeInUp animated" data-wow-delay="0.2s" style={{visibility: "visible;", animationDelay: "0.2s;", animationName: "fadeInUp;"}}>
                                            <img src={tm1} class="team-img" alt="" />
                                            <div class="team-info">
                                                    <h3>{doctor.name}</h3>
                                                    <p>{doctor.specialization}</p>
                                                    <div class="team-contact-info">
                                                        <p><i class="fa fa-map"></i> Location</p>
                                                        <p><i class="fa fa-envelope-o"></i> <a href="#">{doctor.email}</a></p>
                                                    </div>
                                                    <ul class="social-icon">
                                                        <li><a href="#" class="fa fa-linkedin-square"></a></li>
                                                        <li><a href="#" class="fa fa-envelope-o"></a></li>
                                                    </ul>
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
import { Carousel } from "react-bootstrap";
import news1 from '../images/appointment-image.jpg' 
import Footer from "./Footer";


export default function Home(){
    return(
        <>
         {/* <!-- ABOUT --> */}
            <section id="about">
                <div className="container">
                    <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="about-info">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.6s">Welcome to Your <i className="fa fa-h-square"></i>ealth Center</h2>
                                    <div className="wow fadeInUp" data-wow-delay="0.8s">
                                        <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                                        <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                                    </div>
                                    <figure className="profile wow fadeInUp" data-wow-delay="1s">
                                        <img src={news1} className="img-responsive" alt="" />
                                        <figcaption>
                                                <h3>Dr. Neil Jackson</h3>
                                                <p>General Principal</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </section>
               {/* <section id="appointment" data-stellar-background-ratio="3">
                    <div className="container">
                         <div className="row">

                              <div className="col-md-6 col-sm-6" style={{background: "var(--light)", overflow: "hidden", borderRadius: "20px"}}>
                                   <img style={{borderRadius: "20px"}} src={news1} className="img-responsive" alt="" />
                              </div>

                              <div className="col-md-6 col-sm-6">
                                   <form id="appointment-form" role="form" method="post" action="#">

                                        <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                                             <h2>Make an appointment</h2>
                                        </div>

                                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                                             <div className="col-md-6 col-sm-6">
                                                  <label for="name">Name</label>
                                                  <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" />
                                             </div>

                                             <div className="col-md-6 col-sm-6">
                                                  <label for="email">Email</label>
                                                  <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
                                             </div>

                                             <div className="col-md-6 col-sm-6">
                                                  <label for="date">Select Date</label>
                                                  <input type="date" name="date" value="" className="form-control" />
                                             </div>

                                             <div className="col-md-6 col-sm-6">
                                                  <label for="select">Select Department</label>
                                                  <select className="form-control">
                                                       <option>General Health</option>
                                                       <option>Cardiology</option>
                                                       <option>Dental</option>
                                                       <option>Medical Research</option>
                                                  </select>
                                             </div>

                                             <div className="col-md-12 col-sm-12">
                                                  <label for="telephone">Phone Number</label>
                                                  <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" />
                                                  <label for="Message">Additional Message</label>
                                                  <textarea className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                                                  <button type="submit" className="form-control" id="cf-submit" name="submit">Submit Button</button>
                                             </div>
                                        </div>
                              </form>
                              </div>

                         </div>
                    </div>
               </section> */}
            <Footer />
        </>
    )
}
import { Carousel } from "react-bootstrap";

export default function Home(){
    return(
        <>
        <Carousel fade>
            <Carousel.Item className="vh-100">
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5327648/pexels-photo-5327648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Medical services that <br/> you can trust 100%</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="vh-100">
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Medical services that <br/>you can trust 100%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="vh-100">
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Medical services that<br/> you can trust 100%</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}
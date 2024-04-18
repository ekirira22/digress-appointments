import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Container } from 'react-bootstrap'
initMDB({ Input, Ripple });

export default function SignUp(){
    return(
        <Container>
            <form className="sign-up">
                <h2 className="text-center">Sign up</h2>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="first_name" className="form-control" />
                            <label className="form-label" for="first_name">First name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="last_name" className="form-control" />
                            <label className="form-label" for="last_name">Last name</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" />
                    <label className="form-label" for="email">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="password" id="password" className="form-control" />
                            <label className="form-label" for="password">Password</label>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="password" id="confirm_password" className="form-control" />
                            <label className="form-label" for="confirm_password">Confirm Password</label>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="doctor"/>
                    <label className="form-check-label" for="form2Example33">
                        Register as Doctor
                    </label>
                </div>

                {/* <!-- Submit button --> */}
                <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign up</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>or sign up with:</p>
                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                    </button>

                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                    </button>

                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                    </button>

                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </Container>
        
    )
}
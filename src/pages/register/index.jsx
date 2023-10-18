const Register = () => {

    return (
        <>
            <section className="our-compare pt60 pb60">
                <img
                    src="images/icon/register-page-icon.svg"
                    alt=""
                    className="login-bg-icon wow fadeInLeft"
                    data-wow-delay="300ms"
                />
                <div className="container">
                    <div className="row wow fadeInRight" data-wow-delay="300ms">
                        <div className="col-lg-6">
                            <div className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12">
                                <div className="text-center mb40">
                                    <img className="mb25" src="images/header-logo2.svg" alt="" />
                                    <h2>Create account</h2>
                                    <p className="text">
                                        Sign in with this account across the following sites.
                                    </p>
                                </div>
                                <div className="mb25">
                                    <label className="form-label fw600 dark-color">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="mb15">
                                    <label className="form-label fw600 dark-color">Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div className="d-grid mb20">
                                    <button className="ud-btn btn-thm" type="button">
                                        Sign in <i className="fal fa-arrow-right-long" />
                                    </button>
                                </div>
                                <div className="hr_content mb20">
                                    <hr />
                                    <span className="hr_top_text">OR</span>
                                </div>
                                <div className="d-grid mb10">
                                    <button className="ud-btn btn-white fw400" type="button">
                                        <i className="fab fa-google" /> Continue Google
                                    </button>
                                </div>
                                <div className="d-grid mb10">
                                    <button className="ud-btn btn-fb fw400" type="button">
                                        <i className="fab fa-facebook-f" /> Continue Facebook
                                    </button>
                                </div>
                                <div className="d-grid mb20">
                                    <button className="ud-btn btn-apple fw400" type="button">
                                        <i className="fab fa-apple" /> Continue Apple
                                    </button>
                                </div>
                                <p className="dark-color text-center mb0 mt10">
                                    Not signed up?{" "}
                                    <a className="dark-color fw600" href="page-register.html">
                                        Create an account.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default Register